(function() {
    function indexController($scope) {
        $scope.men = [
      'John',
      'Jack',
      'Mark',
      'Ernie'
      ];
      
      
      $scope.women = [
      'Jane',
      'Jill',
      'Betty',
      'Mary'
      ];
      
      
      $scope.addText = "";
      
      
      $scope.dropSuccessHandler = function($event,index,array){
          array.splice(index,1);
      };
      
      $scope.onDrop = function($event,$data,array){
          array.push($data);
      };
    }

    angular.module('myApp')
        .controller('indexController', indexController);
})();