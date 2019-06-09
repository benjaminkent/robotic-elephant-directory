<template lang="pug">
  .app-container
    Hero
    nav
      ul
        li
          router-link(to="#") All Employees
        li
          router-link(to="#") Add Employee
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
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import './design/variables.scss';

body {
  margin: 0;
}

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #222;
  padding: 20px 0;
}

ul {
  width: 70%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;

  li {

    a {
      color: $neon-green;
    }
  }
}
</style>
