angular.module('passport.controller.factory', [])
  .controller('FactoriesController', function($scope, Factory, Popup, $timeout, Global){
    $scope.global = Global;
    $scope.popup = Popup;
    
    $scope.enableForm = function(){
      $scope.showForm = true;
    };
    
    $scope.disableForm = function(){
      $scope.showForm = false;
    };
    
    $scope.saveFactory = function(factory){
      new Factory(factory).$save(function(factory){
        $scope.factories.push(factory);
      });
      
      $scope.showInput = false;
      $scope.factory = {};
    };

    // a poor man's version of web sockets
    function reload(){
      Factory.query(function(factories){
        $scope.factories = factories;
      });
      $timeout(reload, 1000);
    }
    reload();
    
  })
  
  .constant('Popup', {
    templateUrl: 'views/factories/popup.html',
    controller: 'PopupController',
    resolve: {}
  })
