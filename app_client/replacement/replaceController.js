
angular.module('myApp')
.controller('AppCtrl', function ($scope, $timeout, 
							     $mdSidenav, $log,
							     $anchorScroll,$document,$http,
								 listDisciplines,listTeachers,schedule) {
	$scope.tabs1 = schedule.data;
	$scope.disciplines = listDisciplines.data;
	$scope.teachers = listTeachers.data;
	/*if(listDisciplines.data){
		$scope.disciplines = listDisciplines.data;
	}else{
		$scope.disciplines = [
		{discipline:'discipline1','types':'Предмет','type':'item',id:1},
		{discipline:'discipline2','types':'Предмет','type':'item',id:2},
		{discipline:'discipline3','types':'Предмет','type':'item',id:3},
		{discipline:'discipline4','types':'Предмет','type':'item',id:4},
		{discipline:'discipline5','types':'Предмет','type':'item',id:5},
		{discipline:'discipline6','types':'Предмет','type':'item',id:6}
	];
	}
	disciplines = {
		value :[
		{teacher:'teacher1','types':'Преподавателя','type':'item',id:1},
			{teacher:'teacher2','types':'Преподавателя','type':'item',id:2},
			{teacher:'teacher3','types':'Преподавателя','type':'item',id:3},
			{teacher:'teacher4','types':'Преподавателя','type':'item',id:4},
			{teacher:'teacher5','types':'Преподавателя','type':'item',id:5},
			{teacher:'teacher6','types':'Преподавателя','type':'item',id:6}
	];
	}
	if(listTeachers.data){
		$scope.teachers = listTeachers.data;
	}else{
		$scope.teachers = [
	{teacher:'teacher1','types':'Преподавателя','type':'item',id:1},
	{teacher:'teacher2','types':'Преподавателя','type':'item',id:2},
	{teacher:'teacher3','types':'Преподавателя','type':'item',id:3},
	{teacher:'teacher4','types':'Преподавателя','type':'item',id:4},
	{teacher:'teacher5','types':'Преподавателя','type':'item',id:5},
	{teacher:'teacher6','types':'Преподавателя','type':'item',id:6}
	]; 
	}*/
	$scope.toggleLeft = buildDelayedToggler('left');
	$scope.toggleLeftSec = buildDelayedToggler('leftSec');
	$scope.toggleRight = buildDelayedToggler('right');
	    $scope.dragStart = function(ind){
      console.log(ind)
      $scope.draggedFrom = ind.toString()
    }
    $scope.dropCallback = function(index, item, external, ind) {
      console.log("dropsС",index, item, external, ind );
      //получаем нужный тип
      typeItem = external[0].types;
      $scope.draggedTo = index.toString()
      $scope.draggedItem = item;
      if(item.types == typeItem){
		return item;
      }
      else{
      	return false;
      }
      
    };
    $scope.dropCallback1 = function(index, item, external, ind) {
      console.log("drop1",index, item, external, ind );
      console.log("drop1", $scope.lists);
      $scope.draggedTo = index.toString()
      $scope.draggedItem = item;
      return item;
    };
    $scope.dropCallback2 = function(index, item, external, ind) {
      console.log("drop1",index, item, external, ind );
      console.log("drop1", $scope.lists);
      $scope.draggedTo = index.toString()
      $scope.draggedItem = item;
      return item;
    };
	
	$scope.scrollTo = function (id) {
		$anchorScroll(id);  
	}
	$scope.putTab = function(item){
		title = item.title;
		console.log();
		if(item && title){
			console.log(item.content);
			$http({
				method: 'PUT',
				url: '/api/schedule/'+title,
				data:item.content
			}).then(function (response){
				console.log(response);
			},function (error){
				  return $q.when("error!"+error);
			});
		}

		
	}
	$scope.selectedTeacher = null;
	$scope.selectedDisciplines = null;
	$scope.selectedTeacher1 = null;
	$scope.isOpenRight = function(){
		return $mdSidenav('right').isOpen();
	};
	$scope.lengthItemSubj = function(mas){
		if(mas.length ==0){
			return 1;
		}else{
			return 50;
		}
	}
	$scope.subject = [
	{id:1,title:'1-ПКС-15-1'},
	{id:2,title:'2-ПКС-15-1'},
	{id:3,title:'3-ПКС-15-1'},
	{id:4,title:'4-ПКС-15-1'},
	{id:5,title:'5-ПКС-15-1'},
	{id:6,title:'6-ПКС-15-1'}
	];



	var tabs = [
	{ title: 'Понедельник', content: {
		number:'00001',
		dateReg:'2019-02-08',
		dateSched:'2019-02-08',
		schedule:[
		{
			'group':'1-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Фруленко Ю.А.',
				'discipline':'МДК 03.03',
				'number':'1',
				'comment':'',
				'auditorium':'108'
			},
			{
				'teacher':'Слугин В.Г.',
				'discipline':'МДК 03.02',
				'number':'2',
				'comment':'',
				'auditorium':'155'
			},
			{
				'teacher':'Слугин В.Г.',
				'discipline':'МДК 03.01',
				'number':'3',
				'comment':'практика',
				'auditorium':'452'
			},
			]
		},
		{
			'group':'2-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'7-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'6-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'4-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			},
			{
			    "type": "container",
			    "id": 1,
			    "columns": [
			        [
			            {
			                "type": "item",
			                "id": "1"
			            },
			            {
			                "type": "item",
			                "id": "2"
			            }
			        ],
			        [
			            {
			                "type": "item",
			                "id": "3"
			            }
			        ]
			    ]
			},
			]
		},
		{
			'group':'5-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'3-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		}
		]
	}
},
{ title: 'Вторник', content: {
		number:'00001',
		dateReg:'2019-02-08',
		dateSched:'2019-02-08',
		schedule:[
		{
			'group':'1-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Фруленко Ю.А.',
				'discipline':'МДК 03.03',
				'number':'1',
				'comment':'',
				'auditorium':'108'
			},
			{
				'teacher':'Слугин В.Г.',
				'discipline':'МДК 03.02',
				'number':'2',
				'comment':'',
				'auditorium':'155'
			},
			{
				'teacher':'Слугин В.Г.',
				'discipline':'МДК 03.01',
				'number':'3',
				'comment':'практика',
				'auditorium':'452'
			}
			]
		},
		{
			'group':'2-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'7-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'subject6',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'4-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'5-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		},
		{
			'group':'3-ПКС-15-1',
			'lessons':
			[
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.02',
				'number':'1',
				'comment':'',
				'auditorium':'161'
			},
			{
				'teacher':'Русинова Е.Г.',
				'discipline':'псих.общ.и страт.трудоустр.',
				'number':'2',
				'comment':'',
				'auditorium':'313'
			},
			{
				'teacher':'Огудина А.Н.',
				'discipline':'МДК 02.05',
				'number':'3',
				'comment':'практика',
				'auditorium':'156'
			}
			]
		}
		]
	}
	},
{ title: 'Среда', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
{ title: 'Четверг', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
{ title: 'Пятница', content: "If you remove a tab, it will try to select a new one."},
{ title: 'Суббота', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."}
],
selected = null,
previous = null;
$scope.tabs = tabs;
	$scope.$watch('schedule', function (model) {
	    $scope.modelAsJson = angular.toJson(model, true);
	}, true);
$scope.selectedIndex = 0;
$scope.$watch('selectedIndex', function(current, old) {
	previous = selected;
	selected = tabs[current];
	if (old + 1 && (old !== current)) {
		$log.debug('Goodbye ' + previous.title + '!');
	}
	if (current + 1) {
		$log.debug('Hello ' + selected.title + '!');
	}
});
$scope.addTab = function(title, view) {
	view = view || title + " Content View";
	tabs.push({title: title, content: view, disabled: false});
};
$scope.removeTab = function(tab) {
	var index = tabs.indexOf(tab);
	tabs.splice(index, 1);
};

function debounce(func, wait, context) {
	var timer;

	return function debounced() {
		var context = $scope,
		args = Array.prototype.slice.call(arguments);
		$timeout.cancel(timer);
		timer = $timeout(function() {
			timer = undefined;
			func.apply(context, args);
		}, wait || 10);
	};
}


function buildDelayedToggler(navID) {
	return debounce(function() {
		$mdSidenav(navID)
		.toggle()
		.then(function () {
			$log.debug("toggle " + navID + " is done");
		});
	}, 200);
}

$scope.closeRight = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

$scope.closeleft = function () {
	$mdSidenav('left').close()
	.then(function () {
		$log.debug("close LEFT is done");
	});

};
$scope.closeleftSecond = function () {
	$mdSidenav('leftSec').close()
	.then(function () {
		$log.debug("close LEFT Second is done");
	});

};
})





