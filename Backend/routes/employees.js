const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const empModel = require("../models/employee");

router.get("/", (req, res, next) => {
  empModel.find((error, data) => {
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
      console.log("nope");
      return next(error);
    } else {
      res.send("Employee is added to the database.");
      res.json(data);
    }
  });
});
router.get("/", (req, res, next) => {
  console.log("hello");
  res.send("hello there");
});

router.get("/:employeeID", (req, res, next) => {
  // Finding document based on workID
  empModel.findOne({ employeeID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send("Worker information not found");
    } else {
      res.json(data);
    }
  });
});

router.put("/:employeeID", (req, res, next) => {
  empModel.findOneAndUpdate(
    { employeeID: req.params.id },
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
  empModel.findOne({ employeeID: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send("Worker information not found");
    } else {
      res.json(data);
    }
  });

  router.delete("/:employeeID", (req, res, next) => {
    empModel.findOneAndRemove({ employeeID: req.params.id }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });
});
module.exports = router;
