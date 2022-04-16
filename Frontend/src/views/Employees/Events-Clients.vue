<script>
import axios from "axios";
export default {
  data() {
    return {
      employee: [],
      client: [],
      event: [],
      new_cid: { id: "" },
      new_evid: { id: "" },
      active: false,
    };
  },
  created() {
    let apiURL = `http://localhost:8080/employees/employee-clients-events/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.employee = res.data[0];
        this.client = res.data[0].clients;
        this.event = res.data[0].events;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addClient() {
      let apiURL = `http://localhost:8080/employees/add-client/${this.$route.params.id}`;
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
    },
    delClient(clientID) {
      let data = {
        id: clientID,
      };
      let apiURL = `http://localhost:8080/employees/del-client/${this.$route.params.id}`;
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
      }
    },
    // addEvent(){
    // let apiURL = `http://localhost:8080/employees/add-event/${this.$route.params.id}`;
    //   axios.post(apiURL,this.new_evid).then(()=>{

    //     this.new_evid={
    //       id:''
    //     }
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    // }
  },
};
</script>
<template>
  <main>
    <h1 class="text-center mb-5 text-md">Employee Clients and Events</h1>

    <form @submit.prevent="addClient" class="mb-5 col-sm-6">
      <fieldset class="form-control">
        <legend class="mb-3">Clients</legend>
        <div class="col-sm-3">
          <label class="form-label">Enter the Client ID</label>
          <input
            type="number"
            class="form-control mb-3"
            v-model="new_cid.id"
            required
          />
        </div>
        <button class="btn btn-primary">Add Client</button>
      </fieldset>
    </form>
    <div class="table-responsive mb-5">
      <table class="table table-light">
        <thead class="table-light">
          <tr>
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
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

    <form action="">
      <fieldset class="form-control">
        <legend class="mb-3">Events</legend>
        <div class="col-sm-3">
          <label for="" class="form-label">Enter the Event ID</label>
          <input type="text" class="form-control mb-3" />
          <button class="btn btn-primary">Add Event</button>
        </div>
      </fieldset>
    </form>
  </main>
</template>
<style scoped>
h1 {
  font-size: 26px;
}
h2 {
  font-size: 22px;
}
</style>
