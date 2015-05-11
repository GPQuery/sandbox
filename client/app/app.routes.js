(function() {
    'use strict';

    angular
        .module('gpqApp')
        .config(uiRouterConfig);

    function uiRouterConfig($stateProvider, $urlRouterProvider) {

        // 
        // Redirect Unmatched URLs
        //
        $urlRouterProvider.otherwise('/');

        //
        // Configure States
        //
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'View as vm'
            });
    }

})();