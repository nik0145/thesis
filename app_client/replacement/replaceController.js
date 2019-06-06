
angular.module('myApp')
.controller('AppCtrl', function ($scope, $timeout,$mdDialog,
	$mdSidenav, $log,$mdToast,$window,
	$anchorScroll,$document,$http,listSubject,
	listDisciplines,listTeachers,schedule,listAuditorium) {

console.log(schedule);
	$scope.tabs1 = schedule.data;
var shdTemplate =   {"selected":null,"type":"container","group":"","columns":[[],[],[]]};

for(var i = 0; i<$scope.tabs1.length;i++){
  $scope.tabs1[i].schedule = [];
  shed = $scope.tabs1[i]['Расписание'][0];
  shdTemplate.group = shed['УчебнаяГруппа_Name'];
  shdTemplate.columns[0].push({teacher:shed['Преподаватель_Name'],type:"item",types:"Преподавателя"});
  shdTemplate.columns[1].push({discipline:shed['Дисциплина_Name'],type:"item",types:"Предмет"});
  shdTemplate.columns[2].push({auditorium:shed['Аудитория_Name'],type:"item",types:"Кабинет"});

  for (var j = 1; j < $scope.tabs1[i]['Расписание'].length; j++) {
      shed = $scope.tabs1[i]['Расписание'][j];
    if(shed['УчебнаяГруппа_Name'] == $scope.tabs1[i]['Расписание'][j-1]['УчебнаяГруппа_Name']){
      shdTemplate.columns[0].push({teacher:shed['Преподаватель_Name'],type:"item",types:"Преподавателя"});
      shdTemplate.columns[1].push({discipline:shed['Дисциплина_Name'],type:"item",types:"Предмет"});
      shdTemplate.columns[2].push({auditorium:shed['Аудитория_Name'],type:"item",types:"Кабинет"});
    }else{
       $scope.tabs1[i].schedule.push(shdTemplate);
       shdTemplate =   {"selected":null,"type":"container","group":"","columns":[[],[],[]]};
       shdTemplate.group = shed['УчебнаяГруппа_Name'];
       shdTemplate.columns[0].push({teacher:shed['Преподаватель_Name'],type:"item",types:"Преподавателя"});
       shdTemplate.columns[1].push({discipline:shed['Дисциплина_Name'],type:"item",types:"Предмет"});
       shdTemplate.columns[2].push({auditorium:shed['Аудитория_Name'],type:"item",types:"Кабинет"});
    }
  }
}
console.log($scope.tabs1);
	$scope.subject =[];
$scope.subject= listSubject.data.value;
$scope.auditorium= listAuditorium.data.value;
console.log($scope.auditorium);
  for (var i = listDisciplines.data.value.length - 1; i >= 0; i--) {
    listDisciplines.data.value[i]["types"] = 'Предмет';
    listDisciplines.data.value[i]["type"] = 'item';
    listDisciplines.data.value[i]["discipline"] =  listDisciplines.data.value[i]["Description"];
  }
    $scope.disciplines = listDisciplines.data.value;
    for (var i = listTeachers.data.value.length - 1; i >= 0; i--) {
    listTeachers.data.value[i]["types"] = 'Преподавателя';
     listTeachers.data.value[i]["type"] = 'item';
    listTeachers.data.value[i]["teacher"] =  listTeachers.data.value[i]["Description"];
  }
  console.log(listTeachers.data.value);
	$scope.teachers = listTeachers.data.value;
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


     $scope.toggleLeft = buildDelayedToggler('left');
     $scope.toggleLeftSec = buildDelayedToggler('leftSec');
     $scope.toggleRight = buildDelayedToggler('right');
     $scope.dragStart = function(ind){
       $scope.draggedFrom = ind.toString()
     }
     $scope.dropCallback = function(index, item, external, list) {
		
      //получаем нужный тип
      typeItem = external[0].types;
      $scope.draggedTo = index.toString()
      $scope.draggedItem = item;
      if(item.types == typeItem){
          console.log("dropsС",index, item, list);
          console.log(list);
          if(list[0]["columns"][1].length ==  list[0]["columns"][2].length && 
             list[0]["columns"][0].length ==  list[0]["columns"][2].length){
             list[0]["columns"][2].push({auditorium: "",type: "item",types: "Кабинет"});
          }
      }
      if(item.types == typeItem){
      	return item;
      }
      else{
      	return false;
      }
      
    };
    $scope.dropCallback1 = function(index, item, external, ind) {
  	console.log("drop1",index, item, external, ind );
  	//console.log("drop1", $scope.lists);
  	$scope.draggedTo = index.toString()
  	$scope.draggedItem = item;
  	return item;
  };
  $scope.dropCallback2 = function(index, item, external, ind) {
  	console.log("drop2",index, item, external, ind );
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



  	$scope.answer = function(answer) {
  		$mdDialog.hide(answer);
  	};
  }


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





