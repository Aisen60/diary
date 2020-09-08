import axios from 'axios'
import {
  GIT_BASE_URL,
  BASE_URL_CATALOG,
  GIT_USERNAME,
  GIT_REPOSITORY,
} from '../config'
const service = axios.create({
  baseURL: `${GIT_BASE_URL}/${BASE_URL_CATALOG}/${GIT_USERNAME}/${GIT_REPOSITORY}`,
})

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
})

const api = {
  getIssues: (state = 'open', page = 1, perPage = 20, sort = 'created') =>
    service.get(
      `/issues?state=${state}&page=${page}&per_page=${perPage}&sort=${sort}`
    ),
  issueDetails: (number) => service.get(`/issues/${number}`),
}

export default api
