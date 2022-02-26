const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  evid: {
    type: Number,
    required: true,
    unique: true
  },
    ev_name: {
      type: String,
      required: true
    },
    ev_host:{
      type:Number,
      required: true,
      unique: true
    },
    ev_date: {
        type: Date,
        required: true
    },
    addr:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    st:{
      type: String,
      required: true
    },
    country:{
      type: String,
      required: true
    },
    zip:{
        type:String,
        required: true
    }
  }, {
    collection: 'event'
});

module.exports = mongoose.model('events', eventSchema)

//versionKey: false 



