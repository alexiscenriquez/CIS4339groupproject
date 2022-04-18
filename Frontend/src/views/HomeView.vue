<script>
// import child component
import HelloWorld from '../components/HelloWorld.vue'
// import Footer from '../components/footer.vue'

export default {
  // register child component
  components: {
    HelloWorld,
    //Footer
  },
  data() {
    return {
      msg: "Welcome to CLC!"
    }
  }
}
</script>

<template>
  <main>
    <div class="wrapper">
      
      <!-- <HelloWorld msg="You did it!" /> -->
      <!-- <HelloWorld :msg="msg" /> -->
      
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
