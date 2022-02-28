const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const empModel = require("../models/employees");

router.get("/", (req, res, next) => {
  empModel.find({}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/newemp", (req, res, next) => {
  empModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Employee is added to the database.");
      console.log(data)
    }
  });
});

router.get("/find/:employeeID", (req, res, next) => {
  // Finding document based on workID
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

router.get("/:employeeID", (req, res, next) => {
  // Finding document based on workID
  empModel.findOne({ employeeID: req.params.employeeID }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send("Worker information not found");
    } else {
      res.json(data);
    }
    })
  });

router.delete("/del/:employeeID", (req, res, next) => {
  console.log(req.params)
  empModel.deleteOne({ employeeID: req.params.employeeID }, (error, data) => {
    if (error) {
      return next(error);
    }else{
      res.send('deleted from db')
      console.log('deleted from db')
      }
    });
  });

module.exports = router;
