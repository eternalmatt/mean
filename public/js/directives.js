'use strict';
angular.module('passport.directives', [])
  .directive('factory', function(){
    return {
      restrict: 'EA',
      templateUrl: 'views/factory.html',
      scope: {
        name: '=',
        min: '=',
        max: '='
      },
      controller: function($scope, Factory){
        
        // SEED DATA for testing
        $scope.children = [1,2,3,5,8,13];
        
        $scope.generate = function(){
          //populate $scope.children
        };
      }
    };
  })
