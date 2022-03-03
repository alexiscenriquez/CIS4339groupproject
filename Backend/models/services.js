const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let servicesSchema = new Schema({
  sid: {
    type: Number,
    required: true,
    unique: true
  },
    name: {
      type: String,
      required: true
    },
    duration:{
      type:String,
    },
    notes:{
      type:String
    },
    applicants:
    {
      cid:
        [
          {
            type:Number
          }
        ]
    }
  }, {
    collection: 'services'
});

module.exports = mongoose.model('service', servicesSchema)

//versionKey: false 



