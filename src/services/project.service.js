import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.victortolbert.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProjects() {
    return apiClient.get('/projects')
  },
  getProject(id) {
    return apiClient.get('/projects/' + id)
  },
  postProject(project) {
    return apiClient.post('/projects', project)
  }
}
