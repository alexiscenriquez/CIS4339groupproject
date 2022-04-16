const express = require("express");
const router = express.Router();
const eventsModel = require("../models/events");
const volunteerModel = require('../models/volunteers')

//{CREATE} get all info from events
router.get("/", (req, res, next) => {
  eventsModel.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//{CREATE}create new event
router.post("/new-event", (req, res, next) => {
  console.log(req.body);
  eventsModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.send("New Event added");
    }
  });
});

//{READ} find one event
router.get("/find/:evid", (req, res, next) => {
  eventsModel.find({ evid: req.params.evid }, (error, results) => {
    if (error) {
      return next(error);
    } else {
      res.json(results);
    }
  });
});
//Add volunteer to event
router.post('/add-volunteer/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $push:{'attendees.vid':req.body.id}
      },
      (error, results) => {
          if(error){
              return next(error)
          }else{
              res.send('Added new volunteer attendee to event')
              console.log('Added new volunteer attendee to event')
          }
      }
  )
})
//remove volunteer from event
router.post('/del-volunteer/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $pull:{'attendees.vid':req.body.id}
      },
      (error, results) =>{
          if(error){
              return next(error)
          }else{
              res.send('Removed volunteer attendee from event')
              console.log('Removed volunteer attendee from event')
          }
      }
  )
})

//add employee to event
router.post('/add-employee/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $push:{'attendees.employeeID':req.body.id}
      },
      (error, results) => {
          if(error){
              return next(error)
          }else{
              res.send('Added new employee attendee to event')
              console.log('Added new employee attendee to event')
          }
      }
  )
})

//remove employee from event
router.post('/del-employee/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $pull:{'attendees.employeeID':req.body.id}
      },
      (error, results) =>{
          if(error){
              return next(error)
          }else{
              res.send('Removed employee attendee from event')
              console.log('Removed employee attendee from event')
          }
      }
  )
})

//add client to event
router.post('/add-client/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $push:{'attendees.cid':req.body.id}
      },
      (error, results) => {
          if(error){
              return next(error)
          }else{
              res.send('Added new client attendee to event')
              console.log('Added new client attendee to event')
          }
      }
  )
})

//remove client from event
router.post('/del-client/:evid', (req, res, next) =>{
  eventsModel.findOneAndUpdate(
      {
          evid:parseInt(req.params.evid)
      },
      {
          $pull:{'attendees.cid':req.body.id}
      },
      (error, results) =>{
          if(error){
              return next(error)
          }else{
              res.send('Removed client attendee from event')
              console.log('Removed client attendee from event')
          }
      }
  )
})

//get event and attendee information
router.get("/event-attendees/:evid", (req, res, next) => {
  //join documents to get volunteers, clients, employees data
  eventsModel.aggregate(
    [
      {
        $match:{
          evid:parseInt(req.params.evid)
        }
      },
      {
        $lookup: {
          from: "volunteers",
          localField: "attendees.vid",
          foreignField: "vid",
          as: "volunteers",
        },
      },
      {
        $lookup: {
          from: "clients",
          localField: "attendees.cid",
          foreignField: "cid",
          as: "clients",
        },
      },
      {
        $lookup: {
          from: "employees",
          localField: "attendees.employeeID",
          foreignField: "employeeID",
          as: "employees",
        },
      },
      //only get back specific fields
      {
        $project: {
          _id: 0,
          evid: 1,
          ev_name: 1,
          ev_host: 1,
          ev_date: 1,
          city: 1,
          st: 1,
          zip: 1,
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

//{UPDATE} event data
router.put("/update/:evid", (req, res, next) => {
  eventsModel.findOneAndUpdate(
    { evid: req.params.evid },
    {
      $set: req.body,
    },
    (error, results) => {
      if (error) {
        return next(error);
      } else {
        res.send("Event information updated.");
        console.log("Event information updated.");
      }
    }
  );
});

//{DELETE} event
router.delete("/del/:evid", (req, res, next) => {
  eventsModel.deleteOne({ evid: parseInt(req.params.evid) }, (error, data) => {
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
