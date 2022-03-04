const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeesSchema = new Schema(
  {
    employeeID: {
      type: Number,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    SSN: {
      type: String,
      required: true,
    },
    dLicense: {
      type: String,
    },
    gender: {
      type: String,
    },
    race: {
      type: String,
    },
    hispanic: {
      type: Boolean,
    },
    phone: {
      type: String,
    },
    home: {
      type: String,
    },
    eContact: [
      {
        fName: String,
        lName: String,
        phone: String,
      },
    ],
    pEmail: {
      type: String,
    },
    sEmail: {
      type: String,
    },
    language: {
      type: [String],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    county: {
      type: String,
    },
    zip: {
      type: String,
    },
    lEmployment: {
      type: String,
    },
    dept: {
      type: String,
    },
    jDesc: {
      type: String,
    },
    hGrade: {
      type: String,
    },
    degree: {
      type: String,
    },
    events: [
      {
        eventID: Number,
      },
    ],
    clients: {
      clientID: [
        {
          type: Number,
          unique: true,
        },
      ],
    },
  },
  {
    collection: "employees",
  }
);
module.exports = mongoose.model("employee", employeesSchema);
