module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  styleResources: {
    // your settings here
    scss: ['./assets/style/mixins.scss', './assets/style/variables.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', '@/plugins/axios', '@/directives'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    prefix: '/api',
    credentials: true
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    // 修改routes以适配命名视图
    extendRoutes(routes, resolve) {
      // 给指定路由添加命名视图
      routes
        .filter((route) => ['index', 'cv', 'articles-id'].includes(route.name))
        .forEach((item) => {
          Object.assign(item, {
            components: {
              default: item.component,
              top: resolve(__dirname, 'components/NavBar.vue'),
              asideBtn: resolve(__dirname, 'components/ThemeSwitch.vue')
            },
            chunkNames: {
              top: 'components/NavBar',
              asideBtn: 'components/ThemeSwitch'
            }
          })
        })
    }
  },
  // /****************** 以下非Nuxt官方配置 *************************/
  /*
   ** mongoose驱动配置
   */
  db: {
    port: 3333, // 项目启动的端口
    uris: 'mongodb://localhost:27017/myblog', // 数据库
    saltTimes: 3 // 加盐的次数（用户密码加密）
  }
}
