export default {
  dev: true,
  mode: 'universal',
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
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
   ** Global CSS, included in every pages
   * https://nuxtjs.org/api/configuration-css#the-css-property
   */
  css: ['@/assets/styles/global.less', '@/assets/styles/rewrites.less'],

  /**
   * inject some variables and mixins
   * https://nuxtjs.org/api/configuration-build/#styleresources
   */
  styleResources: {
    // You cannot use path aliases here (~ and @), you need to use relative or absolute paths.
    less: [
      './assets/styles/mixins.less',
      './assets/styles/variables.less',
      './assets/styles/antd.less'
    ]
    // less: ['ant-design-vue/dist/antd.less']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui', '@/plugins/filters', '@/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // 支持在 layouts, components, plugins 和 middlewares 中使用 TypeScript
    '@nuxt/typescript-build',
    // https://nuxtjs.org/api/configuration-build/#styleresources
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true
  },
  // proxy: {
  //   '/graphql': {
  //     target: 'localhost:3000'
  //     // pathRewrite: {
  //     //   '^/api': '/'
  //     // }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    // 导入 antd-vue 的样式文件
    // https://github.com/vueComponent/ant-design-vue/issues/234#issuecomment-466308850
    loaders: {
      less: {
        // less 文件有行内 js, 这里需要手动开启以支持
        // 可覆盖变量详见: https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
        javascriptEnabled: true
        // modifyVars: {
        //   'primary-color': '#6389e1',
        // }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: { isDev: boolean; isClient: boolean }) {
      config.module.rules.push({
        test: /\.txt$/i,
        exclude: /node_modules/,
        loader: 'raw-loader'
      })

      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      })

      config.resolve.extensions.push('.graphql', '.txt')

      if (ctx.isDev && ctx.isClient) {
        //
      }
    }
  }
}
