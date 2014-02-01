'use strict';

var auth = require('./middlewares/authorization')
  ;
  
module.exports = function(app){
  
  var factories = require('../controllers/factories');
  app.get('/factories', factories.all);
  app.get('/factories', factories.all);
  app.post('/factories', auth.requiresLogin, factories.create);
  app.get('/factories/:factoryId', factories.show);
  app.put('/factories/:factoryId', auth.requiresLogin, factories.update);
  app.del('/factories/:factoryId', auth.requiresLogin, factories.destroy);
  app.param('factoryId', factories.factory);
  
};
