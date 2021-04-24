import axios from 'axios'
import { API_URL } from '../constants/config'

axios.defaults.baseURL = API_URL
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export function getAPI(url, data) {
  // we can add error handler in catch in future
  return axios.get(url, data).then(({ data = {} }) => data).catch(err => err)
}