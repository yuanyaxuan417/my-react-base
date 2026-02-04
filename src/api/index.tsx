import axios from 'axios'

const service = axios.create({
  timeout: 60 * 1000,
  // 基础接口地址
  baseURL: '',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})

service.interceptors.request.use(config => {
  const token = localStorage.getItem('user_token') // 修复：移除第一个空参数
  config.headers['x-auth-token'] = token
  return config
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    if (err?.response?.data?.code === '000401') {
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default service