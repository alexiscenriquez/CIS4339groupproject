const uuid = require('uuid');
const mongoose = require('mongoose');
//const volunteers = require('./volunteers');
const Schema = mongoose.Schema;

let eventSchema = new Schema(
  {
  evid: 
    {
      type: Number,
      required: true,
      unique: true
    },
  ev_name: 
    {
      type: String,
      required: true
    },
  ev_host:
    {
      type:Number,
      required: true
    },
  ev_date: 
    {
        type: Date,
        required: true
    },
  addr:
    {
      type: String,
      required: true
    },
  city:
    {
      type: String,
      required: true
    },
  st:
    {
      type: String,
      required: true
    },
  country:
    {
      type: String,
      required: true
    },
  zip:
    {
        type:String,
        required: true
    }
  ,
  attendees:
  [
    {
      vid:
      [
        {
          type:Number
        }
      ],
      cid:[
        {
          type:Number
        }
      ],
      employeeID:[
        {
          type:Number
        }
      ]
    }
  ]
  
},
{
     
  collection: 'events'
});

module.exports = mongoose.model('event', eventSchema)



