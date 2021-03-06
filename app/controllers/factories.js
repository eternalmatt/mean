'use strict';

var mongoose = require('mongoose')
  , Factory = mongoose.model('Factory')
  , _ = require('lodash')
  ;
  
function generateNodes(req, res, factory){
  var length = parseInt(factory.number) || 0;
  factory.nodes = _.map(Array(length), function(){
    return _.random(factory.min, factory.max);
  });
}

// load a factory for a given parameter id  
exports.factory = function(req, res, next, id){
  Factory.load(id, function(err, factory){
    if (err) return next(err);
    if (!factory) return next(new Error('Failed to load factory ' + id));
    req.factory = factory;
    next();
  });
};

// next four functions == CRUD connection to database

exports.create = function(req, res){
  var factory = new Factory(req.body);
  factory.user = req.user;
  factory.min = _.random(999);
  factory.max = _.random(factory.min, 1000);
  generateNodes(req, res, factory);
  
  factory.save(function(err){
    if (err) { res.render('error', {status: 500}); }
    else {
      res.jsonp(factory);
    }
  });
};

exports.show = function(req, res){
  res.jsonp(req.factory);
};

exports.update = function(req, res){
  var factory = req.factory;
  factory = _.extend(factory, req.body);
  generateNodes(req, res, factory);
  factory.save(function(err){
    res.jsonp(factory);
  });
};

exports.destroy = function(req, res){
  var factory = req.factory;
  factory.remove(function(err){
    if (err) { res.render('error', {status: 500}); }
    else {
      res.jsonp(1);
    }
  });
};

exports.all = function(req, res){
  Factory
    .find()
    .populate({
      path: 'user',
      select: 'username'
    })
    .exec(function(err, factories){
      if (err){ res.render('error', { status: 500} ); }
      else {
        res.jsonp(factories);
      }
  });
};
