const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
  pid: {
    type: Number,
    required: true,
    unique: true
  },
    first_name: {
      type: String,
      required: true
    },
    mid_name:{
      type:String,
    },
    last_name: {
        type: String
    },
    b_day:{
      type: Date,
      required: true
    },
    DL:{
      type: String,
    },
    gender:{
      type: String
    },
    ethnicity:{
      type: String
    },
    
  }, {
    collection: 'clients'
});

module.exports = mongoose.model('client', clientSchema)

//versionKey: false 



