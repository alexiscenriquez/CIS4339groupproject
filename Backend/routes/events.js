const express = require('express');
const router = express.Router()
const eventsModel = require('../models/events');
const employersModel = require('../models/employees');
const volunteersModel = require('../models/volunteers');
const clientsModel = require('../models/clients')


//home page
router.get('/', (req, res, next)=>{
    console.log('hello')
    res.send('hello there2')
})

//{CREATE}create new event
router.post('/new-event', (req, res, next)=>{
    console.log(req.body)
    eventsModel.create(req.body, (error, data)=>{
    if(error){
        return next(error);
    }else{
        console.log(data)
        res.send('New Event added');
    }
    });
});

//{CREATE} get all info from events
router.get('/all', (req, res, next) =>{
    eventsModel.find({},(err, data)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//{READ} find one event
router.get('/find/:evid', (req, res, next)=>{
    eventsModel.find({evid : req.params.evid}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
        }
    });
});

//{UPDATE} Add new attendees to events
router.put('/attendee/:evid', (req, res, next)=>{
    var id_type = req.body.type
    var id_num = req.body.id
    
    if (id_type == 'volunteer'){
        eventsModel.findOneAndUpdate({evid : parseInt(req.params.evid)},{
            $push:{'attendees.vid':id_num}
        }, 
            (error, results) => {
                if(error){
                    return next(error);
                }else{
                res.send('Added new volunteer attendee to event.')
                console.log('Added new volunteer attendee to event.')
            }
        });
    }

    if (id_type == 'employee'){
        eventsModel.findOneAndUpdate({evid : parseInt(req.params.evid)},{
            $push:{'attendees.employeeID':id_num}
        }, 
            (error, results) => {
                if(error){
                    return next(error);
                }else{
                res.send('Added new employee attendee to event.')
                console.log('Added new employee attendee to event.')
            }
        });
    }

    if (id_type == 'client'){
        eventsModel.findOneAndUpdate({evid : parseInt(req.params.evid)},{
            $push:{'attendees.cid':id_num}
        }, 
            (error, results) => {
                if(error){
                    return next(error);
                }else{
                res.send('Added new client attendee to event.')
                console.log('Added new client attendee to event.')
            }
        });
    }

});

//
router.get('/event-attendees', (req, res, next)=>{
    eventsModel.aggregate([
        {
            $lookup:
                {
                from:'volunteers',
                localField:'attendees.vid',
                foreignField:'vid',
                as:"volunteer",
                pipeline:[
                    {$project:{
                        _id:0,
                        vid:1,
                        first_name:1,
                        last_name:1
                    }}
            ],
                },
        
             
        },
        
        {
            $project:{
                _id:0,
                attendees:0
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



//{UPDATE} event data
router.put('/update/:evid', (req, res, next)=>{
    eventsModel.findOneAndUpdate({evid : req.params.evid},{
        $set:req.body
        }, (error, results) => {
        if(error){
            return next(error);
        }else{
            res.send('Event information updated.')
            console.log('Event information updated.')
        }
    });
});

//{DELETE} event
router.delete('/del/:evid', (req, res, next)=> {
    eventsModel.deleteOne({evid : parseInt(req.params.evid)}, (error, data)=>{
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