<template lang="pug">
  .all-container
    table
      thead
        tr
          th Employee Name
          th Position
      tbody
        tr(v-for="employee in employees")
          td.name
            router-link(:to="`/employee/${employee.id}`") {{ employee.firstName }} {{ employee.lastName }}
          td {{ employee.jobTitle }}
          td.options
            router-link(to="/update-employee")
              p.update UPDATE
            p.delete(@click="deleteEmployee(employee)") DELETE
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

table {
  padding: 20px;
  width: 100%;
  margin-bottom: 300px;
}

th {
  text-align: left;
  font-size: 18px;
}

td {
  margin: 3px 0;
}

.name {

  a {
    color: #222;
  }
}

.options {
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #eac700;
  }

  a:hover {
    color: #d3b300;
  }
}

.delete {
  margin-left: 15px;
  color: #ff3f3f;
  cursor: pointer;
}

.delete:hover {
  color: #bc2f2f;
}

p {
  margin: 0;
}
</style>


