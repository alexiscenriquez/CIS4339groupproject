const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-sequence')(mongoose);

let organizationSchema = new Schema(
    {
    org_name:
        {
            type: String,
            required: true
        }
    ,
    offers:
        {
            sid:[
                {
                    type:Number,
                }
            ],
            evid:[
                {
                    type:Number,
                }
            ]
        },
    peoples:
        {
            cid:[
                {
                    type:Number,
                }
            ],
            employeeID:[
                {
                    type:Number,
                }
            ],
            vid:[
                {
                    type:Number,
                }
            ]
        }


    },
    {
        collection: 'organizations'
    }
);

organizationSchema.plugin(autoIncrement, {inc_field:'orgid'})
module.exports = mongoose.model('organization', organizationSchema)