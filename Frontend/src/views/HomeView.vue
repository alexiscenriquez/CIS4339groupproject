<script>
// import child component
import HelloWorld from "../components/HelloWorld.vue";
// import Footer from '../components/footer.vue'

export default {
  // register child component
  components: {
    HelloWorld,
    //Footer
  },
  data() {
    return {
      msg: "Welcome to our CIS 4339 project!",
    };
  },
};
</script>

<template>
  <main>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <HelloWorld :msg="msg" />
    </div>
    <!-- <Footer /> -->
  </main>
</template>

<!--<style>
/* default styling */
@import "../assets/base.css";
</style>
-->


  <style scoped>
 @import "../assets/app.css";
/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color:#fff; }*/
</style>
