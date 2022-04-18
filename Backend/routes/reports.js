const express = require('express');
const router = express.Router();
const eventsModel = require('../models/events')
const volunteerModel = require('../models/volunteers')
const clientsModel = require('../models/clients')

router.get('/ethnicity', (req, res, next) =>{
    clientsModel.aggregate([
        {
            '$group':{
                '_id':'$ethnicity', 'count':{'$sum':1}
            }
        },
        {
            '$group':{
                '_id':null,
                'counts':{
                    '$push':{'k':'$_id', 'v':'$count'}
                }
            }
        },
        {'$replaceRoot':{
                'newRoot':{'$arrayToObject':'$counts'}
            }
    
        }
        
        // {
        //     $lookup:{
        //         from:'services',
        //         localField:'services.sid',
        //         foreignField:'sid',
        //         as:'services'
        //     }
        // }
    ]).exec((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
          console.log(data);
        }
      })

});

module.exports = router;
