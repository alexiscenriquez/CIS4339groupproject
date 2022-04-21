<script>
// import child component
import AboutUs from '../components/AboutUs.vue'
import Footer from '../components/footer.vue'

export default {
  // register child component
  components: {
    AboutUs,
    Footer
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



<style >

</style>