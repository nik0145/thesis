(function() {
    function loginController($http, $window) {
        var vm = this;
        vm.pageTitle='Вход в систему';

        vm.isInvalidForm = true;
        vm.fLogin = "";
        vm.fPassword = "";
        vm.errorMsg = "";

        vm.login = function () {
        	$http({
        		method: 'POST',
        		url: '/api/login',
        		data:{name:vm.fLogin, password:vm.fPassword}
        	}).then(function (response){
        		localStorage.setItem('token', response.token);
        		//$window.location.href = '/#/list';
        		console.log('good');
        	},function (error){
        		  vm.errorMsg = 'Ошибка входа: ' + error.message;
        	});

        };

        vm.validate = function () {
            vm.errorMsg = "";
            vm.isInvalidForm = !(vm.fLogin.length >= 3 && vm.fPassword.length >= 3);
        };

        vm.validate();

    }

    angular.module('myApp')
        .controller('loginController', loginController);
})();

