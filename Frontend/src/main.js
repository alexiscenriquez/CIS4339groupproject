//import creatApp from Vue
import { createApp } from 'vue'
//import root component from app.vue
import App from './App.vue'
//
import router from './router'
import VueChartkick from 'vue-chartkick'
// import 'chartkick/highcharts'
import 'chartkick/chart.js'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)

app.use(VueChartkick)

app.use(router)
//mount instance into hmtl
app.mount('#app')
