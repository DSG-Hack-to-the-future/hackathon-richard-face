import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            dark: { 
                primary: "#085a4a",
                secondary: "#f26422",
                accent: '#e98f3a',
                anchor: "#8c8e91",
                error: '#FF5252',
                info: '#0c967d',
                success: '#4CAF50',
                warning: '#FFC107',
            }
        },
    }
});

export default vuetify;