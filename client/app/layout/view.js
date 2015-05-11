(function() {
    'use strict';

    angular
        .module('gpqApp')
        .controller('View', View);

    View.$inject = ['$log', '$q'];
    function View($log, $q) {
        var vm = this;

        activate();

        function activate() {

        }
    }

})();