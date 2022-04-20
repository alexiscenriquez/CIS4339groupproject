<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
  }
    
  },
}
</script>

<template>
<fieldset class="form-control mb-5">
<div class="w3-content" style="max-width:500px">
<div class="w3-row w3-padding-64" id="about">
    <div class="w3-col m6 w3-padding-large w3-hide-small">
     <img src="../assets/gta.png" class="w3-round w3-image w3-opacity-min" alt="GTA" width="250" height="250">
    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About GTA</h1><br>
      <h5 class="w3-center">Our Purpose</h5>
      <p class="w3-large">GTA architects is a company</p>
      <p class="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>
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
</style>