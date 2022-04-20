const express = require('express');
const router = express.Router()
const counter = require('../models/counters');



//get last sid
router.get("/last_sid", (req, res, next) => {
    counter.aggregate([
        {
            $match:{
                id:'sid'
            }
        },
        {
            $project:{
                _id:0,
                seq:1
            }
        }
    ],(error, results)=>{
        if(error){
            return next(error)
        }else{
            res.json(results)
        }
    });
});

  //get seq number for evids
  router.get("/last_evid", (req, res, next) => {
    counter.aggregate([
        {
            $match:{
                id:'evid'
            }
        },
        {
            $project:{
                _id:0,
                seq:1
            }
        }
    ],(error, results)=>{
        if(error){
            return next(error)
        }else{
            res.json(results)
        }
    });
  });

    //get seq number for evids
    router.get("/last_eid", (req, res, next) => {
        counter.aggregate([
            {
                $match:{
                    id:'employeeID'
                }
            },
            {
                $project:{
                    _id:0,
                    seq:1
                }
            }
        ],(error, results)=>{
            if(error){
                return next(error)
            }else{
                res.json(results)
            }
        });
      });
module.exports = router