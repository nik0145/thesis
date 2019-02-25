(function() {
	function teacherController($scope) {

  $scope.lists = [ {id: 1, name: "list1", cards: [{id: 1, name: "1card1"}, {id: 2, name: "1card2"}]},
  {id: 2, name: "list2",  cards: [{id: 1, name: "2card1"}, {id: 2, name: "2card2"}]},
  {id: 3, name: "list3", cards: [{id: 1, name: "3card1"}, {id: 2, name: "3card2"},]},
  {id: 4, name: "list4", cards: [{id: 1, name: "4card1"}, {id: 2, name: "4card2"},]}]
   
   $scope.dropCallbackItems = function(index, item, external, ind){
     console.log(index, item, external, ind)
   }
   
    $scope.dropCallback = function(index, item, external, ind) {
      console.log("drop",index, item, external, ind );
      console.log("drop", $scope.lists);
      $scope.draggedTo = index.toString()
      $scope.draggedItem = item;
      //do something here with list array and information
      // index is index of lists object where is card is droped
      //item is card object 
      //external is $scope.lists
      return item;
    };
    
    $scope.dragStart = function(ind){
      console.log(ind)
      
      $scope.draggedFrom = ind.toString()
    }
}
	angular.module('myApp')
		.controller('teacherController', teacherController);
})();