import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddEmployee from './views/AddEmployee.vue'
import AllEmployees from './views/AllEmployees.vue'
import Employee from './views/Employee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-employee',
      name: 'addEmployee',
      component: AddEmployee
    },
    {
      path: '/all-employees',
      name: 'allEmployees',
      component: AllEmployees
    },
    {
      path: '/employee/:employeeId',
      name: 'employee',
      component: Employee
    }
  ]
})
