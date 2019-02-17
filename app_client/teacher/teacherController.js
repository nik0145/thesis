(function() {
	function teacherController($scope) {
 $scope.models = {
        selected: 'null',
        lists: { "A": [], "B": [] }
    };
        $scope.list1 = [{
        'name' : 'apple'
    }, {
        'name' : 'banana'
    }, {
        'name' : 'kiwi'
    }];
    $scope.s1elected = null;
    $scope.s2elected = null;
    $scope.teacher = [
    {id:1,title:'teacher1',kek:'ss'},
    {id:2,title:'teacher2',kek:'ss'},
    {id:3,title:'teacher3',kek:'ss'},
    {id:4,title:'teacher4',kek:'ss'},
    {id:5,title:'teacher5',kek:'ss'},
    {id:6,title:'teacher6',kek:'ss'}
    ]; 
    $scope.teachers = [
    {id:1,title:'teacher56'},
    {id:2,title:'teacher56'},
    {id:3,title:'teacher56'},
    {id:4,title:'teacher56'},
    {id:5,title:'teacher56'},
    {id:6,title:'teacher56'}
    ]; 

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({ label: "Item A" + i });
        $scope.models.lists.B.push({ label: "Item B" + i });
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
}
	angular.module('myApp')
		.controller('teacherController', teacherController);
})();