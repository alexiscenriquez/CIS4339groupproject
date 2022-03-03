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

//{READ} find data by object id
router.get('/objfind', (req, res, next)=>{
    var mod = req.body.type

    //var docs = new Array(employersModel, volunteersModel, clientsModel);
    if(mod == 'employee'){
        employersModel.find({employeeID:req.body.id}, (error, results)=>{
            if(error){
                return  next(error)
            }else{
                res.json(results)
            }
        })
    }
    
    if(mod == 'volunteer'){
        volunteersModel.find({vid:req.body.id}, (error, results)=>{
            if(error){
                return  next(error)
            }else{
                res.json(results)
            }
        })
    }

    if(mod == 'client'){
        clientsModel.find({cid:req.body.id}, (error, results)=>{
            if(error){
                return  next(error)
            }else{
                res.json(results)
            }
        })
    }
     

});



//{READ} find one event
router.get('/find/:evid', (req, res, next)=>{
    eventsModel.find({evid : req.params.vid}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
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



//{ADD} new attendees to events
// router.put('/attendee/:evid', (req, res)=>{
//     console.log(req.body)
//     eventsModel.findOneAndUpdate({evid : req.params.evid},{
//         $push:{attendees:{$each:[req.body]}}}, 
//         (error, results) => {
//         if(error){
//             return next(error);
//         }else{
//             res.send('Added new attendee to event.')
//             console.log('Added new attendee to event.')
//         }
//     });
// });

router.put('/attendee/:evid', (req, res)=>{
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
                res.send('Added new attendee to event.')
                //console.log('Added new attendee to event.')
            }
        });
    }
});

//{UPDATE} event data
router.put('/update/:evid', (req, res)=>{
    eventsModel.findOneAndUpdate({vid : req.params.evid},{
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
router.delete('/del/:vid', (req, res, next)=> {
    eventsModel.deleteOne({vid : req.params.vid}, (error, data)=>{
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