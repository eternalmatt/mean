angular.module('passport.controller.factory', [])
  .controller('FactoriesController', function($scope, SeedFactories){
    $scope.factories = SeedFactories;
  })
  
  .constant('SeedFactories', [
    {
      name: '1',
      min: '1',
      max: '1000',
      children: []
    }
  ])
