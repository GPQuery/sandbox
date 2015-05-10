(function() {
    'use strict';

    angular
        .module('gpqApp.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log', '$q'];
    function dataservice($http, $log, $q) {
        var isPrimed = false;
        var primePromise;

        var service = {

        };

        return service;

        function prime() {
            if(primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                $log.info('Primed dataservice data.');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() {
                    return $q.all(nextPromises);
                })
                .catch($log.error('Error encountered at dataservice ready().'));
        }
        
    }

})();