<template lang="pug">
  .all-container
    ul
      li(v-for="employee in employees")
        .header
          h3 {{ employee.firstName }} {{ employee.lastName }}
          i.fal.fa-times-circle
</template>

<script>
export default {
  name: 'allEmployees',
  data () {
    return {
      employees: []
    }
  },
  mounted () {
    this.axios.wrapper
      .get('/Employees')
      .then(resp => this.employees = resp.data)
  }
}
</script>

<style lang="scss" scoped>
.header {
  h3 {
    margin: 0;
  }
}
</style>


