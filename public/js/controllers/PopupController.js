angular.module('passport.controller.popup', [])
  .controller('PopupController', function($scope, $modalInstance, factory) {
    var factoryResource = factory;
    $scope.factory = { name : factory.name, number : factory.nodes.length };
    $scope.button = { model : 'generate' };
    $scope.form = {};
  
    $scope.numRequiredError = function(form) {
      return form.number.$dirty && form.number.$error.required;
    };
  
    $scope.numOutOfRangeError = function(form) {
      if ($scope.numRequiredError(form)) { return false; }
      return form.number.$dirty && form.number.$error.validRange;
    };
  
    $scope.nameRequiredError = function(form) {
      return form.name.$dirty && form.name.$error.required;
    };
  
    $scope.ok = function(action, factory) {
      angular.extend(factoryResource, factory);
      if (action === 'generate') {
        factoryResource.$update();
      } else if (action === 'delete') {
        factoryResource.$remove();
      }
      $modalInstance.close();
    };
  
    $scope.cancel = function() {
      $modalInstance.dismiss();
    };
  
  })
  
  .directive('validRange', function() {
    return {
      require : 'ngModel',
      link : function(scope, element, attrs, controller) {
        function validate(value) {
          var valid = value >= 1 && value <= 15;
          controller.$setValidity('validRange', valid);
          return valid ? value : undefined;
        }
  
        controller.$parsers.unshift(validate);
      }
    };
  })
