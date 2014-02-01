angular.module('passport.controller.popup', [])
    .controller('PopupController', function($scope, $modalInstance, factory){
      $scope.factory = factory;
      $scope.button = { model: 'delete' };
      
      $scope.ok = function(action, factory){
        if (action === 'generate'){
          factory.$update();
        } else if (action === 'delete'){
          
        }
        $modalInstance.close();
      };
      
      $scope.cancel = function(){
        $modalInstance.dismiss();
      };

    })
