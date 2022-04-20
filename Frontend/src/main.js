
import { createApp } from 'vue' //import creatApp from Vue
import App from './App.vue' //import root component from app.vue
import router from './router'

// import 'chartkick/highcharts'
import VueChartkick from 'vue-chartkick' 
import 'chartkick/chart.js'

// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App)

app.use(VueChartkick)

app.use(router)

app.mount('#app') //mount instance into hmtl
