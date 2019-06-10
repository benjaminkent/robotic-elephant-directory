<template lang="pug">
  .employee-container
    .employee-card
      h2 {{ employee.firstName }} {{ employee.lastName }}, 
        span.job-title {{ employee.jobTitle }}
      .detail-group
        p Job Description: 
        p {{ employee.jobDescription }}
      .detail-group
        p Status: 
        p(v-if="employee.isFullTime === true") Full Time
        p(v-if="employee.isFullTime === false") Part Time
      .detail-group
        p Hire Date: 
        p {{ employee.hiredDate }}
      .detail-group
        p Salary: 
        p ${{ employee.salary }}
      .detail-group
        p PTO Available: 
        p {{ employee.ptoHours }}
      .detail-group
        p Phone Number: 
        p {{ employee.phoneNumber }}
      .detail-group
        p Email: 
        p {{ employee.email }}
      .detail-group
        p Street Address: 
        p {{ employee.address }}
      .detail-group
        p City: 
        p {{ employee.city }}
      .detail-group
        p State: 
        p {{ employee.state }}
      .detail-group
        p Zip: 
        p {{ employee.zip }}
      .detail-group
        p Birthday: 
        p {{ employee.birthday }}
      .detail-group
        p Emergency Contact: 
        p {{ employee.emergencyContactPerson }}
      .detail-group
        p Emergency Contact Phone: 
        p {{ employee.emergencyContactPhone }}
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
.employee-container {
  width: 95%;
  display: flex;
  justify-content: center;
}

.employee-card {
  width: 50%;
  min-width: 350px;
  margin-bottom: 200px;
}

.job-title {
  font-weight: 400;
}

.detail-group {
  display: flex;
  justify-content: space-between;
}

h2 {
  margin: 0 0 10px 0;
}

p {
  margin: 2px 0;
}
</style>
