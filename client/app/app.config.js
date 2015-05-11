(function() {
    'use strict';

    angular
        .module('gpqApp')
        .config(mdThemeConfig);

    function mdThemeConfig($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .dark();
    }

})();