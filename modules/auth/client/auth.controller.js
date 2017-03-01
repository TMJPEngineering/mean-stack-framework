(function() {
    'use strict';

    angular.module('auth')
        .controller('AuthController', AuthController);
    AuthController.$inject = ['AuthFactory'];

    function AuthController(AuthFactory) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.login = function() {
            AuthFactory.login({ username: vm.username, password: vm.password });
        };

        vm.register = function() {
            AuthFactory.register({ username: vm.username, password: vm.password });
        };
    }
})();
