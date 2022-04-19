<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Engineered By Gabino Aguirre, Taylor Bean & Alexis Enriquez</h3>
  </div>
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

 
}
.greetings {
  height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
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
    top: 150px;
  }
}
</style>
