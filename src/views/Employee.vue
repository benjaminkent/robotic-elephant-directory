<template lang="pug">
  .employee-container
    .employee-card
      h3 {{ employee.firstName }} {{ employee.lastName }}
      p {{ employee.jobTitle }}
      p Salary: {{ employee.salary }}
      p PTO Available: {{ employee.ptoHours }}
</template>

<script>
export default {
  name: 'employee',
  data () {
    return {
      employee: {}
    }
  },
  mounted () {
    this.axios.wrapper
      .get(`/Employees/${this.$route.params.employeeId}`)
      .then(resp => this.employee = resp.data)
  }
}
</script>

<style lang="scss" scoped>
.employee-card {
  margin: 20px;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
