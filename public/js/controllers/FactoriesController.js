angular.module('passport.controller.factory', [])
  .controller('FactoriesController', function($scope, Factory){
    
    $scope.factories = Factory.query();
    
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
