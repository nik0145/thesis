
angular.module('myApp')
.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log,$anchorScroll,$document) {
	$scope.toggleLeft = buildDelayedToggler('left');
	$scope.toggleLeftSec = buildDelayedToggler('leftSec');
	$scope.scrollTo = function (id) {
		$anchorScroll(id);  
	}
	$scope.selectedTeacher = null;
	$scope.selectedTeacher1 = null;
	$scope.isOpenRight = function(){
		return $mdSidenav('right').isOpen();
	};
	$scope.subject = [
	{id:1,title:'1-ПКС-15-1'},
	{id:2,title:'2-ПКС-15-1'},
	{id:3,title:'3-ПКС-15-1'},
	{id:4,title:'4-ПКС-15-1'},
	{id:5,title:'5-ПКС-15-1'},
	{id:6,title:'6-ПКС-15-1'}
	];
	$scope.teachers = [
	{id:1,teacher:'teacher1'},
	{id:2,teacher:'teacher2'},
	{id:3,teacher:'teacher3'},
	{id:4,teacher:'teacher4'},
	{id:5,teacher:'teacher5'},
	{id:6,teacher:'teacher6'}
	]; 
	$scope.$watch('teachers', function (model) {
	    $scope.modelAsJson = angular.toJson(model, true);
	}, true);
	
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





