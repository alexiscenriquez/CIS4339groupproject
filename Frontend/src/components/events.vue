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
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Line 17 events.vue
      <!-- <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. -->
    </h3>
  </div>
</template>