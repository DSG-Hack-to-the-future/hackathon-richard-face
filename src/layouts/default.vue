<template>
    <v-app >
        <Nuxt>
        </Nuxt>

        <v-footer app>
            <NuxtLink to="/" class="align-center">
                <v-img src="https://i.pinimg.com/originals/b0/2b/5e/b02b5ef69f0e9d9198749632d5940647.png" width="100px"
                    height="100px" />
            </NuxtLink>
            <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
        </v-footer>
    </v-app>
</template>

<script>
import Avatar from '../components/Avatar.vue'

export default {
    components: {
        Avatar
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