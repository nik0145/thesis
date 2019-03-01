(function() {
    function indexController($scope) {

          $scope.tabs1 = [
    { title: 'Понедельник', content: {
        number:'00001',
        dateReg:'2019-02-08',
        dateSched:'2019-02-08',
        schedule:[
        {   'selected':null,
            'type': 'container',
            'group':'1-ПКС-15-1',
                'columns':[
                    [
                            {
                                'teacher':'Фруленко Ю.А.',
                                'type':'item',
                                'types':'Преподавателя',
                                'id':'1'
                            },
                            {
                                'teacher':'Слугин В.Г.',
                                'type':'item',
                                'types':'Преподавателя',
                                'id':'1'
                            }

                    ],
                    [
                            {
                                'discipline':'Охрана труда 03.03.',
                                'type':'item',
                                'types':'Предмет',
                                'id':'2'
                            },
                            {
                                'discipline':'МДК 03.03.',
                                'type':'item',
                                'types':'Предмет',
                                'id':'2'
                            }
                    ],
/*                  [
                        {
                            'number':'МДК 03.03.',
                            'types':'number',
                            'id':'2'
                        },
                        {
                            'number':'МДК 03.03.',
                            'types':'number',
                            'id':'2'
                        }
                    ], 
                    [
                        {
                                'comment':'',
                                'types':'comment',
                                'id':'2'

                            },
                                {
                                'comment':'',
                                'types':'<comment></comment>',
                                'id':'2'
                            }
                    ],
                    [

                            {
                                'auditorium':'108',
                            },
                            {
                                'auditorium':'108',
                            }
                    ]*/
                ]

        },{
            'selected':null,
                    'type': 'container',
                    'group':'2-ПКС-15-1',
                        'columns':[
                            [
                                    {
                                        'teacher':'Фруленко Ю.А.',
                                        'type':'item',
                                        'types':'Преподавателя',
                                        'id':'1'
                                    },
                                    {
                                        'teacher':'Фруленко111 Ю.А.',
                                        'type':'item',
                                        'types':'Преподавателя',
                                        'id':'1'
                                    }

                            ],
                            [
                                    {
                                        'discipline':'МДК 03.03.',
                                        'type':'item',
                                        'types':'Предмет',
                                        'id':'2'
                                    },
                                    {
                                        'discipline':'МДК 03.03.',
                                        'type':'item',
                                        'types':'Предмет',
                                        'id':'2'
                                    }
                            ],
                            /*[
                                {
                                    'number':'МДК 03.03.',
                                },
                                {
                                    'number':'МДК 03.03.',
                                }
                            ], 
                            [
                                {
                                        'comment':'',
                                    },
                                        {
                                        'comment':'',
                                    }
                            ],
                            [

                                    {
                                        'auditorium':'108',
                                    },
                                    {
                                        'auditorium':'108',
                                    }
                            ]*/
                        ]

                
        }
    
        ]
        }
},
{ title: 'Вторник', content: 'kekeke'
    },
{ title: 'Среда', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
{ title: 'Четверг', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
{ title: 'Пятница', content: "If you remove a tab, it will try to select a new one."},
{ title: 'Суббота', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."}
],
selected = null,
previous = null;
    // Model to JSON for demo purpose
    $scope.$watch('lists', function(lists) {
        $scope.modelAsJson = angular.toJson(lists, true);
    }, true);
    }

    angular.module('myApp')
        .controller('indexController', indexController);
})();