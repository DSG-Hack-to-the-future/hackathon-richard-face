<template>
    <v-app >
        <Nuxt>
        </Nuxt>
        <v-footer app>
            <NuxtLink to="/" class="align-center">
                <v-img src="/Richie_gimp.png" width="100px"
                    height="100px" style="border-radius: 60%;"/>
            </NuxtLink>
            <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
            <!-- <div justify="end"><Avatar /></div> -->
        </v-footer>
    </v-app>
</template>

<script>
import Avatar from '../components/Avatar.vue'

export default {
    components: {
        Avatar
    },
    data() {
        return {
            backendUrl: "http://127.0.0.1:8000/"
        }
    },

    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            console.log("THEME: ", this.$vuetify.theme.themes.dark)
        }
    }
}
</script>

<style>

</style>