<template lang="pug">
  .hero-container
    .hero-grid
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style lang="scss" scoped>
.hero-container {
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .hero-grid {
    grid-area: 1 / 1 / 4 / 4;
    background-image: url("../assets/robot-elephant.jpg");
    background-position: top;
    background-size: cover;
  }
}
</style>


