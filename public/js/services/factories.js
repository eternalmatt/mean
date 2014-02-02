'use strict';

//Articles service used for articles REST endpoint
angular.module('passport.services.factory', [])
  .factory('Factory', function($resource) {
    return $resource('factories/:factoryId', {
        factoryId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: true,
            transformResponse: [ angular.fromJson, sortNodes ] //how cool is that?
        }
    });
    
    function sortNodes(data){
      angular.forEach(data, function(value){
        value.nodes.sort();
      });
      return data;
    }
  })