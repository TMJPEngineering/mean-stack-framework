(function() {
    'use strict';

    angular.module('auth')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise("page not found");
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'content': {
                        templateUrl: 'auth/login.html',
                        controller: 'AuthController',
                        controllerAs: 'ac',
                    }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    'content': {
                        templateUrl: 'auth/register.html',
                        controller: 'AuthController',
                        controllerAs: 'ac',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
