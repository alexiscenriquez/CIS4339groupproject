const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-sequence')(mongoose);

let servicesSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    renewal:{
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
  }, {
    collection: 'services'
});

servicesSchema.plugin(autoIncrement, {inc_field: 'sid'});
module.exports = mongoose.model('service', servicesSchema)

//versionKey: false 



