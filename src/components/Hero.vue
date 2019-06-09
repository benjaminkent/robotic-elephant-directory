<template lang="pug">
  .hero-container
    .hero-grid
    .header-grid
      header
        h1 Robotic Elephant
        p Employee Directory
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

  .header-grid {
    grid-area: 1 / 1 / 2 / 4;
    justify-self: center;
    align-self: end;

    header {
      font-family: 'Righteous', cursive;
      color: #47ffb8;
      text-shadow: 1px 1px 1px #0a0a0a;

      h1 {
        font-size: 42px;
        margin: 0;
      }

      p {
        margin: 0;
        text-align: center;
        font-size: 26px;
      }
    }
  }
}
</style>


