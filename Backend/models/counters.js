const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let counterSchema = new Schema({
    id:{},
    reference_value:{},
    seq:{}
    
  }, {
    collection: 'counters'
});

module.exports = mongoose.model('counter', counterSchema);




