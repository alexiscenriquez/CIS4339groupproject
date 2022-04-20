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

  <style scoped>
 @import "../assets/app.css";
</style>
