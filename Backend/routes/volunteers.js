const express = require('express');
const router = express.Router()
const volunteerModel = require('../models/volunteers');
const eventsModel = require('../models/events')


//get all data for volunteers
router.get('/', (req, res, next) =>{
    volunteerModel.find({},(err, data)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//{CREATE}create new volunteer
router.post('/new-user', (req, res, next)=>{
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

router.post('/add-event/:vid', (req, res, next) =>{
    volunteerModel.findOneAndUpdate(
        {
            vid:parseInt(req.params.vid)
        },
        {
            $push:{'events.vid':parseInt(req.body.evid)}
        },(error, results)=>{
            if(error){
                return next(error)
            }else{
                res.send('added event to volunteer')
                console.log('added event to volunteer')
            }
        }
    )
})

router.post('/del-event/:vid', (req, res, next) =>{
    volunteerModel.findOneAndUpdate(
        {
            vid:parseInt(req.params.vid)
        },
        {
            $pull:{'events.vid':parseInt(req.body.evid)}
        },(error, results)=>{
            if(error){
                return next(error)
            }else{
                res.send('deleted event from volunteer')
                console.log('deleted event from volunteer')
            }
        }
    )
})

//get volunteer-event attendees
router.get('/event-attendees', (req, res, next)=>{
    //join documents to get events data
    volunteerModel.aggregate([
        {
            $lookup:{
                from:'events',
                localField:'events.evid',
                foreignField:'evid',
                as:'events'
            }

        },{
            //get only specific fields
        $project:{
            'vid':1,
            'first_name':1,
            'mid_name':1,
            'last_name':1,
            'phone_num':1,
            //'events':{$size:'$events'},
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

//{DELETE} volunteer from database
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

router.get('/events/:vid', (req, res, next)=>{
    volunteerModel.aggregate([
        {
            $match:{
                vid:parseInt(req.params.vid)
            }
        },
        {
            $lookup: {
              from: "events",
              localField: "vid",
              foreignField: "attendees.vid",
              as: "events",
            }
          },
          {
              $project:{
                  vid:1,
                  first_name:1,
                  last_name:1,
                  "events.evid":1,
                  'events.ev_name':1,
                  'events.ev_date':1,
                  'events.city':1,
                  'events.st':1
              }
          }
        ],
        (error, results) => {
            if(error){
                return next(error);
            }else{
                console.log(results);
                res.json(results);
            }
        }
    )
})



module.exports = router