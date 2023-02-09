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
  getMovies() {
    return apiClient.get('/movies')
  },
  getMovie(id) {
    return apiClient.get('/movies/' + id)
  },
  postMovie(movie) {
    return apiClient.post('/movies', movie)
  }
}
