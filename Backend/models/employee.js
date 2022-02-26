const uuid = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeesSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuid.v1,
    },
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
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    collection: "employees",
  }
);
module.exports = mongoose.model("employee", employeesSchema);
