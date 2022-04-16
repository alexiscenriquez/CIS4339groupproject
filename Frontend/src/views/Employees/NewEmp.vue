<template>
<div>
  <h1>Create Employee</h1>

  <form @submit.prevent="handleSubmitForm">
    <fieldset class="form-control mb-5">
      <legend>Personal Information</legend>
      <div class="row mb-4">
        <div class="col-6">
          <label for="id" class="form-label">ID</label>
          <input
            v-model="employees.employeeID"
            type="text"
            class="form-control"
            name="ID"
            aria-label="First name"
          />
        </div>
      </div>
      
      <div class="row mb-4">
        <div class="col">
          <label for="fName" class="form-label">First Name</label>
          <input
            v-model="employees.firstName"
            type="text"
            class="form-control"
            name="fName"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <label for="lName" class="form-label">Last Name</label>
          <input
            v-model="employees.lastName"
            type="text"
            class="form-control"
            name="lName"
            aria-label="Last name"
          />
        </div>
      </div>
      
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="Birthday" class="form-label">Birthday</label>
          <input
            type="date"
            class="form-control"
            name="Birthday"
            v-model="employees.birthday"
          />
        </div>
        <div class="col-sm-4">
          <label for="ssn" class="form-label">Social Security</label>
          <input
            type="text"
            class="form-control"
            name="ssn"
            v-model="employees.SSN"
          />
        </div>
        <div class="col-sm-4">
          <label for="dl" class="form-label">Drivers License</label>
          <input
            type="text"
            class="form-control"
            name="dl"
            v-model="employees.dLicense"
          />
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-sm-6">
          <label for="race" class="form-label">Race</label>
          <select
            name="race"
            id=""
            class="form-control"
            v-model="employees.race"
          >
            <option value=""></option>
            <option value="White">White</option>
            <option value="Black">Black or African American</option>
            <option value="Native American/Indian">
              American Indian or Alaska Native
            </option>
            <option value="Asian">Asian</option>
            <option value="Islander">
              Native Hawaiian or Other Pacific Islander
            </option>
          </select>
        </div>
        <div class="col-sm-6">
          <label for="hispanic" class="form-label">Hispanic or Latino</label>
          <select
            name="hispanic"
            id=""
            class="form-control"
            v-model="employees.hispanic"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-sm-6">
          <label for="gender" class="form-label">Gender</label>
          <select
            name="gender"
            id=""
            class="form-control"
            v-model="employees.gender"
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </fieldset>

    <fieldset class="form-control mb-5">
      <legend>Address</legend>
      <div class="row mb-3">
        <div class="col-sm-6">
          <label for="address" class="form-label">Address</label>
          <input
            type="text"
            name="address"
            id=""
            class="form-control"
            v-model="employees.address"
          />
        </div>

        <div class="col-sm-3">
          <label for="city" class="form-label">City</label>
          <input
            type="text"
            name="city"
            id=""
            class="form-control"
            v-model="employees.city"
          />
        </div>

        <div class="col-sm-3">
          <label for="state" class="form-label">State</label>
          <input
            type="text"
            name="state"
            id=""
            class="form-control"
            v-model="employees.state"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-6">
          <label for="county" class="form-label">County</label>
          <input
            type="text"
            name="county"
            id=""
            class="form-control"
            v-model="employees.county"
          />
        </div>
        <div class="col-sm-6">
          <label for="Zip" class="form-label">Zip</label>
          <input
            type="text"
            name="county"
            id=""
            class="form-control"
            v-model="employees.zip"
          />
        </div>
      </div>
    </fieldset>
    <fieldset class="form-control mb-5 ">
      <legend>Contact Information</legend>
      <div class="row mb-4">
        <div class="col-sm-6">
          <label for="mobile" class="form-label">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            id=""
            class="form-control"
            v-model="employees.phone"
          />
        </div>
        <div class="col-sm-6">
          <label for="home" class="form-label">Home Number</label>
          <input
            type="text"
            name="home"
            id=""
            class="form-control"
            v-model="employees.home"
          />
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-sm-6">
          <label for="pEmail" class="form-label">Primary Email</label>
          <input type="email" class="form-control" v-model="employees.pEmail" />
        </div>
        <div class="col-sm-6">
          <label for="sEmail" class="form-label">Secondary Email</label>
          <input type="email" class="form-control" v-model="employees.sEmail" />
        </div>
      </div>
    </fieldset>

    <fieldset class="form-control mb-5">
      <legend>Emergency Contact</legend>
      <label>Contact 1</label>
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="efName1" class="form-label">First Name</label
          ><input
            type="text"
            class="form-control"
            name="efname1"
            v-model="employees.eContact[0].fName"
          />
        </div>
        <div class="col-sm-4">
          <label for="elName" class="form-label">Last Name</label
          ><input
            type="text"
            class="form-control"
            name="elname1"
            v-model="employees.eContact[0].lName"
          />
        </div>
        <div class="col-sm-4">
          <label for="ephone" class="form-label">Phone</label
          ><input
            type="text"
            class="form-control"
            name="ephone1"
            v-model="employees.eContact[0].phone"
          />
        </div>
      </div>
      <label>Contact 2</label>
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="efName" class="form-label">First Name</label
          ><input
            type="text"
            class="form-control"
            name="efname2"
            v-model="employees.eContact[1].fName"
          />
        </div>
        <div class="col-sm-4">
          <label for="elName" class="form-label">Last Name</label
          ><input
            type="text"
            class="form-control"
            name="elname2"
            v-model="employees.eContact[1].lName"
          />
        </div>
        <div class="col-sm-4">
          <label for="ephone" class="form-label">Phone</label
          ><input
            type="text"
            class="form-control"
            name="ephone2"
            v-model="employees.eContact[1].phone"
          />
        </div>
      </div>
    </fieldset>
    <fieldset class="form-control mb-5">
      <legend>Employment Information</legend>
      <div class="row mb-4">
        <div class="col-sm-6">
          <label for="lEmployment" class="form-label"
            >Length of Employment</label
          ><input
            type="text"
            class="form-control"
            name="lEmployment"
            v-model="employees.lEmployment"
          />
        </div>
        <div class="col-sm-6">
          <label for="dept" class="form-label">Department</label>
          <select
            name="dept"
            id=""
            class="form-control"
            v-model="employees.dept"
          >
            <option value=""></option>
            <option value="Accounting">Accounting</option>
            <option value="Events">Events</option>
            <option value="Advising">Advising</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="jdesc" class="form-label">Job Description</label
          ><input
            type="text"
            class="form-control"
            name="jdesc"
            v-model="employees.jDesc"
          />
        </div>
        <div class="col-sm-4">
          <label for="hgrade" class="form-label"> Highest Grade</label
          ><input
            type="text"
            class="form-control"
            name="hGrade"
            v-model="employees.hGrade"
          />
        </div>
        <div class="col-sm-4">
          <label for="deg" class="form-label">Degree</label
          ><input
            type="text"
            class="form-control"
            name="degree"
            v-model="employees.degree"
          />
        </div>
      </div>
    </fieldset>
    <fieldset class="form-control mb-5">
      <legend>Languages</legend>
      <div class="row mb-4">
        <div class="col-sm-4">
          <label for="l1">Language 1</label>
          <input
            type="text"
            class="form-control"
            name="l1"
            v-model="employees.language[0]"
          />
        </div>
        <div class="col-sm-4">
          <label for="l2">Language 2</label>
          <input
            type="text"
            class="form-control"
            name="l2"
            v-model="employees.language[1]"
          />
        </div>
        <div class="col-sm-4">
          <label for="l3">Language 3</label>
          <input
            type="text"
            class="form-control"
            name="l3"
            v-model="employees.language[2]"
          />
        </div>
      </div>
    </fieldset>
    <button class="btn mb-5" id="create">Create</button>
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employees: {
        employeeID: "",
        firstName: "",
        lastName: "",
        birthday: "",
        SSN: "",
        dLicense: "",
        gender: "",
        race: "",
        hispanic: undefined,
        phone: "",
        home: "",
        pEmail: "",
        sEmail: "",
        address: "",
        city: "",
        state: "",
        county: "",
        zip: "",
        lEmployment: "",
        dept: "",
        jDesc: "",
        hGrade: "",
        degree: "",
        eContact: [{ fName: "", lName: "", phone: "" },{ fName: "", lName: "", phone: "" }],
        language: [],
       
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8080/employees/newemp";
      console.log(this.employees);
      axios
        .post(apiURL, this.employees)
        .then(() => {
          this.$router.push("/employees");
          this.employees = {
            employeeID: "",
            firstName: "",
            lastName: "",
            birthday: "",
            SSN: "",
            dLicense: "",
            gender: "",
            race: "",
            hispanic: undefined,
            phone: "",
            home: "",
            pEmail: "",
            sEmail: "",
            address: "",
            city: "",
            state: "",
            county: "",
            zip: "",
            lEmployment: "",
            dept: "",
            jDesc: "",
            hGrade: "",
            degree: "",
            eContact: [{ fName: "", lName: "", phone: "" },{ fName: "", lName: "", phone: "" }],
            language: [],
           
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 26px;
  text-align: center;
  margin-top: 80px;
}
form {
  margin-top: 50px;
}
#create {
  background-color: #a6a7a8;
}
#create:hover {
  background-color: #2e5902;
  color: white;
}
</style>
