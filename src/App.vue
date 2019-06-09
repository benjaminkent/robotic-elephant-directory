<template lang="pug">
  .app-container
    Hero
    router-view
</template>

<script>
import Hero from './components/Hero'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>


<style lang="scss">
body {
  margin: 0;
}

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
