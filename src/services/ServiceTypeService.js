import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getServiceTypes() {
    return apiClient.get('/servicetypes')
  },
  getServiceType(id) {
    return apiClient.get('/servicetypes/' + id)
  },
  postServiceType(serviceType) {
    return apiClient.post('/servicetypes', serviceType)
  }
}
