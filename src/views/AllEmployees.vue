<template lang="pug">
  .all-container
    ul
      li(v-for="employee in employees")
        .header
          h3 {{ employee.firstName }} {{ employee.lastName }}
          i.fal.fa-times-circle(@click="deleteEmployee(employee)")
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
  },
  methods: {
    deleteEmployee (employee) {
      this.axios.wrapper
        .delete(`/Employees/${employee.id}`)
        .then(response => console.log(response))
      this.employees.splice(this.employees.indexOf(employee), 1)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 300px;
  margin: 20px;
}

.header {
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0;
  }
}

.fa-times-circle {
  color: #ff3f3f;
  cursor: pointer;
}

.fa-times-circle:hover {
  color: #bc2f2f;
}
</style>


