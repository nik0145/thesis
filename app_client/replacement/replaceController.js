
 angular.module('myApp')
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log,$anchorScroll) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleLeftSec = buildDelayedToggler('leftSec');
    $scope.scrollTo = function (id) {
      $anchorScroll(id);  
    }
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    var tabs = [
        { title: 'Понедельник', content: "Tabs will become paginated if there isn't enough room for them."},
        { title: 'Вторник', content: "You can swipe left and right on a mobile device to change tabs."},
        { title: 'Среда', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
        { title: 'Четверг', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
        { title: 'Пятница', content: "If you remove a tab, it will try to select a new one."},
        { title: 'Суббота', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."}
      ],
      selected = null,
      previous = null;
    $scope.tabs = tabs;
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





