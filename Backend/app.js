const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
//Adding better logging functionality
const morgan = require("morgan");
//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv
const cors = require('cors')
const app = express();  //Create new instance
const clientRouter = require('./routes/clients')
const employeeRouter=require('./routes/employees')
const volunteerRouter = require('./routes/volunteers')
const eventRouter = require('./routes/events')
const servicesRouter = require('./routes/services')

// setting up mongoose DB connection
mongoose
  .connect(process.env.DATABASE_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Atlas Connection Error", err);
  });


app.use(cors());
app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode
app.use('/clients', clientRouter)
app.use('/employees',employeeRouter)
app.use('/volunteers', volunteerRouter) 
app.use('/events', eventRouter)
app.use('/services', servicesRouter)


const PORT = process.env.PORT || 3000; //Declare the port number
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