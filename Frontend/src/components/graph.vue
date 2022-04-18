<template>
  <div class="mb-5">
    <!-- Using pie-chart tag to display pie chart on /reports/graph -->
    <!-- 'graph' represents json data from backend from route /reports/graph-->
    <bar-chart :data="graph"></bar-chart>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
    data() {
        return {
            graph:{}, 
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

        axios.get(apiURL).then((res) => {
            this.graph = res.data[0]; 
        })
    }
}
</script>

