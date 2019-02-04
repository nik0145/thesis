(function() {
	function BstrpController() {
		var vm = this;

		vm.addForm = function(index){
			var numberClass = (vm.schedule[index]['lessons'].length)+1;
			if(!vm.comment){
				comment = '';
			}else{
				comment = vm.comment[index];
			}
			vm.schedule[index]['lessons'].push({
					'teacher':vm['searchText' + index],
					'discipline':vm['selectedSub' + index],
					'number':numberClass,
					'comment':comment,
					'auditorium':vm.auditorium[index]
				});
			vm['searchText' + index] = '';
			vm['selectedSub' + index] = '';
			if(!vm.comment){
				comment = '';
			}else{
				vm.comment[index]= '';
			}
			vm.auditorium[index] = '';
		}

		vm.schedule = [
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
		}

		];
		vm.content  = [
	{
		'name' : 'Огудина А.Н.',
		'subject' : 
		[
			'МДК 02.01',
			'МДК 02.02',
			'МДК 02.03',
			'МДК 02.04',
			'МДК 02.05'
		]
	},
		{
		'name' : 'Русинова Е.Г.',
		'subject' : 
		[
			'Психология',
			'Общество',
			'Трудоустройство'
		]
	},
		{
		'name' : 'Слугин В.Г.',
		'subject' : 
		[
			'МДК 03.01',
			'МДК 03.02',
			'МДК 03.03',
			'МДК 03.04'	
		]
	},
		{
		'name' : 'Фруленко Ю.А.',
		'subject' : 
		[
			'МДК 13.02',
			'МДК 23.02',
			'МДК 33.02',
			'МДК 43.02',
			'МДК 53.02'
		]
	}
  ];

	}

	angular.module('myApp')
		.controller('BstrpController', BstrpController);
})();