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


// import the student model schema from another file
let client_model = require('./models/client');
//let employee_model = require('./models/employee');
let volunteer_model = require('./models/volunteers')
//let service_model = require('/models/services')
//let event_model = require('/models/events')

// import grades model
//let GradeModel = require('./models/grade');

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
 

//create an endpoint to get all students from the API
app.get('/personal', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    client_model.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

app.post('/clients', (req, res, next)=>{
    console.log(req.body)
    p_info_Model.create(req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.send('Client Personal Information added to database.')
        }
    })

});

const volunteerRouter = require('./routes/volunteers')
app.use('/volunteers', volunteerRouter);


const PORT = process.env.PORT || 3000; //Declare the port number
app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });
