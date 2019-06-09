<template lang="pug">
  nav
    ul
      router-link(to="/all-employees" tag="li") All Employees
      router-link(to="/add-employee" tag="li") Add Employee
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="scss" scoped>
@import '../design/variables.scss';

nav {
  display: flex;
  justify-content: center;
  background-color: #222;
}

ul {
  width: 70%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;

  li {
    padding: 20px 20px;
    color: $neon-green;
    width: 150px;
    text-align: center;
    cursor: pointer;
  }
}

.router-link-exact-active {
  background: repeating-linear-gradient(
    135deg,
    #333,
    #333 5px,
    #222 5px,
    #222 15px
  );
}

@media(max-width: 430px) {
  ul {
    width: 100%;
  }
}
</style>


