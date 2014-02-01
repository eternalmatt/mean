angular.module('passport.controller.factory', [])
  .controller('FactoriesController', function($scope, SeedFactories, Factory){
    $scope.factories = SeedFactories;
    
    $scope.enableInput = function(){
      $scope.showInput = true;
    };
    
    $scope.saveFactory = function(factory){
      new Factory(factory).$save(function(factory){
        $scope.factories.push(factory);
      });
      
      $scope.showInput = false;
      $scope.factory = {};
    };
  })
  
  .constant('SeedFactories', [
    {
      name: '1',
      min: '1',
      max: '1000',
      children: []
    }
  ])
