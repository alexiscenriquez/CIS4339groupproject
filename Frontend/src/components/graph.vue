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
      <legend>Services Provided by Veteran Status</legend>
    <!-- column chart that shows servicing by Veteran Status -->
    <column-chart :data="graph69 "></column-chart>
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
            graph69:{},
            chartData:{
            'White':2,
            'Black/African-American':5,
            'Americn indian or Alaska Native':4,
            'Asian':5,
            'Native Hawaiin or Other Pacific Islaner':6,
            'Other':10
      },
            graph3:{},
          
        }
    },
    // api's to get graph before dom is mounted
    created() {
        let apiURL = `http://localhost:8080/reports/ethnicity`; 
        let apiUrl2 = `http://localhost:8080/reports/gender`;
        let apiURL69 = `http://localhost:8080/reports/veteran`
        let apiURL3=`http://localhost:8080/reports/departments`;
        axios.get(apiURL).then((res) => {
            this.graph = res.data[0]; 
        })
        axios.get(apiUrl2).then((res)=>{
          this.graph2 = res.data[0]
        })
        axios.get(apiURL69).then((res)=>{
          this.graph69 = res.data[0]
        })
        axios.get(apiURL3).then((res)=>{
             this.graph3 = res.data[0]
        })
    }
}

</script>


