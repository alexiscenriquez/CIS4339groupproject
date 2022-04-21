<template>
  <main>
    <h1 class="mb-5">
      {{ employees.firstName }} {{ employees.lastName }}{{ " #"
      }}{{ employees.employeeID }}
    </h1>
    <div class="wrapper mb-5">
      <td>
        <router-link
          :to="{ name: 'employees', params: { id: employees.employeeID } }"
          class="btn btn-secondary"
          >View All Employees</router-link
        >
      </td>
      <td>
        <router-link
          :to="{ name: 'edit-emp', params: { id: employees.employeeID } }"
          class="btn btn-secondary"
          >Edit Employee</router-link
        >
      </td>
      <td>
        <button
          @click.prevent="deleteEmp(employees.employeeID)"
          class="btn btn-danger"
        >
          Delete Employee
        </button>
      </td>
    </div>
    <div class="table1">
      <table class="table table-light caption-top">
        <caption>
          <strong>Client Information</strong>
        </caption>
        <tbody>
          <tr>
            <th>Employee ID</th>
            <td>{{ employees.employeeID }}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{{ employees.firstName }}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{{ employees.lastName }}</td>
          </tr>
          <tr>
            <th>DOB</th>
            <td>{{ employees.birthday.slice(0,10)}}</td>
          </tr>
          <tr>
            <th>SSN</th>
            <td>{{ employees.SSN }}</td>
          </tr>
          <tr>
            <th>Drivers license</th>
            <td>{{ employees.dLicense }}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{{ employees.dept }}</td>
          </tr>
          <tr>
            <th>Organization</th>
            <td>{{ employees.org_name }}</td>
          </tr>
          <tr>
            <th>Job Title</th>
            <td>{{ employees.jdesc }}</td>
          </tr>
          <tr>
            <th>Mobile Number</th>
            <td>{{ employees.phone }}</td>
          </tr>
          <tr>
            <th>Home Number</th>
            <td>{{ employees.home }}</td>
          </tr>
          <tr>
            <th>Primary Email</th>
            <td>{{ employees.pEmail }}</td>
          </tr>
          <tr>
            <th>Secondary Email</th>
            <td>{{ employees.sEmail }}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{{ employees.address }}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{{ employees.city }}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{{ employees.state }}</td>
          </tr>
          <tr>
            <th>County</th>
            <td>{{ employees.county }}</td>
          </tr>
          <tr>
            <th>Zip Code</th>
            <td>{{ employees.zip }}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{{ employees.gender }}</td>
          </tr>
          <tr>
            <th>Race</th>
            <td>{{ employees.race }}</td>
          </tr>
          <tr>
            <th>Hispanic</th>
            <td>{{ employees.hispanic ? "Yes" : "No" }}</td>
          </tr>

          <tr>
            <th>Language(s)</th>
            <td>{{ lang }}</td>
          </tr>
          <tr>
            <th>Highest Grade</th>
            <td>{{ employees.hGrade }}</td>
          </tr>
          <tr>
            <th>Degree</th>
            <td>{{ employees.degree }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-light table-sm caption-top">
        <caption>
          <strong>Emergency Contacts</strong>
        </caption>

        <thead class="thead-dark">
          <th>Name</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          <tr
            v-for="(contacts, index) in employees.eContact"
            :index="index"
            :key="index"
          >
            <td>{{ contacts.fName }} {{ contacts.lName }}</td>
            <td>{{ contacts.phone }}</td>
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      employees: {},
      lang: "",
    };
  },
  created() {
    let apiURL = `http://localhost:8080/employees/find/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.employees = res.data[0];
        this.lang = this.employees.language.join(",");
        console.log("line 167", this.lang);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEmp(id) {
      let apiURL = `http://localhost:8080/employees/del/${id}`;

      if (window.confirm("Are you sure you want to delete?")) {
        axios
          .delete(apiURL)

          .then(() => {
            this.$router.push("/employees");
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
