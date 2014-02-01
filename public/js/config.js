'use strict';

//Setting up route
angular.module('passport').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/factories', {
            templateUrl: 'views/factories/list.html',
            controller: 'FactoriesController'
        }).
        
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('passport').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);