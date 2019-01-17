(function() {
    function page1Controller() {
        var vm = this;
        vm.test='page1';
    }

    angular.module('myApp')
        .controller('page1Controller', page1Controller);
})();


