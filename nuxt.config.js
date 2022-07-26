export default {
  srcDir: 'src/',
  components: [
    "components/"
  ],
  build: {
    transpile: ['mdi-vue'],
  },
  plugins: [
    '@/plugins/vuetify.js'
  ],
  modules: [
      // Simple usage
      '@nuxtjs/vuetify'
  ]
}
