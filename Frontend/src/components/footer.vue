<script>
    export default {
        
    }
</script>

<template>
    <!-- Remove the container if you want to extend the Footer to full width. -->
    <!-- <div class="container my-5"> -->
<div>
  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white"
          style="background-color: #1c2331"
          >
    <!-- Section: Social media -->
    <section
             class="d-flex justify-content-between p-4"
             style="background-color: #6351ce"
             >
      <!-- Left -->
      <div class="me-5">
        <span>Designed by GTA Architects</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="text-white me-4">
          <img
              alt="GTA logo"
              src="../assets/gta.png"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
        </a>
        
      </div> 
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold"></h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <a href=""><div>
        <a href="/" class="text-white me-4">
          <img
              alt="CLC logo"
              src="../assets/clcenter.png"
              width="240"
              height="240"
              class="d-inline-block align-text-top"
            />
        </a>
        
      </div></a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!"><router-link class="text-white" to="/services">Services</router-link></a>
            </p>
            <p>
              <a href="#!"><router-link class="text-white" to="/events">Events</router-link></a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#"><router-link class="text-white" to="/employees">Employees</router-link></a>
            </p>
            <p>
              <a href="#!"> <router-link class="text-white" to="/clients">Clients</router-link></a>
            </p>
            <p>
              <a href="#" ><router-link class="text-white" to="/volunteers">Volunteers</router-link></a>
            </p>
            <p>
              <a href="#!" class="text-white">About</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i>PO BOX #345 Houston, TX 77204, US</p>
            <p><i class="fas fa-envelope mr-3"></i> clc@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> 281-545-3839</p>
            <p><i class="fas fa-print mr-3"></i>832-332-3532</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2022 Copyright:
      <a class="text-white" href="#"
         >GTA Architects</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- </div> -->
<!-- End of .container -->
</template>

<style>
footer {
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  background-color: #333;
  color:#fff;
} 
</style>