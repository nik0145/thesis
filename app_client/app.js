(function() {
    angular.module('myApp', ['ngRoute']);

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                    templateUrl: 'index/index.html',
                    controller: 'indexController',
                    controllerAs: 'vm'
                }
            ).when('/page1', {
                templateUrl: 'page1/page1.html',
                controller: 'page1Controller',
                controllerAs: 'vm'
            }
        ).otherwise({redirectTo: '/'});

    }

    angular.module('myApp')
        .config(['$routeProvider', config]);
})();

