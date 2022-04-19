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
@import  "../assets/app.css";
</style>
