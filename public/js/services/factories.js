'use strict';

//Articles service used for articles REST endpoint
angular.module('passport.services.factory', [])
  .factory('Factory', function($resource) {
    return $resource('factories/:factoryId', {
        factoryId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
  })