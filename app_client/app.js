(function() {
	angular.module('myApp', ['ngRoute','ngMaterial','dndLists','ngMessages']);
	function config($routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl:'replacement/replace.html',
			controller:'AppCtrl',
			resolve:{
				listDisciplines: function(getDisciplines) {
					return getDisciplines.getDisciplines();
				},
				schedule: function(getSchedule) {
					return getSchedule.getSchedule();
				},
				listTeachers: function(getTeacher) {
					return getTeacher.getTeacher();
				}
			}
		}
		).when('/bootstrap', {
			templateUrl: 'bootstrap/index.html',
			controller: 'BstrpController',
			controllerAs: 'vm'
		}
		).when('/index', {
			templateUrl: 'index/index.html',
			controller: 'indexController',
		}
		).when('/logout', {
			templateUrl: 'logout/logout.html',
			controller: 'logoutController',
		}
		).when('/login', {
			templateUrl: 'login/login.html',
			controller: 'loginController',
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
			controller:'AppCtrl',
			resolve:{
				listDisciplines: function(getDisciplines) {
					return getDisciplines.getDisciplines();
				},
				schedule: function(getSchedule) {
					return getSchedule.getSchedule();
				},
				listTeachers: function(getTeacher) {
					return getTeacher.getTeacher();
				}
			}
		})
		.otherwise({redirectTo: '/'});

	}
	angular.module('myApp').
	config(function($mdThemingProvider) {

		$mdThemingProvider.definePalette('amazingPaletteName', {
			'50': 'ffebee',
			'100': 'ffcdd2',
			'200': 'ef9a9a',
			'300': 'e57373',
			'400': 'ef5350',
			'500': 'f44336',
			'600': 'e53935',
			'700': 'd32f2f',
			'800': 'c62828',
			'900': 'b71c1c',
			'A100': 'ff8a80',
			'A200': 'ff5252',
			'A400': 'ff1744',
			'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
});

		$mdThemingProvider.theme('default')
		.primaryPalette('amazingPaletteName')

	}).factory('getDisciplines', function($http,$q ) {
		var getDisciplines = {
			getDisciplines: function() {
				var promise = $http({
					method: 'GET',
					url: '/api/discipline'
				}).then(function (response){
					return response;
				},function (error){
					 return $q.when("error!"+error);
				});
				return promise;
			}
		}; 
		return getDisciplines;
	}).factory('getTeacher', function($http,$q ) {
		var getTeacher = {
			getTeacher: function() {
				var promise = $http({
					method: 'GET',
					url: '/api/teacher'
				}).then(function (response){
					return response;
				},function (error){
					  return $q.when("error!"+error);
				});
				return promise;
			}
		}; 
		return getTeacher;
	})
	.factory('getSchedule', function($http,$q ) {
		var getSchedule = {
			getSchedule: function() {
				var promise = $http({
					method: 'GET',
					url: '/api/schedule'
				}).then(function (response){
					return response;
				},function (error){
					  return $q.when("error!"+error);
				});
				return promise;
			}
		}; 
		return getSchedule;
	}).config(['$routeProvider', config],
	['$locationProvider', function($locationProvider) {
	}]);
})();

