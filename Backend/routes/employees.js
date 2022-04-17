const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const empModel = require("../models/employees");

//Creating a new employee document
router.post("/newemp", (req, res, next) => {
  empModel.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.send("Employee is added to the database.");
      console.log(data);
    }
  });
});

//Retrieve all documents
router.get("/", (req, res, next) => {
  empModel.find({}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Retrieving a single document based on employeeID
router.get("/find/:employeeID", (req, res, next) => {
  empModel.find({ employeeID: req.params.employeeID }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send("Worker information not found");
    } else {
      res.json(data);
    }
  });
});

//Updating an employee document
router.put("/update/:employeeID", (req, res, next) => {
  empModel.updateOne(
    { employeeID: req.params.employeeID },
    { $set: req.body },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send("Activity is edited via PUT.");
        console.log("Activity successfully updated!", data);
      }
    }
  );
});

//Deleting an employee document
router.delete("/del/:employeeID", (req, res, next) => {
  console.log(req.params);
  empModel.deleteOne({ employeeID: req.params.employeeID }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.send("deleted from db");
      console.log("deleted from db");
    }
  });
});

//shows all employees with information about the events and/or clients they have
router.get("/employee-clients-events/:employeeID", (req, res, next) => {
  empModel.aggregate(
    [
      {
        $match: {
          employeeID: parseInt(req.params.employeeID),
        },
      },
      {
        $lookup: {
          from: "clients",
          localField: "clients.clientID",
          foreignField: "cid",
          as: "clients",
        },
      },
      {
        $lookup: {
          from: "events",
          localField: "events.eventID",
          foreignField: "evid",
          as: "events",
        },
      },
      {
        $project: {
          _id: 0,
          employeeID: 1,
          firstName: 1,
          lastName: 1,
          "clients.cid": 1,
          "clients.first_name": 1,
          "clients.last_name": 1,
          "clients.phone_number": 1,
          "events.evid": 1,
          "events.ev_name": 1,
          "events.ev_host": 1,
          "events.ev_date": 1,
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

//add clients to employee collection

router.post("/add-client/:employeeID", (req, res, next) => {
  //add clients to employees

  empModel.findOneAndUpdate(
    { employeeID: parseInt(req.params.employeeID) },
    {
      $push: { "clients.clientID": req.body.id },
    },
    (error, results) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.send("added employee to client");
        console.log("added employee to client");
      }
    }
  );
});

//remove clients from employees
router.post("/del-client/:employeeID", (req, res, next) => {
  empModel.findOneAndUpdate(
    { employeeID: parseInt(req.params.employeeID) },
    {
      $pull: { "clients.clientID": req.body.id },
    },
    (error, results) => {
      if (error) {
        return next(error);
      } else {
        res.send("Removed client from employee.");
        console.log("Removed client from employee.");
      }
    }
  );
});


//remove events from employees
router.post("/del-event/:employeeID", (req, res, next) => {
  empModel.findOneAndUpdate(
    { employeeID: parseInt(req.params.employeeID) },
    {
      $pull: { "events.eventID": req.body.id },
    },
    (error, results) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.send("Removed event from employee.");
        console.log("Removed event from employee.");
      }
    }
  );
});

router.post('/add-event/:employeeID', (req, res, next) =>{
  empModel.findOneAndUpdate(
    {employeeID: parseInt(req.params.employeeID)},
    {
      $push: {'events.eventID':req.body.id}
    },
    (error, results)  =>{
      if(error){
        console.log(error)
        return next(error);
      }else{
        res.send('added event to employee')
        console.log('added event to employee')
      }
    }
  )}

)
  

module.exports = router;
