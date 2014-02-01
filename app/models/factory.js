'use strict'

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
var FactorySchema = new Schema({
  name: { type: String },
  min: { type: Number },
  max: { type: Number },
  user: { 
    type: Schema.ObjectId,
    ref: 'User'  
  },
  created: {
    type: Date,
    default: Date.now
  }
});

FactorySchema.statics.load = function(id, cb){
  this.findOne({
    _id: id
  }).populate('user')
    .exec(cb);
};

mongoose.model('Factory', FactorySchema);
