<template lang="pug">
  .add-container
    .header
      p.header-text(v-if="!createdOk") Create a new employee
      p.notifier(v-if="createdOk") Employee Successfully Created
    .form-groups-container
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
@import '../design/variables.scss';

.add-container {
  color: $black;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-groups-container {
  width: 70%;
  display: flex;
  justify-content: center;
}

.notifier {
  color: $green;
}

form {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
}

label {
  margin-right: 10px;
}

input {
  width: 50%;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  text-indent: 7px;
}

button {
  font-size: 14px;
  padding: 7px 0;
  background-color: $neon-green;
  border: 1px solid $neon-green;
  border-radius: 5px;
  color: #222;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #222;
  border: 1px solid #222;
  color: $neon-green;
}
</style>


