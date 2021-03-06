/**
 * axios 二次封装
 */
import config from '../config'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router/index'

const TOKEN_INVALID = 'Token认证失败，请从新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // TO-DO
  const headers = req.headers
  if (headers.Authorization) {
    headers.Authorization = 'Bear jack'
  }

  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data

  if (code === 200) {
    return data
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(TOKEN_INVALID)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns
 */
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }

  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
