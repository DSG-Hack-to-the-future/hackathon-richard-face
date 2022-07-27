export default {
  srcDir: 'src/',
  components: [
    "components/"
  ],
  build: {
    transpile: ['mdi-vue'],
  },
  plugins: [
    '@/plugins/vuetify.js',
    '~/plugins/integrations.js',
  ],
  modules: [
      // Simple usage
      '@nuxtjs/vuetify',
      '@nuxtjs/axios',
      '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    "/api/": "http://localhost:8000",
    "/v3/findByEcode": "https://prod-catalog-productdetails-api.iso.ap01.pcf.dcsg.com"
  }
}
