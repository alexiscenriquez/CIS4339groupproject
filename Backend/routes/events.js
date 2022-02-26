const express = require('express');
const router = express.Router()
const eventsModel = require('../models/events');

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
        res.send('New Volunteer added');
    }
    });
});

//{READ} find one event
router.get('/find/:vid', (req, res, next)=>{
    eventsModel.find({vid : req.params.vid}, (error, results)=>{
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

//{UPDATE} event data
router.put('/update/:vid', (req, res)=>{
    eventsModel.findOneAndUpdate({vid : req.params.vid},{
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