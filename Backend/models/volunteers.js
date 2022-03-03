const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let volunteerSchema = new Schema({
  vid: {
    type: Number,
    unique: true,
    required:true
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
    ssn:{
        type:String,
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
    phone_num:{
        type: String,
        required: true
    },
    emer_num:{
        type: String,
    },
    email:{
        type:String,
        required: true
    },
    email2:{
        type:String,
    },
    prim_language:{
        type:String
    },
    addr:{
        type:String,
        require: true
    },
    city:{
        type:String,
        required: true
    },
    st:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    zip:{
        type:String,
        required: true
    },
    events:{
        evid:
          [
            {
              type:Number,
              unique:true
            }
          ]
      }
    
  }, {
    collection: 'volunteers'
});

module.exports = mongoose.model('volunteer', volunteerSchema)

//versionKey: false 



