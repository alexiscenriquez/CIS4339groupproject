<template>
  <div>
    <h1>Edit Employee{{ " #" }}{{ employees.employeeID }}</h1>
                <!-- display current date and allow changes to all current fields-->
    <form @submit.prevent="handleUpdateForm" novalidate>
      <fieldset class="form-control mb-5">
        <legend>Personal Information</legend>

        <div class="row mb-4">
          <div class="col">
            <label for="fName" class="form-label">*First Name</label>
            <input
              v-model="employees.firstName"
              type="text"
              class="form-control"
              name="fName"
              aria-label="First name"
              required
            />
          </div>
          <div class="col">
            <label for="lName" class="form-label">*Last Name</label>
            <input
              v-model="employees.lastName"
              type="text"
              class="form-control"
              name="lName"
              aria-label="Last name"
              required
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
              v-model="date"
              required
            />
          </div>
          <div class="col-sm-4">
            <label for="ssn" class="form-label">*Social Security</label>
            <input
              type="text"
              class="form-control"
              name="ssn"
              v-model="employees.SSN"
              required
              placeholder="XXX-XX-XXXX"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              9 digit phone number should be entered with dashes
            </small>
          </div>
          <div class="col-sm-4">
            <label for="dl" class="form-label">*Drivers License</label>
            <input
              type="text"
              class="form-control"
              name="dl"
              v-model="employees.dLicense"
              placeholder="XXXXXXXX"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              8 digit number
            </small>
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
      <fieldset class="form-control mb-5">
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
              placeholder="XXX-XXX-XXXX"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              9 digit phone number should be entered with dashes
            </small>
          </div>
          <div class="col-sm-6">
            <label for="home" class="form-label">Home Number</label>
            <input
              type="text"
              name="home"
              id=""
              class="form-control"
              v-model="employees.home"
              placeholder="XXX-XXX-XXXX"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              9 digit phone number should be entered with dashes
            </small>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-6">
            <label for="pEmail" class="form-label">Primary Email</label>
            <input
              type="email"
              class="form-control"
              v-model="employees.pEmail"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              example@email.com
            </small>
          </div>
          <div class="col-sm-6">
            <label for="sEmail" class="form-label">Secondary Email</label>
            <input
              type="email"
              class="form-control"
              v-model="employees.sEmail"
            />
            <small id="phoneHelpBlock" class="form-text text-muted">
              example@email.com
            </small>
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
              placeholder="XXX-XXX-XXXX"
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
              placeholder="XXX-XXX-XXXX"
            />
          </div>
        </div>
      </fieldset>
      <fieldset class="form-control mb-5">
        <legend>Employment Information</legend>
        <div class="row mb-4">
          <div class="col-sm-4">
            <label for="lEmployment" class="form-label"
              >Length of Employment</label
            ><input
              type="text"
              class="form-control"
              name="lEmployment"
              v-model="employees.lEmployment"
            />
          </div>
          <div class="col-sm-4">
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

          <div class="col-sm-4">
            <label for="lEmployment" class="form-label"
              >Current:{{ employees.org_name }}</label
            >
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="two"
              required
            >
              <option value="" selected disabled>Choose an Organization</option>
              <!-- display organizations list, store in array -->
              <option
                v-for="x in list"
                :value="[x.org_name, x.orgid]"
                :key="x.orgid"
              >
                {{ x.orgid }}{{ " - " }}{{ x.org_name }}
              </option>
            </select>
            <p>Select current or change organization</p>
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
      <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
      <button class="btn mb-5 create">Update</button>
    </form>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
//exports arrays, objects and variables
export default {
  components: {
    Footer,
  },
  data() {
    return {
      errors: [],
      employees: {},
      date: "",
      list: [],
      two: [],
      cur_host: "",
      cur_host_num: "",
    };
  },
  //grab employee and organization data before mouting dom
  created() {
    //get single emp information
    let apiURL = `http://localhost:8080/employees/find/${this.$route.params.id}`;

    axios
      .get(apiURL)
      .then((res) => {
        this.employees = res.data[0]; //store emp data
        this.date = res.data[0].birthday.slice(0, 10);
        this.cur_host = res.data[0].org_name; //store current host name
        this.cur_host_num = res.data[0].organizations.orgid; //store host number
      })
      .catch((error) => {
        console.log(error);
      });

    //get organization list
    let apiURL2 = `http://localhost:8080/organizations`;
    axios
      .get(apiURL2)
      .then((res) => {
        this.list = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleUpdateForm() {
      //custom validations before updating employee data
      this.employees.org_name = this.two[0];
      this.errors = [];
      if (!this.employees.org_name)
        this.errors.push("Organization is Required");
      if (!this.employees.firstName) this.errors.push("First Name Required");

      if (!this.employees.lastName) this.errors.push("Last Name is Required");

      if (!this.employees.SSN) this.errors.push("SSN is Required");

      if (!this.employees.phone && this.employees.home.length !== 0)
        this.errors.push("Phone is Required");

      const regex = new RegExp("^\\d{3}-\\d{3}-\\d{4}$");
      const ssnregex = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;

      const emailregex =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      if (
        !regex.test(this.employees.phone) &&
        this.employees.phone.length !== 0
      )
        this.errors.push("Please use correct phone number format.");

      if (!regex.test(this.employees.home) && this.employees.home.length !== 0)
        this.errors.push("Please use correct phone number format.");

      if (
        !emailregex.test(this.employees.pEmail) &&
        this.employees.pEmail.length !== 0
      )
        this.errors.push("Please enter a valid email.");

      if (!ssnregex.test(this.employees.SSN))
        this.errors.push("Please enter a valid ssn.");

      if (this.errors.length === 0) {
        //now able to proceed if all requirements were fulfilled
        this.employees.birthday = this.date; //add date to event object
        let data = { id: this.$route.params.id }; //add empid to obj
        this.employees.org_name = this.two[0]; //taking the second element as the organization's name
        this.employees.organizations.orgid = parseInt(this.two[1]); //add orgid to event object

        //update employee in employees collection
        let apiURL = `http://localhost:8080/employees/update/${this.$route.params.id}`;

        axios
          .put(apiURL, this.employees)
          .then((res) => {
            console.log(res);
            this.$router.push("/employees");
          })
          .catch((error) => {
            console.log(error);
          });

        //if no changes to host
        if (this.cur_host == this.two[0]) {
          this.$router.push("/employees");
        } else {
          //delete current organization from employee
          let api3 = `http://localhost:8080/organizations/del-emp/${this.cur_host_num}`;
          axios
            .post(api3, data)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });

          //add employee to organization
          let api4 = `http://localhost:8080/organizations/add-emp/${this.two[1]}`;
          axios
            .post(api4, data)
            .then((res) => {
              this.$router.push("/employees");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/app.css";
</style>
