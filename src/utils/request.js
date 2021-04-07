import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: process.env.api_base_url,
  timeout: 1000 * 60
})

// 请求拦截
request.interceptors.request.use(
  config => {
    if (store.getters.getters) {
      config.header['token'] = store.getters.getters
    }
    return config;
  },
  err => {
    return Promise.reject(err)
  });

// 响应拦截
request.interceptors.response.use(
  response => {
    let res = response.data;
    if (res.code !== 200) {

      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res;
  },
  err => {
    return Promise.reject(err)
  }
)

export default request