const express = require('express');
const router = express.Router()
const servicesModel = require('../models/services');

// get info for all services
router.get('/', (req, res, next) =>{
    servicesModel.find({},(err, data)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//{CREATE}create new service
router.post('/new-service', (req, res, next)=>{
    console.log(req.body)
    servicesModel.create(req.body, (error, data)=>{
    if(error){
        return next(error);
    }else{
        console.log(data)
        res.send('New Service added');
    }
    });
});

//{READ} find data for one service by sid
router.get('/find/:sid', (req, res, next)=>{
    servicesModel.find({sid : parseInt(req.params.sid)}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
        }
    });
});



//add or remove applicant from services
router.put('/new-applicant/:sid', (req, res, next)=>{
    var action = req.body.action
    if(action == 'add'){
    servicesModel.findOneAndUpdate({vid:parseInt(req.params.sid)},{
        $push:{'applicants.cid':parseInt(req.body.cid)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('added applicant to services')
            console.log('added applicant to services')
        }
        });
    }
    if(action == 'del'){
        servicesModel.findOneAndUpdate({vid:parseInt(req.params.sid)},{
            $pull:{'applicants.cid':parseInt(req.body.cid)}
        },(error, results)=>{
            if(error){
                return next(error);
            }else{
                res.send('removed applicant from services')
                console.log('removed applicant from services')
            }
            });
        }
});

//get all services with applicant basic info
//join documents to compare data with clients
router.get('/all-applicants', (req, res, next)=>{
    servicesModel.aggregate([
        {
            $lookup:{
                from:'clients',
                localField:'applicants.cid',
                foreignField:'cid',
                as:'clients'
        }

        },{
        //get only specific fields
        $project:{
            'sid':1,
            'name':1,
            'notes':1,
            'clients.cid':1,
            'clients.first_name':1,
            'clients.mid_name':1,
            'clients.last_name':1,
            'clients.phone_number':1,
            'clients.primary_email':1
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

//update information for services, frontend will limit what can be changed in the body
router.put('/update/:sid', (req, res)=>{
    servicesModel.findOneAndUpdate({sid : parseInt(req.params.sid)},{
        $set:req.body
        }, (error, results) => {
        if(error){
            return next(error);
        }else{
            res.send('Services information updated.')
            console.log('Services information updated.')
        }
    });
});

//delete service from database
router.delete('/del/:sid', (req, res, next)=> {
    servicesModel.deleteOne({sid : parseInt(req.params.sid)}, (error, data)=>{
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