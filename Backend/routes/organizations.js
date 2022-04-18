const express = require('express');
const { ReadableStreamBYOBRequest } = require('stream/web');
const router = express.Router()
const organizationsModel = require('../models/organizations');
const axios = require("axios")

//{READ} get all info from organizations
router.get("/", (req, res, next) => {
    organizationsModel.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

//{READ} find one Organization
router.get("/find/:orgid", (req, res, next) => {
    organizationsModel.find({ orgid: req.params.orgid }, (error, results) => {
      if (error) {
        return next(error);
      } else {
        res.json(results);
      }
    });
  });

  //{CREATE}create new organization
router.post("/new-org", (req, res, next) => {
    console.log(req.body);
    organizationsModel.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.send("New Organization added");
      }
    });
  });

//{ADD} service to organization
router.post('/add-service/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $push:{'offers.sid':req.body.id}
        },
        (error, results) => {
            if(error){
                return next(error)
            }else{
                res.send('Added new service to organization')
                console.log('Added new service to organization')
            }
        }
    )
  })

//{{REMOVE}} service from organization
router.post('/del-service/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $pull:{'offers.sid':req.body.id}
        },
        (error, results) =>{
            if(error){
                return next(error)
            }else{
                res.send('Removed service from organization')
                console.log('Removed service from organization')
            }
        }
    )
  })

  //{ADD} event to organization
router.post('/add-event/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $push:{'offers.evid':req.body.id}
        },
        (error, results) => {
            if(error){
                return next(error)
            }else{
                res.send('Added new event to organization')
                console.log('Added new event to organization')
            }
        }
    )
  })

//{{REMOVE}} event from organization
router.post('/del-event/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $pull:{'offers.evid':req.body.id}
        },
        (error, results) =>{
            if(error){
                return next(error)
            }else{
                res.send('Removed event from organization')
                console.log('Removed event from organization')
            }
        }
    )
  })

  //{ADD} client to organization
  router.post('/add-client/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $push:{'peoples.cid':req.body.id}
        },
        (error, results) => {
            if(error){
                return next(error)
            }else{
                res.send('Added new client to organization')
                console.log('Added new client to organization')
            }
        }
    )
  })

  //{{REMOVE}} client from organization
router.post('/del-client/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $pull:{'peoples.cid':req.body.id}
        },
        (error, results) =>{
            if(error){
                return next(error)
            }else{
                res.send('Removed client from organization')
                console.log('Removed client from organization')
            }
        }
    )
  })

  //{ADD} employee to organization
  router.post('/add-emp/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $push:{'peoples.employeeID':req.body.id}
        },
        (error, results) => {
            if(error){
                return next(error)
            }else{
                res.send('Added new employee to organization')
                console.log('Added new employee to organization')
            }
        }
    )
  })

  //{{REMOVE}} employee from organization
router.post('/del-emp/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $pull:{'peoples.employeeID':req.body.id}
        },
        (error, results) =>{
            if(error){
                return next(error)
            }else{
                res.send('Removed employee from organization')
                console.log('Removed employee from organization')
            }
        }
    )
  })

  //{ADD} volunteer to organization
  router.post('/add-vol/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $push:{'peoples.vid':req.body.id}
        },
        (error, results) => {
            if(error){
                return next(error)
            }else{
                res.send('Added volunteer to organization')
                console.log('Added volunteer to organization')
            }
        }
    )
  })

    //{{REMOVE}} volunteer from organization
router.post('/del-vol/:orgid', (req, res, next) =>{
    organizationsModel.findOneAndUpdate(
        {
            orgid:parseInt(req.params.orgid)
        },
        {
            $pull:{'peoples.vid':req.body.id}
        },
        (error, results) =>{
            if(error){
                return next(error)
            }else{
                res.send('Removed volunteer from organization')
                console.log('Removed volunteer from organization')
            }
        }
    )
  })

  //get organization and "offers" information
router.get("/organization-offers/:orgid", (req, res, next) => {
    //join documents to get services, events data
    organizationsModel.aggregate(
      [
        {
          $match:{
            orgid:parseInt(req.params.orgid)
          }
        },
        {
          $lookup: {
            from: "services",
            localField: "offers.sid",
            foreignField: "sid",
            as: "services",
          },
        },
        {
          $lookup: {
            from: "events",
            localField: "offers.evid",
            foreignField: "evid",
            as: "events",
          },
        },
        //only get back specific fields
        {
          $project: {
            _id: 0,
            orgid: 1,
            org_name: 1,
            "services.sid": 1,
            "services.name": 1,
            "services.renewal": 1,
            "services.notes": 1,
            "events.evid": 1,
            "events.ev_name": 1,
            "events.ev_host": 1,
            "events.date": 1,
            "events.addr": 1,
            "events.city": 1,
            "events.st": 1,
            "events.zip": 1,
          },
        },
      ],
      (error, results) => {
        if (error) {
          return next(error);
        } else {
          console.log(results);
          res.json(results);
        }
      }
    );
  });

  //get Organization and peoples information
router.get("/organization-peoples/:orgid", (req, res, next) => {
    //join documents to get volunteers, clients, employees data
    organizationsModel.aggregate(
      [
        {
          $match:{
            orgid:parseInt(req.params.orgid)
          }
        },
        {
          $lookup: {
            from: "volunteers",
            localField: "peoples.vid",
            foreignField: "vid",
            as: "volunteers",
          },
        },
        {
          $lookup: {
            from: "clients",
            localField: "peoples.cid",
            foreignField: "cid",
            as: "clients",
          },
        },
        {
          $lookup: {
            from: "employees",
            localField: "peoples.employeeID",
            foreignField: "employeeID",
            as: "employees",
          },
        },
        //only get back specific fields
        {
          $project: {
            _id: 0,
            orgid: 1,
            org_name: 1,
            "volunteers.vid": 1,
            "volunteers.first_name": 1,
            "volunteers.last_name": 1,
            "volunteers.phone_num": 1,
            "clients.cid": 1,
            "clients.first_name": 1,
            "clients.last_name": 1,
            "clients.phone_number": 1,
            "employees.employeeID": 1,
            "employees.firstName": 1,
            "employees.lastName": 1,
            "employees.phone": 1,
          },
        },
      ],
      (error, results) => {
        if (error) {
          return next(error);
        } else {
          console.log(results);
          res.json(results);
        }
      }
    );
  });

  //{UPDATE} organization data
router.put("/update/:orgid", (req, res, next) => {
    organizationsModel.findOneAndUpdate(
      { orgid: req.params.orgid },
      {
        $set: req.body,
      },
      (error, results) => {
        if (error) {
          return next(error);
        } else {
          res.send("Organization information updated.");
          console.log("Organization information updated.");
        }
      }
    );
  });

  //{{DELETE}} Organization
  router.delete("/del/:orgid", (req, res, next) => {
    organizationsModel.deleteOne({ orgid: parseInt(req.params.orgid) }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        //res.status(200).json({msg:data})
        res.send("deleted from db");
        console.log("deleted");
      }
    });
  });


module.exports = router;
