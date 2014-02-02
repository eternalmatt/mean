'use strict'

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
var FactorySchema = new Schema({
  name: { type: String },
  min: { type: Number },
  max: { type: Number },
  nodes: [{ type: Number }],
  user: { 
    type: Schema.ObjectId,
    ref: 'User'  
  },
  created: {
    type: Date,
    default: Date.now
  }
});

FactorySchema.path('name').validate(function(value){
  return typeof value === 'string' && value.length;
},'Minimum value is zero.');

FactorySchema.path('min').validate(function(value){
  return value >= 0;
},'Minimum value is zero.');

FactorySchema.path('max').validate(function(value){
  return value <= 1000;
},'Maximum value is 1000.');

FactorySchema.path('nodes').validate(function(value){
  return value.length >= 0 && value.length <= 15;
},'Nodes length must be between 0 and 15')

FactorySchema.statics.load = function(id, cb){
  this.findOne({
    _id: id
  }).populate({
      path: 'user',
      select: 'username'
    })
    .exec(cb);
};

mongoose.model('Factory', FactorySchema);
