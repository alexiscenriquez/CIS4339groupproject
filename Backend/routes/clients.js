const express = require('express');
const { ReadableStreamBYOBRequest } = require('stream/web');
const router = express.Router()
const clientsModel = require('../models/clients');

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


module.exports = router