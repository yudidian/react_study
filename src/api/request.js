import axios from 'axios'
const request = axios.create({
  baseURL: '/api',
  timeout: 100000
})
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    alert(error)
  }
)
export default request
