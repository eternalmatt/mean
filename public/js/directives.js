'use strict';
angular.module('passport.directives', [])
  .directive('factory', function(){
    return {
      restrict: 'EA',
      templateUrl: 'views/factories/factory.html',
      scope: {
        factory: '='
      },
      controller: function($scope, $modal, Factory){
        
        $scope.order = function(val){return val;};
        
        $scope.openPopup = function(factory){
          var modal = $modal.open({
            templateUrl: 'views/factories/popup.html',
            controller: 'PopupController',
            resolve: {
              factory: function(){return factory;},
            }
          });
        };
      }
    };
  })



angular.module('ngRightClick', [])
  .directive('ngRightclick', function($parse){
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightclick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});
