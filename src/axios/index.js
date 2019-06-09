import axios from 'axios'

const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api/roboticelephant'

const axiosInstance = axios.create({
  baseURL: API_URL
})

export { axiosInstance }