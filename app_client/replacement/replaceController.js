
angular.module('myApp')
.controller('AppCtrl', function ($scope, $timeout,$mdDialog,
	$mdSidenav, $log,$mdToast,$window,
	$anchorScroll,$document,$http,
	listDisciplines,listTeachers,schedule) {
	$scope.tabs1 = schedule.data;
	$scope.subject =[];
	if(localStorage.getItem('user')){
		$scope.userNameTitle = localStorage.getItem('user');

	}else{
		$scope.userNameTitle = '';
	}
	$scope.disciplines = listDisciplines.data;
	$scope.teachers = listTeachers.data;
	$scope.logout = function(){
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		$window.location.href= '/#';
	}
	$scope.newTeacher = function(name,list){

		if(name){
			name = name[0].toUpperCase() + name.slice(1);
			$http({
				method:'POST',
				url:'/api/teacher',
				data:{"teacher":name},
				headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
			}).then(function(response){
				if(response){
					list.push(response.data);
					var autoChild = document.getElementById('teacherAuto').firstElementChild;
					var el = angular.element(autoChild);
					el.scope().$mdAutocompleteCtrl.hidden = true;
				}
			}).catch(function(error){
				if(error.data.message.indexOf('UnauthorizedError') !=-1){
					err = 'Войдите в систему';
				}else{
					err = error.data.message;
				}
				$mdDialog.show(
					$mdDialog.alert()
					.clickOutsideToClose(true)
					.title('Ошибка!')
					.textContent(err)
					.ariaLabel('Left to right demo')
					.ok('Продолжить')
					);

			})
		}
	}
	$scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
    .title('Would you like to delete your debt?')
    .textContent('All of the banks have agreed to forgive you your debts.')
    .ariaLabel('Lucky day')
    .targetEvent(ev)
    .ok('Please do it!')
    .cancel('Sounds like a scam');

    $mdDialog.show(confirm).then(function() {
    	$scope.status = 'You decided to get rid of your debt.';
    }, function() {
    	$scope.status = 'You decided to keep your debt.';
    });
};
$scope.newDiscipline = function(name,list){
	if(name){
		name = name[0].toUpperCase() + name.slice(1);
		$http({
			method:'POST',
			url:'/api/discipline',
			headers: {'Authorization': 'Bearer '+localStorage.getItem('token')},
			data:{"discipline":name}
		}).then(function(response){
			if(response){
				list.push(response.data);
				var autoChild = document.getElementById('disciplineAuto').firstElementChild;
				var el = angular.element(autoChild);
				el.scope().$mdAutocompleteCtrl.hidden = true;
			}
		}).catch(function(error){
			if(error.data.message.indexOf('UnauthorizedError') !=-1){
				err = 'Войдите в систему';
			}else{
				err = error.data.message;
			}
			$mdDialog.show(
				$mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Ошибка!')
				.textContent(err)
				.ariaLabel('Left to right demo')
				.ok('Продолжить')
				);

		})
	}
}

$scope.removeFromList = function(list, index,ev) {
	
	var name = '';
		   // Appending dialog to document.body to cover sidenav in docs app
		   
		   if(list[index].teacher){
		   	name = list[index].teacher;
		   	var confirm = $mdDialog.confirm()
		   	.title('Удаление')
		   	.textContent('Вы правда хотите удалить преподавателя из списка ?')
		   	.ariaLabel('Удаление')
		   	.targetEvent(ev)
		   	.ok('Удалить')
		   	.cancel('Отменить');

		   	$mdDialog.show(confirm).then(function() {
		   		$http({
		   			method: 'Delete',
		   			url: '/api/teacher/'+name,
		   			headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
		   		}).then(function (response){
		   			if(response){
		   				list.splice(index, 1);
		   				$mdToast.show(
		   					$mdToast.simple()
		   					.textContent('Преподаватель удален!')
		   					.position('top left')
		   					.hideDelay(2500))
		   				.then(function() {
		   				})
		   			}
		   		},function (error){
		   			
		   			if(error.data.message.indexOf('UnauthorizedError') !=-1){
		   				err = 'Войдите в систему';
		   			}else{
		   				err = error.data.message;
		   			}
		   			$mdDialog.show(
		   				$mdDialog.alert()
		   				.clickOutsideToClose(true)
		   				.title('Ошибка!')
		   				.textContent(err)
		   				.ariaLabel('Left to right demo')
		   				.ok('Продолжить')
		   				);

		   			
		   		});
		   	}, function() {});
		   	
		   }else if(list[index].discipline){
		   	name = list[index].discipline;
		   	var confirm = $mdDialog.confirm()
		   	.title('Удаление')
		   	.textContent('Вы правда хотите удалить предмет из списка ?')
		   	.ariaLabel('Удаление')
		   	.targetEvent(ev)
		   	.ok('Удалить')
		   	.cancel('Отменить');
		   	$mdDialog.show(confirm).then(function() {
		   		$http({
		   			method: 'Delete',
		   			url: '/api/discipline/'+name,
		   			headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}
		   		}).then(function (response){




		   			
		   			if(response){
		   				list.splice(index, 1);
		   				$mdToast.show(
		   					$mdToast.simple()
		   					.textContent('Предмет удален!')
		   					.position('top left')
		   					.hideDelay(2500))
		   				.then(function() {
		   				}).catch(function() {
		   				});
		   			}
		   			


		   		},function (error){
		   			
		   			if(error.data.message.indexOf('UnauthorizedError') !=-1){
		   				err = 'Войдите в систему';
		   			}else{
		   				err = error.data.message;
		   			}
		   			$mdDialog.show(
		   				$mdDialog.alert()
		   				.clickOutsideToClose(true)
		   				.title('Ошибка!')
		   				.textContent(err)
		   				.ariaLabel('Left to right demo')
		   				.ok('Продолжить')
		   				);

		   			
		   		});
		   	}, function() {});
		   }
		   
		}

		$scope.toggleLeft = buildDelayedToggler('left');
		$scope.toggleLeftSec = buildDelayedToggler('leftSec');
		$scope.toggleRight = buildDelayedToggler('right');
		$scope.dragStart = function(ind){
			$scope.draggedFrom = ind.toString()
		}
		$scope.dropCallback = function(index, item, external, ind) {
			//console.log("dropsС",index, item, external, ind );
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
  	//console.log("drop1",index, item, external, ind );
  	//console.log("drop1", $scope.lists);
  	$scope.draggedTo = index.toString()
  	$scope.draggedItem = item;
  	return item;
  };
  $scope.dropCallback2 = function(index, item, external, ind) {
  	//console.log("drop1",index, item, external, ind );
  	//console.log("drop1", $scope.lists);
  	$scope.draggedTo = index.toString()
  	$scope.draggedItem = item;
  	return item;
  };

  $scope.scrollTo = function (id) {
  	$anchorScroll(id);  
  }
  $scope.putTab = function(item){
  	title = item.title;
  	if(item && title){
  		$http({
  			method: 'PUT',
  			url: '/api/schedule/'+title,
  			headers: {'Authorization': 'Bearer '+localStorage.getItem('token')},
  			data:item.content
  		}).then(function (response){
  			if(response){
  				$mdToast.show(
  					$mdToast.simple()
  					.textContent('Расписание изменено!')
  					.position('top right')
  					.hideDelay(2500))
  				.then(function() {
  				}).catch(function() {
  				});
  			}

  		},function (error){
  			if(error.data.message.indexOf('UnauthorizedError') !=-1){
  				err = 'Войдите в систему';
  			}else{
  				err = error.data.message;
  			}
  			$mdDialog.show(
  				$mdDialog.alert()
  				.clickOutsideToClose(true)
  				.title('Ошибка!')
  				.textContent(err)
  				.ariaLabel('Left to right demo')
  				.ok('Продолжить')
  				);

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
  	masWrap = mas;
  	if(masWrap === undefined){
  		return 1;
  	}else{
  		if(mas.length ==0){
  			return 1;
  		}else{
  			return 50;
  		}
  	}

  }

  function DialogController($scope, $mdDialog) {
  	$scope.userName= '';
  	$scope.passwordName= '';
  	$scope.statusUser = false;
  	$scope.hide = function() {
  		$mdDialog.hide();
  	};

  	$scope.cancel = function() {
  		$mdDialog.cancel();
  	};

  	$scope.login = function(){
  		
  		if($scope.userName &&  $scope.passwordName){
  			var promise = $http({
  				method: 'POST',
  				url: '/api/login',
  				data:{name:$scope.userName, password:$scope.passwordName}
  			}).then(function (response){
  				localStorage.setItem('token', response.data.token);
  				localStorage.setItem('user',$scope.userName);
  				$mdDialog.hide($scope.userName);
  			},function (error){
  				$scope.statusUser = true;
  			});
  			return promise;
  		}
  	}

  	$scope.answer = function(answer) {
  		$mdDialog.hide(answer);
  	};
  }
  $scope.showPrompt = function(ev) {
  	$mdDialog.show({
  		controller:DialogController,
  		templateUrl: 'dialog1.tmpl.html',
  		parent: angular.element(document.body),
  		targetEvent: ev,
  		clickOutsideToClose:true,
  		fullscreen: $scope.customFullscreen 
  	})
  	.then(function(name) {
  		$scope.userNameTitle = name;
  		$scope.userName = name;
  		$scope.status = 'Вы вошли как "' + name + '".';
  	}, function() {
  		if(!$scope.userNameTitle){
  			$scope.status = 'Вы не вошли в систему!';
  		}
  		
  	});
  };


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
		$scope.subject = [];
	};
	if (current + 1) {
		jQuery.each(schedule.data, function( index, value ) {
			if(value.title == selected.title){
				jQuery.each(value.content.schedule, function( indexInner, valueInner ) {
					group = valueInner.group;
					$scope.subject.push({ title : group, id : valueInner._id });
				});
			}
		});
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





