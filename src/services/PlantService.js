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
  getPlants() {
    return apiClient.get('/plants')
  },
  getPlant(id) {
    return apiClient.get('/plants/' + id)
  },
  postPlant(plant) {
    return apiClient.post('/plants', plant)
  }
}
