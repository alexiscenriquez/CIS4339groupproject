<template>
  <main>
    <h1 class="text-center mb-5">Employees</h1>
    <div class="table-responsive">
      <table class="table table-light">
        <thead class="table-light">
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>SSN</th>
            <th>Drivers License</th>
            <th>Gender</th>
            <th>Race</th>
            <th>Hispanic</th>
            <th>Phone</th>
            <th>Home</th>
            <th>Emergency Contacts</th>
            <th>Primary Email</th>
            <th>Secondary Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>County</th>
            <th>Zip</th>
            <th>Length of Employment</th>
            <th>Department</th>
            <th>Job Description</th>
            <th>Highest Grade</th>
            <th>Degree</th>
            <th>Languages</th>
            <th colspan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in Employees" :key="employee._id">
            <td>{{ employee.employeeID }}</td>
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.lastName }}</td>
            <td>{{ employee.birthday }}</td>
            <td>{{ employee.SSN }}</td>
            <td>{{ employee.dLicense }}</td>
            <td>{{ employee.gender }}</td>
            <td>{{ employee.race }}</td>
            <td>{{ employee.hispanic }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.home }}</td>
            <td>{{ employee.eContact }}</td>
            <td>{{ employee.pEmail }}</td>
            <td>{{ employee.sEmail }}</td>
            <td>{{ employee.address }}</td>
            <td>{{ employee.city }}</td>
            <td>{{ employee.state }}</td>
            <td>{{ employee.county }}</td>
            <td>{{ employee.zip }}</td>
            <td>{{ employee.lEmployment }}</td>
            <td>{{ employee.dept }}</td>
            <td>{{ employee.jDesc }}</td>
            <td>{{ employee.hGrade }}</td>
            <td>{{ employee.degree }}</td>
            <td>{{ employee.language.join(", ") }}</td>
            <td>
              <router-link :to="{name:'events-clients',params:{id:employee.employeeID}}" class="btn btn-success">Events/Clients</router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'edit-emp', params: { id: employee.employeeID } }"
                class="btn btn-success"
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
  </main>
</template>

<script>
import axios from "axios";

export default {
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
.btn {
  width: fit-content;

}
th {
  text-align: center;
}
.table-light tr:nth-of-type(2n) td {
  background-color: rgba(0, 0, 0, 0.137);
}

</style>
