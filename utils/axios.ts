import querystring from 'querystring'

import axios from 'axios'

const config = {
  // API_ROOT: process.env.NODE_ENV === 'production' ?
  API_ROOT: 'http://localhost:3000'
}

const ax = axios.create({
  baseURL: config.API_ROOT,
  timeout: 5000
})

// 拦截器
ax.interceptors.request.use(
  (data) => {
    if (
      data.method === 'post' ||
      data.method === 'put' ||
      data.method === 'delete' ||
      data.method === 'patch'
    ) {
      data.data = querystring.stringify(data.data)
    }
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

ax.interceptors.response.use(
  (response) => {
    // if (response && response.data.code !== 1) {
    //   if (window) window.alert('出错了：' + response.data.message);
    // }

    return response.data
  },
  (error) => {
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes('timeout')) {
        window.alert('请求超时，请检查网络是否连接正常')
      } else {
        // 可以展示断网组件
        window.alert('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

export default ax
