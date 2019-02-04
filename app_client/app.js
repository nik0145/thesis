(function() {
	angular.module('myApp', ['ngRoute','ngMaterial']).
	run(function(){
		console.log('is ready');
	});
	function config($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'index/index.html',
				controller: 'indexController',
				controllerAs: 'vm'
				}
			).when('/bootstrap', {
				templateUrl: 'bootstrap/index.html',
				controller: 'BstrpController',
				controllerAs: 'vm'
				}
			).when('/schedule', {
				templateUrl:'bootstrap/schedule.html',
				controller:'BstrpController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});

	}
	angular.module('myApp')
		.config(['$routeProvider', config],
			['$locationProvider', function($locationProvider) {
			        $locationProvider.hashPrefix('');
			    }]);
})();

