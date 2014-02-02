'use strict';

//Setting up route
angular.module('passport').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/factories', {
            templateUrl: 'views/factories/list.html',
            controller: 'FactoriesController'
        }).
        otherwise({
            redirectTo: '/factories'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('passport').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);