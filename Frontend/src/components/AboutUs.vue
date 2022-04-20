<script>
import axios from 'axios'
import Footer from '../components/footer.vue'
//exports objects
export default {
  props: {
    msg: {
      type: String,
      required: true
  }, 
  },
  components:{
            Footer
        },
}
</script>

<template>
<fieldset class="form-control mb-5">
<div class="w3-content" style="max-width:1100px">
<div class="w3-row w3-padding-64" id="about">
    <div class="w3-col m6 w3-padding-large w3-hide-small">
     <img src="../assets/gta.png" class="w3-round w3-image w3-opacity-min" alt="GTA" width="250" height="250">
    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About GTA</h1><br>
      <h5 class="w3-center">GTA Architects Purpose</h5>
      <p class="w3-large"><strong>GTA architects</strong> is a company that acts as an intermediary between clients and organizations such as, Community Family Center and Bread of Life. We take
        pride in being the more convenient option that consolidates the functionality between two said organizations </p>
        <h5 class="w3-center">Community Family Centers Purpose</h5>
      <p class="w3-large w3-text-grey w3-hide-medium"><strong>Community Family Centers</strong> is a multi-service non-profit organization that has offered a wide range of bilingual services to families within Houston’s impoverished Greater East End for over 45 years. Their goal and mission is to equip families with the tools they need to become self-sufficient members of the community. Through four core programs: Adult Education, Family Support Services, Early Childhood - Los Niños Early Childhood Montessori Program and Youth Services they strive to help families break the cycle of poverty and illiteracy so that they can move toward self-sufficiency and economic advancement. </p>
      <h5 class="w3-center">Bread of Life Purpose</h5>
      <p class="w3-large w3-text-grey w3-hide-medium"><strong>Bread of Life</strong> began in 1992 by serving 500 hot meals a day to homeless individuals in midtown Houston. With the help of a close partnership with Beyonce and Tina Knowles-Lawson, they have coordinated numerous anti-hunger initiatives and provided emergency support during natural disasters, in addition to their outreach to the homeless. They need data tracking and reporting to support their activities in homeless outreach, anti-hunger campaigns, and health outcomes in the communities served. </p>


      <h5 class="w3-center">Meet the Architects!</h5>
      <p class="w3-large"><strong>Gabino Aguirre</strong> - WebApp Developer </p>
      <p class="w3-large"><strong>Taylor Bean</strong> - WebApp Developer </p>
      <p class="w3-large"><strong>Alexis Enriquez</strong> - WebApp Developer </p>
    </div>
  </div>
</div>
<!-- displaying footer -->
<Footer />
<br>
</fieldset>
</template>

<style scoped>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

@import "../../assets/app.css";
</style>