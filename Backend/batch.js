const express = require("express");
const mongoose = require("mongoose");  // Require mongoose library
//Adding better logging functionality
const morgan = require("morgan");
//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
require("dotenv").config();   // Require the dotenv

const app = express();  //Create new instance

//'mongodb+srv://tb19:PHUy4ooqWYfkJw46@4339gta.enbdh.mongodb.net/4339gta?retryWrites=true&w=majority'
// import the student model schema from another file
let db4339 = process.env.DATABASE_URL
let client_model = require('./models/client');

//let employee_model = require('./models/employee');

//let volunteer_model = require('/models/volunteer')

//let service_model = require('/models/services')

//let event_model = require('/models/events')



// import grades model
//let GradeModel = require('./models/grade');
// setting up mongoose DB connection
mongoose
  .connect(db4339)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 3000; //Declare the port number

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode
 
//create an endpoint to get all students from the API
app.get('/client', (req, res, next) => {
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
    client_model.create(req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.send('Client Personal Information added to database.')
        }
    })

})

//delete a student by id
app.delete('/client/:id', (req, res) => {
  // Reading id from the URL
  const id = parseInt(req.params.id);

  // Remove item student ID
  db4339.collection('client_model').deleteOne(
      { pid: id },
      function () {
          res.send('Successfully deleted!')
      }
  )
});

app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });