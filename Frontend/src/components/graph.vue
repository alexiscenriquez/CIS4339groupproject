<template>
  <div>
    <fieldset class='form-control mb-5'>
      <legend>Services based on Ethnicity</legend>
    <!-- Using pie-chart tag to display pie chart on /reports/graph -->
    <!-- 'graph' represents json data from backend from route /reports/graph-->
    <bar-chart :data="graph"></bar-chart>
    <p></p>
    </fieldset>

    <fieldset class='form-control mb-5'>
      <legend>Services based on Gender</legend>
    <!-- Using pie-chart tag to display pie chart on /reports/graph -->
    <!-- 'graph' represents json data from backend from route /reports/graph-->
    <pie-chart :data="graph2"></pie-chart>
    <p></p>
    </fieldset>

  </div>
</template>

<script>
import axios from "axios"; 
export default {
    data() {
        return {
            graph:{}, 
            graph2:{},
            chartData:{
            'White':2,
            'Black/African-American':5,
            'Americn indian or Alaska Native':4,
            'Asian':5,
            'Native Hawaiin or Other Pacific Islaner':6,
            'Other':10
      },
        }
    },
    created() {
        let apiURL = `http://localhost:8080/reports/ethnicity`; 
        let apiUrl2 = `http://localhost:8080/reports/gender`;

        axios.get(apiURL).then((res) => {
            this.graph = res.data[0]; 
        })
        axios.get(apiUrl2).then((res)=>{
          this.graph2 = res.data[0]
        })
    }
}

</script>


