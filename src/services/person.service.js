import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'https://api.victortolbert.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPeople(perPage, page) {
    return apiClient.get('/people?_limit=' + perPage + '&_page=' + page)
  },
  getPerson(id) {
    return apiClient.get('/people/' + id)
  },
  postPerson(person) {
    return apiClient.post('/people', person)
  },
}

// function sleeper(ms) {
//   return function (x) {
//     return new Promise(resolve => setTimeout(() => resolve(x), ms))
//   }
// }
