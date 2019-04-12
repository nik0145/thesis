    function indexController($scope) {
        $scope.FIO = '';
        $scope.email = '';
        $scope.mask = '';
        var r = /^\w+@\w+\.\w{2,4}$/i;
        $("#mask").mask("8(999) 999-99-99", {
          completed: function(){ 
            alert(this.val().replace(/[^0-9]/gim,''));
      }
        });
        $('#mail').keyup(function(){
             if (r.test($("#mail").val()) ){
                alert('прошел проверку');
        }
        });
        $("#check").click(function(){
            console.log('asd');
            let status =  false;
            let mas = [];
            let val = $("#fio").val();
            mas = val.split(' ');
            if(mas.length>2){
                for (var i = 0; i < mas.length; i++) {
                    var firstLetter = mas[i].charAt(0);
                    var lenLetter = mas[i].length;
                    if(firstLetter == firstLetter.toUpperCase() && lenLetter> 2){
                        status =  true;
                    }else{
                         status =  false;
                         break;
                    }
                }
            }else{
                status = false;
            }
alert(status);
        });




    }

    angular.module('myApp')
        .controller('indexController', indexController);
