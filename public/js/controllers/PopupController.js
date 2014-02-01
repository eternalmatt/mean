angular.module('passport.controller.popup', [])
    .controller('PopupController', function($scope, $modalInstance, factory){
      $scope.factory = factory;
      $scope.button = { model: 'generate' };
      
      $scope.ok = function(action, factory){
        if (action === 'generate'){
          factory.$update(); 
        } else if (action === 'delete'){
          factory.$remove();
        }
        $modalInstance.close();
      };
      
      $scope.cancel = function(){
        $modalInstance.dismiss();
      };

    })