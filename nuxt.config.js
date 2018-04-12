module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtwebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple Nuxt.js setup to create websites with blog feature using Storyblok as CMS and Netlify to deploy it.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Basic Components and Content Type setup
  */
  plugins: [
    '@/plugins/content-types',
    '@/plugins/components',
    '@/plugins/is-edit-mode',
    '@/plugins/markdown'
  ],
  /*
  ** Storyblok Client
  */
  modules: [
    ['storyblok-nuxt', {accessToken: '0MUsLPPq9VSfVcwp8u05LQtt', cacheProvider: 'memory'}]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
