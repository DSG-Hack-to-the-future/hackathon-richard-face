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
      '@nuxtjs/axios'
  ]
}
