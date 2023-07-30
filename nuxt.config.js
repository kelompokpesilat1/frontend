export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: store.state.seoData.title,
  //   htmlAttrs: {
  //     lang: 'en',
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' },
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  //     {
  //       rel: 'preconnect',
  //       href: 'https://fonts.googleapis.com',
  //     },
  //     {
  //       rel: 'preconnect',
  //       href: 'https://fonts.gstatic.com',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat+Alternates:wght@700&family=Montserrat:wght@300;400;500;600;700&display=swap',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  //     },
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css',
  //     },
  //   ],
  //   script: [
  //     {
  //       src: 'https://cdn.quilljs.com/1.3.6/quill.js',
  //     },
  //   ],
  // },
  head() {
    return {
      title: this.$store.state.seoData.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.seoData.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$store.state.seoData.keywords,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat+Alternates:wght@700&family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Two+Tone',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.quilljs.com/1.3.6/quill.js',
        },
      ],
    }
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/seo.js' },
    { src: '~/plugins/utils.js' },
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/quill.js', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          user: false,
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  router: {
    middleware: ['fetchUserData', 'fetchData'],
  },
}
