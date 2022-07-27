import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = { 
    theme: {
        themes: {
            light: { 
                primary: "#085A4A",
                secondary: "#f26422",
                accent: '#e98f3a',
                error: '#FF5252',
                // info: '#0c967d',
                // success: '#4CAF50',
                // warning: '#FFC107',
            }
        },
    } 
}

export default new Vuetify(opts)