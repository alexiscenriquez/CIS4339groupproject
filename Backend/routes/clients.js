const express = require('express');
const { ReadableStreamBYOBRequest } = require('stream/web');
const router = express.Router()
const clientsModel = require('../models/clients');
const axios = require("axios")

//home page
router.get('/', (req, res, next)=>{
    console.log('hello')
    res.send('hello there2')
})

//{CREATE} Create a new client
router.post('/new-client', (req, res, next)=>{
    console.log(req.body)
    clientsModel.create(req.body, (error, data)=>{
    if (error){
        return next(error);
    }else{
        console.log(data)
        res.send('New Client added')
    }
    });
});

//{READ} Finds specified client
router.get('/find/:cid', (req, res, next)=>{
    clientsModel.find({cid : req.params.cid}, (error, results)=>{
        if(error){
            return next(error);
        }else{
            res.json(results);
        }
    });
});

//{READ} Finds all Client info 
router.get('/all', (req, res, next)=>{
    clientsModel.find({}, (err, data)=>{
        if(err){
            console.log(error);
        }else{
            console.log(data)
            res.json(data);
        }
    });
});

// get all of clients employee history that assisted them
router.get('/client-employee-history', (req, res, next)=>{
    clientsModel.aggregate([
        {
            $lookup:
                {
                from:'employees',
                localField:'employees.employeeID',
                foreignField:'employeeID',
                as:"employees",
                pipeline:[
                    {$project:{
                        _id:0,
                        employeeID:1,
                        firstName:1,
                        lastName:1     
                    }}
            ],
                },
        
             
        },    
        {
            $project:{
                _id:0,
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

// get all of clients service history
router.get('/client-service-history', (req, res, next)=>{
    clientsModel.aggregate([
        {
            $lookup:
                {
                from:'services',
                localField:'services.sid',
                foreignField:'sid',
                as:"services",
                pipeline:[
                    {$project:{
                        _id:0,
                        attendees:0
                       
                    }}
            ],
                },
        
             
        },
        {
            $project:{
                _id:0,
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

//{UPDATE} Updates Client Data
router.put('/update/:cid', (req, res)=>{
    clientsModel.updateOne({cid : req.params.cid},{
        $set:req.body
        }, (error, results) => {
        if(error){
            return next(error);
        }else{
            res.send('Client information updated.')
            console.log('Client information updated.')
        }
    });
});

//{DELETE} Delete client data
router.delete('/del/:cid', (req, res, next)=> {
    clientsModel.deleteOne({cid : req.params.cid}, (error, data)=>{
        if(error){
            return next(error);
        }else {
            //res.status(200).json({msg:data})
            res.send('Client deleted from database')
            console.log('Client deleted from database')
        }
    })
})

//adding an employee to a client
router.put('/addemp/:cid', (req, res, next)=>{
    
    clientsModel.findOneAndUpdate({cid:parseInt(req.params.cid)},{
        $push:{'employees.employeeID':parseInt(req.body.employeeID)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('added employee to client')
            console.log('added employee to client')
        }
    });
});

//adding a service to a client
router.put('/addservice/:cid', (req, res, next)=>{
    
    clientsModel.findOneAndUpdate({cid:parseInt(req.params.cid)},{
        $push:{'services.sid':parseInt(req.body.sid)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('added service to client')
            console.log('added service to client')
        }
    });
});

//simple get
router.get('/ext', async(req, res) => {
    let ex_api = "https://cis-4339.herokuapp.com/api/v1/";
    axios.get(ex_api).then(response => {
        res.status(200).json(response.data);
    })
        .catch((err) =>{
            res.status(500).json({message: err});
        })
})

//get all
router.get('/ext-clients', async(req, res) => {
    let ex_api = "https://cis-4339.herokuapp.com/api/v1/data"
    axios.get(ex_api).then(response => {
        res.status(200).json(response.data);
    })
        .catch((err) =>{
            res.status(500).json({message: err});
        })
})
//get one
router.get('/ext-client', async(req, res) => {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let phone_number = req.body.phone_number
    let ex_api = `https://cis-4339.herokuapp.com/api/v1/data/${first_name}/${last_name}/${phone_number}`
    axios.get(ex_api).then(response => {
        res.status(200).json(response.data);
    })
        .catch((err) =>{
            res.status(500).json({message: err});
        })
})

module.exports = router