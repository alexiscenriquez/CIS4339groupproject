<script>
import axios from "axios";
export default {
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
  created() {
    let apiURL = `http://localhost:8080/employees/employee-clients-events/${this.$route.params.id}`;
    let apiURL2 = `http://localhost:8080/organizations`;
    axios
      .get(apiURL)
      .then((res) => {
        this.employee = res.data[0];
        this.client = res.data[0].clients;
        this.event = res.data[0].events;
        this.organization = res.data[0].organizations;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(apiURL2)
      .then((res) => {
        this.fullorganizations = res.data;
        console.log(this.fullorganizations);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addClient() {
      let cid = this.new_cid.id;
      let data = {
        id: this.$route.params.id,
      };
      let apiURL = `http://localhost:8080/employees/add-client/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/clients/add-emp/${cid}`;
      axios
        .post(apiURL, this.new_cid)
        .then(() => {
          this.$router.push("/employees");
          this.new_cid = {
            id: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post(apiURL2, data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    delClient(clientID) {
      let data = {
        id: clientID,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-client/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/clients/del-emp/${clientID}`;
      let indexOfArrayItem = this.client.findIndex((i) => i.cid === clientID);
      if (window.confirm("Are you sure?")) {
        axios
          .post(apiURL, data)
          .then(() => {
            this.client.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });

        axios
          .post(apiURL2, data2)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    addEvent() {
      let eid = this.new_evid.id;
      let apiURL = `http://localhost:8080/employees/add-event/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/event/add-employee/${eid}`;
      axios
        .post(apiURL, this.new_evid)
        .then(() => {
          this.$router.push("/employees");
          this.new_evid = {
            id: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post(apiURL2, this.$route.params.id)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },

    delEvent(id) {
      let data = {
        id: id,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-event/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/events/del-employee/${id}`;
      let indexOfArrayItem = this.event.findIndex((i) => i.evid === id);
      if (window.confirm("Are you sure?")) {
        axios
          .post(apiURL, data)
          .then(() => {
            this.$router.push("/employees");
            this.event.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
        axios
          .post(apiURL2, data2)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    addOrg() {
      let orgid = this.new_orgid.id;
      let data = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/add-org/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/organizations/add-emp/${orgid}`;

      axios
        .post(apiURL, this.new_orgid)
        .then(() => {
          this.$router.push("/employees");
          this.new_orgid = {
            id: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .post(apiURL2, data)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    delOrg(id) {
      let data = {
        id: id,
      };
      let data2 = { id: this.$route.params.id };
      let apiURL = `http://localhost:8080/employees/del-org/${this.$route.params.id}`;
      let apiURL2 = `http://localhost:8080/organizations/del-emp/${id}`;
      if (window.confirm("Are you sure?")) {
        axios
          .post(apiURL, data)
          .then(() => {
            this.$router.push("/employees");
            this.organization.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
        axios
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
    <h1 class="text-center mb-5 text-md">Employee Affiliations</h1>
<div id="forms">
  
      <form @submit.prevent="addClient" class="mb-5 col-sm-3 view-form mr-4">
        <fieldset class="form-control">
          <legend class="mb-3">Clients</legend>
          <div>
            <label class="form-label">Enter the Client ID</label>
            <input
              type="number"
              class="form-control mb-3"
              v-model="new_cid.id"
              required
            />
          </div>
          <button class="btn btn-success">Add Client</button>
        </fieldset>
      </form>
  
      <form @submit.prevent="addEvent" class="mb-5 col-sm-3 view-form">
        <fieldset class="form-control">
          <legend class="mb-3">Events</legend>
          <div>
            <label for="" class="form-label">Enter the Event ID</label>
            <input type="text" class="form-control mb-3" v-model="new_evid.id" />
            <button class="btn btn-success">Add Event</button>
          </div>
        </fieldset>
      </form>
  
      <form @submit.prevent="addOrg" class="mb-5 col-sm-3 view-form">
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
      </form>

</div>
<h2>Clients</h2>
    <div class="table-responsive mb-5">
      <table class="table table-light">
        <thead class="table-dark">
          <tr>
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in client" :key="c.cid">
            <td>{{ c.cid }}</td>
            <td>{{ c.first_name }}</td>
            <td>{{ c.last_name }}</td>
            <td>
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
          <tr v-for="e in event" :key="e.evid">
            <td>{{ e.evid }}</td>
            <td>{{ e.ev_name }}</td>
            <td>{{ e.ev_host }}</td>
            <td>
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
          <tr v-for="o in organization" :key="o.orgid">
            <td>{{ o.orgid }}</td>
            <td>{{ o.org_name }}</td>

            <td>
              <button @click.prevent="delOrg(o.orgid)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<style scoped>
@import "../../assets/app.css";
</style>
