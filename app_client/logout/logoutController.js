(function() {
    function logoutController($window) {
        localStorage.removeItem('token');
        $window.location.href = '/#!/replacement';
    }

    angular.module('myApp')
        .controller('logoutController', logoutController);
})();