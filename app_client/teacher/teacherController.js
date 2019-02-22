(function() {
	function teacherController($scope) {

$scope.dropCallback = function(index, item, external, type) {
      // Return false here to cancel drop. Return true if you insert the item yourself.
      // roll down and delete any empty columns//
      var model = $scope.models.dropzones;
      for (var y in model.B) {
        for (var zz in model.B[y].columns) {
          var myColumns = [];
          var foundThem = false;
          if (Array.isArray(model.B[y].columns[zz])) {
            $scope.models.dropzones.B[y].columns.splice(zz, 1);
          } 
        }
      }
      
      return item;
    };

    $scope.models = {
      selected: null,
      templates: [{
        type: "item",
        id: 2
      }, {
        type: "container",
        id: 1,
        columns: [
          []
        ]
      }],
      dropzones: {
        "B": [

          {
            "type": "item",
            "id": 7
          }, {
            "type": "item",
            "id": 8
          }, {
            "type": "container",
            "id": 1,
            "columns": [


              {
                "type": "item",
                "id": 2
              }, {
                "type": "item",
                "id": 3
              }

            ]
          }, {
            "type": "container",
            "id": 2,
            "columns": [

              {
                "type": "item",
                "id": 9
              }, {
                "type": "item",
                "id": 10
              }, {
                "type": "item",
                "id": 11
              }

            ]
          }, {
            "type": "item",
            "id": 16
          }
        ]
      }
    };

    $scope.$watch('models.dropzones', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
}
	angular.module('myApp')
		.controller('teacherController', teacherController);
})();