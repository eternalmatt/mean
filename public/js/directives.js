'use strict';
angular.module('passport.directives', [])
  .directive('factory', function(){
    return {
      restrict: 'EA',
      templateUrl: 'views/factories/factory.html',
      scope: {
        name: '=',
        min: '=',
        max: '='
      },
      controller: function($scope, Factory){
        
        // SEED DATA for testing
        $scope.children = [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 5 },
          { name: 8 },
          { name: 13 }
        ];
        
        $scope.generate = function(){
          //populate $scope.children
        };
      }
    };
  })
