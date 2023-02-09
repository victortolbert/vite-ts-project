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
  getClaims() {
    return apiClient.get('/claims')
  },
  getClaim(id) {
    return apiClient.get('/claims/' + id)
  },
  postClaim(claim) {
    return apiClient.post('/claims', claim)
  }
}
