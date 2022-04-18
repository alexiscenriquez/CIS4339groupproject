const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
//Adding better logging functionality
const morgan = require("morgan");

//uses .env file to avoid uploaded sensitive data
require("dotenv").config();   // Require the dotenv
const cors = require('cors')
const app = express();  //Create new instance
//point to files required
const clientRouter = require('./routes/clients')
const employeeRouter = require('./routes/employees')
const volunteerRouter = require('./routes/volunteers')
const eventRouter = require('./routes/events')
const servicesRouter = require('./routes/services')
const reportsRouter = require('./routes/reports')

// set up connection to mongodb with atlas
mongoose
  .connect(process.env.DATABASE_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Atlas Connection Error", err);
  });


app.use(cors());
app.use(express.json()); //access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode

//sets up middleware
app.use('/clients', clientRouter)
app.use('/employees', employeeRouter)
app.use('/volunteers', volunteerRouter) 
app.use('/events', eventRouter)
app.use('/services', servicesRouter)
app.use('/reports', reportsRouter)

//Declare the port number
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });

  // Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) 
      err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});