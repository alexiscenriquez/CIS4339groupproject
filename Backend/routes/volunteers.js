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