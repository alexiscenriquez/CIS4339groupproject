<template>
  <main>
    <h1 class="text-center mb-5">All Employees</h1>

 <router-link class="btn btn-secondary" to="/new-emp">Create new employee</router-link>
    <div class="table-responsive">
      <table class="table table-light">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
       
            <th>Phone</th>
           
   
         
            <th>Department</th>
          
           
            <th colspan="4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in Employees" :key="employee._id">
            <td>{{ employee.employeeID }}</td>
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.lastName }}</td>
           
     
         
            <td>{{ employee.phone }}</td>
         
           
          
           
            <td>{{ employee.dept }}</td>
         
        <td>
          <router-link :to="{name:'seemore-emp',params:{id:employee.employeeID}}" class="btn btn-secondary">See More</router-link>
        </td>
            <td>
              <router-link :to="{name:'events-clients',params:{id:employee.employeeID}}" class="btn btn-secondary">Affiliations</router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'edit-emp', params: { id: employee.employeeID } }"
                class="btn btn-secondary"
              >
                Edit
              </router-link>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click.prevent="deleteEmp(employee.employeeID)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </main>
</template>

<script>
import axios from "axios";
import Footer from '../../components/footer.vue'

export default {
  components:{
            Footer
        },
  data() {
    return {
      Employees: [],
    };
  },
  created() {
    let apiURL = "http://localhost:8080/employees/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Employees = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEmp(id) {
      let apiURL = `http://localhost:8080/employees/del/${id}`;
      let indexOfArrayItem = this.Employees.findIndex(
        (i) => i.employeeID === id
      );

      if (window.confirm("Are you sure you want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Employees.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style scoped>
 @import "../../assets/app.css";
</style>
