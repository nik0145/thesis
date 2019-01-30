(function() {
	function BstrpController() {
		var vm = this;
		vm.add = function(){
			vm.kek.push({text:'sss'});
			vm.IText='';
		}
		vm.searchText = '';
		vm.kek= [
			{text:'eeee'},
			{text:'ffff'}
		];
		vm.schedule = [
		{
			'group':'1-ПКС-15-1',
			'lessons':
			[
				{
					'teacher':'aaa',
					'discipline':'ssss',
					'number':'1',
					'comment':'dddd',
					'auditorium':'ffff'
				},
				{
					'teacher':'qqqq',
					'discipline':'wwww',
					'number':'2',
					'comment':'eeeeee',
					'auditorium':'rrrrrr'
				}
			]
		},
		{
			'group':'2-ПКС-15-1',
			'lessons':
			[
				{
					'teacher':'aaa',
					'discipline':'ssss',
					'number':'1',
					'comment':'dddd',
					'auditorium':'ffff'
				},
				{
					'teacher':'tttt',
					'discipline':'yyyyy',
					'number':'2',
					'comment':'iiii',
					'auditorium':'uuuu'
				}
			]
		}

		];
		vm.content  = [
	{
		'name' : 'Препод1',
		'subject' : 
		[
			'Препод1предмет1',
			'Препод1предмет2',
			'Препод1предмет3',
			'Препод1предмет4',
			'Препод1предмет5'
		]
	},
		{
		'name' : 'ДЩдщ',
		'subject' : 
		[
			'ДЩдщпредмет1',
			'ДЩдщпредмет2',
			'ДЩдщпредмет3',
			'ДЩдщпредмет4',
			'ДЩдщпредмет6'
		]
	},
		{
		'name' : 'Я кек',
		'subject' : 
		[
			'Я кекпредмет1',
			'Я кекпредмет2',
			'Я кекпредмет3',
			'Я кекпредмет4',
			'Я кекпредмет5'
		]
	},
		{
		'name' : 'кеке',
		'subject' : 
		[
			'кекепредмет1',
			'кекепредмет2',
			'кекепредмет3',
			'кекепредмет4',
			'кекепредмет5'
		]
	},
		{
		'name' : 'лел',
		'subject' : 
		[
			'лелпредмет1',
			'лелпредмет2',
			'лелпредмет3',
			'лелпредмет4',
			'лелпредмет5'
		]
	}
  ];
  vm.addClassForG = function(){
  	vm.kek.push({text:'keeee'});
 /* 	vm.schedule[1].push =({
  		'teacher':vm.acTeacher,
  		'discipline':vm.acSubject,
  		'number':4,
  		'comment':vm.comment,
  		'auditorium':vm.auditorium
  	});
  	vm.acTeacher ='';
  	vm.acSubject ='';
  	vm.comment ='';
  	vm.auditorium ='';*/
  	
  };
	}

	angular.module('myApp')
		.controller('BstrpController', BstrpController);
})();