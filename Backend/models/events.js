const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-sequence')(mongoose);

let eventSchema = new Schema(
  {
  ev_name: 
    {
      type: String,
      required: true
    },
  ev_host:
    {
      type:String,
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
    {
      vid:[
        {
          type:Number,
          
        }
      ],
      employeeID:[
        {
          type:Number,
          
        }
      ]
    },
    organizations:
    {
      orgid:
        [
          {
            type:Number
          }
        ]
    }
},
{
     
  collection: 'events'
});

eventSchema.plugin(autoIncrement, {inc_field:'evid'})
module.exports = mongoose.model('event', eventSchema)



