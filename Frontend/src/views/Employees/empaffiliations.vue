<script>
import Footer from "../../components/footer.vue";
import axios from "axios";
//exports arrays and objects
export default {
  components: {
    Footer,
  },
  data() {
    return {
      employee: [],
      client: [],
      event: [],
      organization: [],
      fullorganizations: [],
      new_cid: { id: "" },
      new_evid: { id: "" },
      new_orgid: { id: "" },
      active: false,
    };
  },
  //grab affiliates data before mounting dom
  created() {
    //get affiliates data from employee
    let apiURL = `http://localhost:8080/employees/employee-clients-events/${this.$route.params.id}`;
    //get organization data from employee
    let apiURL2 = `http://localhost:8080/organizations`;
    axios //GET Method is used on the first api
      .get(apiURL)
      .then((res) => {
        
        this.employee = res.data[0];
         //Used to store data from the clients table into the newly created client array
        this.client = res.data[0].clients;
         //Used to store data from the events table into the newly created event array
        this.event = res.data[0].events;
         //Used to store data from the organizations table into the newly created organizations array
        this.organization = res.data[0].organizations;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(apiURL2)  //GET method is used on the second api
      .then((res) => {
         //Used to store ALL data into fullorganizations array
        this.fullorganizations = res.data;
        console.log(this.fullorganizations);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //define functions
  methods: {
    //add client to employee collection and employee to client collections
    //The ID variable holds the selected "id" of the client and the function is performed
    addClient() {
      //variable for storing newly created "new_cid" var
      let cid = this.new_cid.id;
      //Variable that stores a specific id
      let data = {
        id: this.$route.params.id,
      };
      //Var that stores the employee side method of adding a client
      let apiURL = `http://localhost:8080/employees/add-client/${this.$route.params.id}`;
      //Var that stores the client side method of adding an employee
      let apiURL2 = `http://localhost:8080/clients/add-emp/${cid}`;
      //POST method used on the first api
      axios
        .post(apiURL, this.new_cid)
        .then(() => {
                        //POST method used on the vars
          this.$router.push("/employees");
          this.new_cid = {
            id: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
  //POST method used on the second api
      axios
        .post(apiURL2, data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    //delete client from employee collection and employee from client collections
    delClient(clientID) {
      let data = {
        id: clientID,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-client/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/clients/del-emp/${clientID}`;
      let indexOfArrayItem = this.client.findIndex((i) => i.cid === clientID);  //Var that holds the method of finding the client id "cid"
      if (window.confirm("Are you sure?")) {   //remove only if user agrees
        axios   //POST method used on the first api
          .post(apiURL, data)
          .then(() => {
            this.client.splice(indexOfArrayItem, 1); //Splicing out of one specific item from the indexOfArrayItem var
          })
          .catch((error) => {
            console.log(error);
          });

        axios   //POST method used on the second api
          .post(apiURL2, data2)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    //add event to employee collection and employee to event collection
    addEvent() {
      let eid = this.new_evid.id;
      let apiURL = `http://localhost:8080/employees/add-event/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/events/add-employee/${eid}`;
      let data = {
        id: this.$route.params.id,
      };
      axios   //POST method used on the first api
        .post(apiURL, this.new_evid)
        .then(() => {
          this.$router.push("/employees"); //changing the view back to employees view page
          this.new_evid = {
            id: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      axios   //POST method used on the second api
        .post(apiURL2, data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    //delete event from employee collection and employee from event collection
    delEvent(id) {
      let data = {
        id: id,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-event/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/events/del-employee/${id}`;
      let indexOfArrayItem = this.event.findIndex((i) => i.evid === id);
      if (window.confirm("Are you sure?")) {   //remove only if user agrees
        axios
          .post(apiURL, data)   //POST method used on the first api
          .then(() => {
            this.$router.push("/employees");
            this.event.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
        axios   //POST method used on the second api
          .post(apiURL2, data2)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },

    //add organization to employee collection and employee to organization collection
    addOrg() {
      let orgid = this.new_orgid.id;
      let data = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/add-org/${this.$route.params.id}`;
      axios   //POST method used on the first api
        .post(apiURL, this.new_orgid)
        .then(() => {
          this.$router.push("/employees");
          this.new_orgid = { id: "" };
        })
        .catch((error) => {
          console.log(error);
        });

      let apiURL2 = `http://localhost:8080/organizations/add-emp/${orgid}`;
      axios   //POST method used on the second api
        .post(apiURL2, data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    //delete organization from employee collection and employee from organization collections
    delOrg(id) {
      let data = {
        id: id,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-org/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/organizations/del-emp/${id}`;

      //remove only if user agrees
      if (window.confirm("Are you sure?")) {
        //remove org from employee collection
        axios
          .post(apiURL, data)
          .then(() => {
            this.$router.push("/employees");
            this.organization.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
        //remove employee from the org collection
        axios   //POST method used on the second api
          .post(apiURL2, data2)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<template>
  <main>
    <!--Display events, organization and clients affiliated with the employee and allow additions/deletions-->
    <h1 class="text-center mb-5 text-md">
      {{ employee.firstName }} {{ employee.lastName }}'s Affiliations
    </h1>
    <div id="forms">
      <!--performs the function "addClient" upon the button being clicked-->
      <form @submit.prevent="addClient" class="mb-5 col-sm-3 view-form mr-4">
        <fieldset class="form-control">
          <legend class="mb-3">Clients</legend>
          <div>
            <label class="form-label">Enter the Client ID</label>
            <!--input field that grabs the client's ID to pass into the API-->
            <input
              type="number"
              class="form-control mb-3"
              v-model="new_cid.id"
              required
            />
          </div>
          <!--Button that triggers the function addClient upon click-->
          <button class="btn btn-success">Add Client</button>
        </fieldset>
      </form>

      <!--performs the function "addEvent" upon the button being clicked-->
      <form @submit.prevent="addEvent" class="mb-5 col-sm-3 view-form">
        <fieldset class="form-control">
          <legend class="mb-3">Events</legend>
          <div>
            <label for="" class="form-label">Enter the Event ID</label>
            <input
              type="text"
              class="form-control mb-3"
              v-model="new_evid.id"
            />
            <!--Button that triggers the function addEvent upon click-->
            <button class="btn btn-success">Add Event</button>
          </div>
        </fieldset>
      </form>

      <!-- <form @submit.prevent="addOrg" class="mb-5 col-sm-3 view-form">
        <fieldset class="form-control">
          <legend class="mb-3">Organization</legend>
          <div>
            <label for="" class="form-label">Choose An Organization</label>
            <select v-model="new_orgid.id" class="form-control mb-3">
              <option value="" selected disabled></option>
              <option
                v-for="x in fullorganizations"
                :value="x.orgid"
                :key="x.orgid"
              >
                {{ x.orgid }}{{ " - " }}{{ x.org_name }}
              </option>
            </select>
            <button class="btn btn-success">Add Organization</button>
          </div>
        </fieldset>
      </form> -->
    </div>
    <h2>Clients</h2>
    <div class="table-responsive mb-5">
      <table class="table table-light">
        <thead class="table-dark">
          <tr>
            <!--Table Headings-->
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- V-for acts as a for loop and displays all clients in the clients array that are linked to the employee-->
          <tr v-for="c in client" :key="c.cid">
            <td>{{ c.cid }}</td>
            <td>{{ c.first_name }}</td>
            <td>{{ c.last_name }}</td>
            <td>
              <!-- Button to remove the client from the employee -->
              <button @click.prevent="delClient(c.cid)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Events</h2>
    <div class="table-responsive mb-5">
      <table class="table table-light">
        <thead class="table-dark">
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event Host</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- V-for acts as a for loop and displays all events in the events array that are linked to the employee-->
          <tr v-for="e in event" :key="e.evid">
            <td>{{ e.evid }}</td>
            <td>{{ e.ev_name }}</td>
            <td>{{ e.ev_host }}</td>
            <td>
              <!-- Button to remove the event from the employee -->
              <button @click.prevent="delEvent(e.evid)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Organizations</h2>
    <div class="table-responsive mb-3">
      <table class="table table-light">
        <thead class="table-dark">
          <tr>
            <th>Organization ID</th>
            <th>Organization Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- V-for acts as a for loop and displays all organizations in the organizations array that are linked to the employee-->
          <tr v-for="o in organization" :key="o.orgid">
            <td>{{ o.orgid }}</td>
            <td>{{ o.org_name }}</td>

            <td>
              <!-- Button to remove the organization from the employee -->
              <button @click.prevent="delOrg(o.orgid)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </main>
</template>
<style scoped>
@import "../../assets/app.css";
</style>
