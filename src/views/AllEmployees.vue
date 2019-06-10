<template lang="pug">
  .all-container
    ul
      li(v-for="employee in employees")
        router-link.link(:to="`/employee/${employee.id}`")
          .header
            h3 {{ employee.firstName }} {{ employee.lastName }}
            i.fal.fa-times-circle(@click="deleteEmployee(employee)")
          p {{ employee.jobTitle }}
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
      this.employees.splice(this.employees.indexOf(employee), 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.all-container {
  color: #222;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 300px;
  margin: 5px 20px;
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

p {
  margin: 0;
}

.link {
  text-decoration: none;
  color: #222;
}
</style>


