<template lang="pug">
  .add-container
    .header
      p.header-text(v-if="!createdOk") Create a new employee
      p.notifier(v-if="createdOk") Employee Created Successfully
    .form-groups-container
      form(@submit.prevent="addEmployee")
        .form-group
          label(for="firstName") First Name
          input.input(id="firstName" type="text" placeholder="Bob" v-model="firstName")
        .form-group
          label(for="lastName") Last Name
          input.input(id="lastName" type="text" placeholder="Smith" v-model="lastName")
        .form-group
          label(for="jobTitle") Job Title
          input.input(id="jobTitle" type="text" placeholder="Software Engineer" v-model="jobTitle")
        .form-group
          label(for="jobDescription") Job Description
          textarea.input(id="jobDescription" type="text" placeholder="Build amazingly awesome software and websites" v-model="jobDescription")
        .form-group
          label(for="hireDate") Hire Date
          input.input(id="hireDate" type="date" v-model="hireDate")
        .radio-form-group
          .radio-group
            label.radio-label(for="fullTime") Full Time
            input.radio-input(id="fullTime" type="radio" v-model="isFullTime" :value="true")
          .radio-group
            label.radio-label(for="partTime") Part Time
            input.radio-input(id="partTime" type="radio" v-model="isFullTime" :value="false")
        .form-group
          label(for="salary") Salary
          input.input(id="salary" type="number" v-model="salary")
        .form-group
          label(for="ptoHours") PTO Hours
          input.input(id="ptoHours" type="number" v-model="ptoHours")
        .form-group
          label(for="birthday") Birthday
          input.input(id="birthday" type="date" v-model="birthday")
        .form-group
          label(for="phoneNumber") Phone Number
          input.input(id="phoneNumber" type="text" v-model="phoneNumber")
        .form-group
          label(for="email") Email
          input.input(id="email" type="text" v-model="email")
        .form-group
          label(for="address") Street Address
          input.input(id="address" type="text" v-model="address")
        .form-group
          label(for="city") City
          input.input(id="city" type="text" v-model="city")
        .form-group
          label(for="state") State
          input.input(id="state" type="text" v-model="state")
        .form-group
          label(for="zip") ZIP
          input.input(id="zip" type="text" v-model="zip")
        .form-group
          label(for="emergencyContactPerson") Emergency Contact
          input.input(id="emergencyContactPerson" type="text" v-model="emergencyContactPerson")
        .form-group
          label(for="emergencyContactPersonPhone") Emergency Contact #
          input.input(id="emergencyContactPersonPhone" type="text" v-model="emergencyContactPersonPhone")
        button(type="submit") Create Employee
</template>

<script>
export default {
  name: 'addEmployee',
  data () {
    return {
      firstName: '',
      lastName: '',
      jobTitle: '',
      jobDescription: '',
      birthday: '',
      hireDate: '',
      phoneNumber: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      salary: '',
      email: '',
      emergencyContactPerson: '',
      emergencyContactPersonPhone: '',
      ptoHours: '',
      isFullTime: null,
      createdOk: false
    }
  },
  methods: {
    addEmployee () {
      this.axios.wrapper
        .post('/Employees', {
          firstName: this.firstName,
          lastName: this.lastName,
          jobTitle: this.jobTitle,
          jobDescription: this.jobDescription,
          birthday: this.birthday,
          hireDated: this.hireDate,
          phoneNumber: this.phoneNumber,
          address: this.address,
          city: this.city,
          zip: this.zip,
          state: this.state,
          salary: this.salary,
          email: this.email,
          emergencyContactPerson: this.emergencyContactPerson,
          emergencyContactPersonPhone: this.emergencyContactPersonPhone,
          ptoHours: this.ptoHours,
          isFullTime: this.isFullTime,
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

.radio-form-group {
  display: flex;
  margin: 2px 0;
  justify-content: space-between;

  .radio-group {
    width: 100%;

    .radio-label {
      margin-right: 10%;
    }

    .radio-input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      border: 1px solid #222;
      transition: .2s all linear;
    }

    .radio-input:checked {
      border: 6px solid $neon-green;
    }
  }
}

.input {
  width: 50%;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  text-indent: 5px;
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


