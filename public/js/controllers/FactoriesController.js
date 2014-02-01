angular.module('passport.controller.factory', [])
  .controller('FactoriesController', function($scope, Factory, Popup){
    
    $scope.factories = Factory.query();
    $scope.popup = Popup;
    
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
  
  .constant('Popup', {
    templateUrl: 'views/factories/popup.html',
    controller: 'PopupController',
    resolve: {}
  })
