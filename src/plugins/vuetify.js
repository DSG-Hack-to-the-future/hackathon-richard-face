import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = { 
    theme: {
        themes: {
            dark: { 
                primary: "#085A4A",
                secondary: "#f26422",
                accent: '#e98f3a',
                anchor: "#8c8e91",
                error: '#FF5252',
                info: '#0c967d',
                success: '#4CAF50',
                warning: '#FFC107',
            }
        },
        dark: true
    } 
}

export default new Vuetify(opts)