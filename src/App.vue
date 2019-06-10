<template lang="pug">
  .app-container
    Hero
    NavBar
    .home-link
      router-link(to="/") Home
    router-view
</template>

<script>
import Hero from './components/Hero'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Hero,
    NavBar
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import './design/variables.scss';

body {
  margin: 0;
}

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.home-link {
  margin: 5px 0 20px 20px;

  a {
    color: #222;
  }

  a:hover {
    color: $neon-green;
  }
}
</style>
