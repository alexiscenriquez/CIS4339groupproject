<template>
  <div>
    <fieldset class='form-control mb-5'>
      <legend>Services Provided by Ethnicity</legend>
    <!-- bar chart that shows services by ethnicity-->
    <bar-chart :data="graph"></bar-chart>
    <p></p>
    </fieldset>

    <fieldset class='form-control mb-5'>
      <legend>Services Provided by Gender</legend>
    <!-- pie chart that shows services by gender -->
    <pie-chart :data="graph2"></pie-chart>
    <p></p>
    </fieldset>

 <fieldset class='form-control mb-5'>
      <legend>Amount of Employees Working in Each Department</legend>
    <!-- bar chart that shows services by ethnicity-->
    <bar-chart :data="graph3"></bar-chart>
    <p></p>
    </fieldset>

  </div>
</template>

<script>
import axios from "axios"; 
//exports objects of graph data
export default {
    data() {
        return {
            graph:{}, 
            graph2:{},
            graph3:{},
          
        }
    },
    // api's to get graph before dom is mounted
    created() {
        let apiURL = `http://localhost:8080/reports/ethnicity`; 
        let apiUrl2 = `http://localhost:8080/reports/gender`;
        let apiURL3=`http://localhost:8080/reports/departments`;
        axios.get(apiURL).then((res) => {
            this.graph = res.data[0]; 
        })
        axios.get(apiUrl2).then((res)=>{
          this.graph2 = res.data[0]
        })
        axios.get(apiURL3).then((res)=>{
             this.graph3 = res.data[0]
        })
    }
}

</script>


