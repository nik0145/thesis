(function() {
	angular.module('myApp', ['ngRoute','ngMaterial','dndLists']).
	run(function(){
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
				}
			).when('/teacher', {
				templateUrl:'teacher/teacher.html',
				controller:'teacherController',
				controllerAs: 'vm'
				}
			).when('/replacement', {
				templateUrl:'replacement/replace.html',
				controller:'AppCtrl'
			})
			.otherwise({redirectTo: '/'});

	}
	angular.module('myApp')
		.config(['$routeProvider', config],
			['$locationProvider', function($locationProvider) {
			    }]);
})();

