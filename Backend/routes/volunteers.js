const express = require('express');
const router = express.Router()
const volunteerModel = require('../models/volunteers');
const axios = require("axios")

//home page
router.get('/', (req, res, next)=>{
    console.log('hello')
    res.send('hello there2')
})

//{CREATE}create new volunteer
router.post('/new-user', (req, res, next)=>{
    console.log(req.body)
    volunteerModel.create(req.body, (error, data)=>{
    if(error){
        return next(error);
    }else{
        console.log(data)
        res.send('New Volunteer added');
    }
    });
});

//{READ} find one volunteer
router.get('/find/:vid', (req, res, next)=>{
    volunteerModel.find({vid : req.params.vid}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
        }
    });
});

//add event to volunteer
router.put('/attendee/:vid', (req, res, next)=>{
    
    volunteerModel.findOneAndUpdate({vid:parseInt(req.params.vid)},{
        $push:{'events.evid':parseInt(req.body.evid)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('added event to volunteer')
            console.log('added event to volunteer')
        }
    });
});

//get volunteer-event attendees
router.get('/event-attendees', (req, res, next)=>{
    volunteerModel.aggregate([
        {
            $lookup:{
                from:'events',
                localField:'events.evid',
                foreignField:'evid',
                as:'events'
        }

        },{
        $project:{
            'vid':1,
            'first_name':1,
            'mid_name':1,
            'last_name':1,
            'phone_num':1,
            'events.evid':1,
            'events.ev_name':1,
            'events.ev_date':1,
            'events.city':1,
            'events.st':1,
            'events.zip':1

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

//{CREATE} get all info from volunteers
router.get('/all', (req, res, next) =>{
    volunteerModel.find({},(err, data)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//{UPDATE} volunteer data
router.put('/update/:vid', (req, res)=>{
    volunteerModel.findOneAndUpdate({vid : req.params.vid},{
        $set:req.body
        }, (error, results) => {
        if(error){
            return next(error);
        }else{
            res.send('Volunteer information updated.')
            console.log('Volunteer information updated.')
        }
    });
});

//{DELETE} user
router.delete('/del/:vid', (req, res, next)=> {
    volunteerModel.deleteOne({vid : req.params.vid}, (error, data)=>{
        if(error){
            return next(error);
        }else {
            //res.status(200).json({msg:data})
            res.send('deleted from db')
            console.log('deleted')
        }
    })
})

module.exports = router