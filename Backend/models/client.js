const uuid = require('uuid');
const mongoose = require('mongoose');
//const { truncate } = require('fs');
const Schema = mongoose.Schema;

let client_model_Schema = new Schema({
  // Client Personal Information
  pid: {
    type: Number,
    required: true,
    unique: true
  },
    first_name: {
      type: String,
      required: true
    },
    mid_name:{
      type:String,
      required: true
    },
    last_name:{
      type:String,
      required: true
    },
    b_day:{
      type: Date,
      required: true
    },
    DL:{
      type: String,
    },
    gender:{
      type: String
    },
    ethnicity:{
      type: String
    },
    // Client Personal Information

    //Client Housing Information
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zip_code: {
      type: String,
      required: true
    },
    rent: {
      type: String,
      required: true
    },
    residency: {
      type: String,
      required: true
    },living_arrangements: {
      type: String,
      required: true
    },number_of_children: {
      type: Number,
      required: true
    },
    number_of_adults_over_65: {
      type: Number,
      required: true
    },
      //Client Housing Information

      //Client Contact Information
      phone_number: {
        type: String,
        required: true
      },
      home_phone_number:{
        type:String,
      },
      emergency_contact_phone_number:{
        type:String,
        required: true
      },
      primary_email:{
        type: String,
        required: true
      },
      secondary_email:{
        type: String,
      },
      marital_status:{
        type: String,
        required: true
      },
      language:{
        type: String
      },
      priority_population:{
        type: String,
        required: true
      },
      //Client Contact Information

      //Client Employment Information
      employment_status: {
        type: String,
        required: true
      },
      length_of_employment: {
        type: String,
        requiured: true
      },
      employer_name: {
        type: String,
        required: true
      },
      occupation: {
        type: String,
        required: true
      },
      //Client Employment Information

      //Client Education Information
      highest_grade: {
        type: String,
        required: true
      },
      graduate: {
        type: Boolean,
        required: true
      },
      degree_name: {
        type: String,
        required: true
      },
      //Client Education Information

      //Client Income Information
      head_of_household: {
        type: String,
        required: true
      },
      monthly_income:{
        type: Number,
        required: true
      },
      spousal_income_support:{
        type: String,
        required: true
      },
      worker_compensation:{
        type: Number,
        required: true
      },
      veteran_status:{
        type: String,
        required: true
      },
      child_support:{
        type: Number,
        required: true
      },
      tanf:{
        type: Number,
        required: true,
      },
      food_stamps: {
        type: Number,
        requried: true,
      },
      ssi: {
        type: Number,
        required: true,
      },
      unemployment: {
        type: Number,
        required: true,
      },
      social_security: {
        type: Number,
        required: true,
      },
      other_income: {
        type: Number,
      },
      //Client Income Information

      //Client Health Insurance Information
      health_insurance: {
        type: Boolean,
        required: true
      },
      health_insurance_desc: {
        type: String,
        required: true
      },
      insurance_program: {
        type: String,
        required: true
      },
      //Client Health Insurance Information

      //Client Health Information
      covid_status: {
        type: Boolean,
        required: true
      },
    }, {
      //Client Health Information
    collection: 'client_model'
});

module.exports = mongoose.model('client_model', client_model_Schema)

//versionKey: false 



