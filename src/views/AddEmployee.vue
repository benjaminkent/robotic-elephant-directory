<template lang="pug">
  .add-container
    form(@submit.prevent="addEmployee")
      .form-group
        label(for="firstName") First Name
        input(id="firstName" type="text" placeholder="E.g. Bob" v-model="firstName")
      .form-group
        label(for="lastName") Last Name
        input(id="lastName" type="text" placeholder="E.g. Smith" v-model="lastName")
      button(type="submit") Create Employee
</template>

<script>
export default {
  name: 'addEmployee',
  data () {
    return {
      firstName: '',
      lastName: '',
      createdOk: false
    }
  },
  methods: {
    addEmployee () {
      this.axios.wrapper
        .post('/Employees', {
          firstName: this.firstName,
          lastName: this.lastName
        })
        .then(response => {
          if (response.status === 200) {
            this.createdOk = true
          } else {
            this.createdOk = false
          }
        })
      this.firstName = ''
      this.lastName = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-container {
  color: #0a0a0a;
  padding: 20px;
}

label {
  margin-right: 10px;
}
</style>


