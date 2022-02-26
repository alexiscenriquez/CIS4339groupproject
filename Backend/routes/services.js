const express = require('express');
const router = express.Router()
const servicesModel = require('../models/services');

//home page
router.get('/', (req, res, next)=>{
    console.log('hello')
    res.send('hello there2')
})

//{CREATE}create new service
router.post('/new-user', (req, res, next)=>{
    console.log(req.body)
    servicesModel.create(req.body, (error, data)=>{
    if(error){
        return next(error);
    }else{
        console.log(data)
        res.send('New Volunteer added');
    }
    });
});

//{READ} find one service
router.get('/find/:vid', (req, res, next)=>{
    servicesModel.find({vid : req.params.vid}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
        }
    });
});

//{CREATE} get all info from services
router.get('/all', (req, res, next) =>{
    servicesModel.find({},(err, data)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//{UPDATE} service data
router.put('/update/:vid', (req, res)=>{
    servicesModel.findOneAndUpdate({vid : req.params.vid},{
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

//{DELETE} services
router.delete('/del/:vid', (req, res, next)=> {
    servicesModel.deleteOne({vid : req.params.vid}, (error, data)=>{
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