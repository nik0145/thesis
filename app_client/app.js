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
				},
				listSubject: function(getSubject) {

					return getSubject.getSubject();
				},
				listAuditorium: function(getAuditorium) {

					return getAuditorium.getAuditorium();
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
			'50': '3C6395',
			'100': '3C6395',
			'200': '3C6395',
			'300': '3C6395',
			'400': '3C6395',
			'500': '3C6395',
			'600': '3C6395',
			'700': '3C6395',
			'800': '3C6395',
			'900': '3C6395',
			'A100': '3C6395',
			'A200': '3C6395',
			'A400': '3C6395',
			'A700': '3C6395',
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
	}).factory('getTeacher', function($http,$q) {
		
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
					url: '/api/schedule',
					
				}).then(function (response){
					return response;
				},function (error){
					  return error;
				}).catch(function (error){
					  return error;
				});
				return promise;
			}
		}; 
		return getSchedule;
	})	.factory('getAuditorium', function($http,$q ) {
		var getAuditorium = {
			getAuditorium: function() {
				var promise = $http({
					method: 'GET',
					url: '/api/auditorium',
					
				}).then(function (response){
					return response;
				},function (error){
					  return error;
				}).catch(function (error){
					  return error;
				});
				return promise;
			}
		}; 
		return getAuditorium;
	}).factory('getSubject', function($http,$q ) {
		var getSubject = {
			getSubject: function() {
				var promise = $http({
					method: 'GET',
					url: '/api/subject',
					
				}).then(function (response){
					return response;
				},function (error){
					  return $q.when("error!"+error);
				});
				return promise;
			}
		}; 
		return getSubject;
	}).config(['$routeProvider', config],
	['$locationProvider', function($locationProvider) {
	}]);
})();

