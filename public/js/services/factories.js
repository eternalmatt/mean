'use strict';

//Articles service used for articles REST endpoint
angular.module('passport.services.factory', [])
  .factory('Factory', function($resource) {
    return $resource('articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
  })