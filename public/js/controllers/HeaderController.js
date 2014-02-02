'use strict';

angular.module('passport.system').controller('HeaderController',
  function ($scope, Global, MenuItems) {
    $scope.global = Global;
    $scope.menu = MenuItems;
    $scope.isCollapsed = false;
  })
    
  .constant('MenuItems', [{
      'title' : 'Factories',
      'link' : 'factories'
    }
  ])

