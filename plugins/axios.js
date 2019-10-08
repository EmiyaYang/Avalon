// import qs from 'querystring'

export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url)

    if (config.method === 'get') {
      // config.params = JSON.stringify(config.params)
    }

    return config
  })

  $axios.onResponse((res) => {
    return res && res.data
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    // eslint-disable-next-line no-console
    console.log(`错误码: ${code}`)
    if (code === 400) {
      redirect('/400')
    } else if (code === 404) {
      redirect('/404')
    }
  })
}
