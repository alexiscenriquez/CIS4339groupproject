const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let p_info_Schema = new Schema({
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
    collection: 'p_info'
});

module.exports = mongoose.model('c_info', p_info_Schema)

//versionKey: false 



