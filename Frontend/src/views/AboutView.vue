<script>
// import child component
import AboutUs from '../components/AboutUs.vue'
// import Footer from '../components/footer.vue'

export default {
  // register child component
  components: {
    AboutUs,
    //Footer
  },
  data() {
    return {
      msg: "Welcome to the About page!"
    }
  }
}
</script>

<template>
  <main>
    <div class="wrapper">
      
      <!-- <HelloWorld msg="You did it!" /> -->
      <AboutUs :msg="msg" />
      
    </div>
    <!-- <Footer /> -->
  </main>
</template>


<!--<style>
/* default styling */
@import "../assets/base.css";
</style>
-->
<style >
  body {
   
    background: url('../assets/one.svg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;

    /* background-image: url('../assets/seven.svg');
    height: 100vh; */
  }
/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color:#fff; }*/
</style>