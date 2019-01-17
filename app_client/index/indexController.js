(function() {
    function indexController() {
        var vm = this;
        vm.test='index';
    }

    angular.module('myApp')
        .controller('indexController', indexController);
})();