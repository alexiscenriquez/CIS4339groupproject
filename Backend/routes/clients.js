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



// get all of clients employee history and service hitsory
router.get('/client-history', (req, res, next)=>{
    //joining the data for employees and services
    clientsModel.aggregate([
        {
            $lookup:
                {
                from:'employees',
                localField:'employees.employeeID',
                foreignField:'employeeID',
                as:"employees",
                }
        
             
        },
        {
            $lookup:
                {
                from:'services',
                localField:'services.sid',
                foreignField:'sid',
                as:"services",
                }


             },
             {
            //project allows for data retrieval specification (0 = no, 1= yes)
            $project:{
                '_id':0, 
                'employeedID':1,
                'first_name':1,
                'mid_name':1,
                'last_name':1,
                'employees.employeeID':1, 
                'employees.firstName':1,
                'employees.lastName':1,
                'employees.phone':1,
                'employees.pEmail':1,
                'services.sid':1,
                'services.name':1,
                'services.renewal':1
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

//{PUT} adding an employee to a client
router.put('/adddelemp/:cid', (req, res, next)=>{
    var action = req.body.action
    //While the 'action' field is 'add' then an employee can be added to a client
    if(action == 'add'){
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
}
    //While the 'action' field is 'add' then an employee can be removed from a client
    if(action == 'delete'){
    clientsModel.findOneAndUpdate({cid:parseInt(req.params.cid)},{
        $pull:{'employees.employeeID':parseInt(req.body.employeeID)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('deleted employee linked to client')
            console.log('deleted employee linked to client')
        }
    });
    }
});

//adding a service to a client
router.put('/adddelservice/:cid', (req, res, next)=>{
    var action = req.body.action
      //While the 'action' field is 'add' then a service can be added to a client
    if(action == 'add'){
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
}
    //While the 'action' field is 'add' then a service can be removed from a client
    if(action == 'delete'){
    clientsModel.findOneAndUpdate({cid:parseInt(req.params.cid)},{
        $pull:{'services.sid':parseInt(req.body.sid)}
    },(error, results)=>{
        if(error){
            return next(error);
        }else{
            res.send('deleted service from client')
            console.log('deleted service from client')
        }
    });
    }
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