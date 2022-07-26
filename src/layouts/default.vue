<template>
    <v-app>
        <Nuxt keep-alive>
        </Nuxt>

        <v-footer 
            app
        >
            <NuxtLink to="/" class="align-center">
                <v-img 
                src="https://i.pinimg.com/originals/b0/2b/5e/b02b5ef69f0e9d9198749632d5940647.png"
                width="100px"
                height="100px"
                />
            </NuxtLink>
            <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        beforeMount() {
            const custom = { 
                primary: "#085A4A",
                secondary: "#f26422",
                accent: '#e98f3a',
                anchor: "#8c8e91",
                error: '#FF5252',
                info: '#0c967d',
                success: '#4CAF50',
                warning: '#FFC107',
            }
            this.$vuetify.theme.themes.custom = custom;
            this.$vuetify.theme.custom = true;
        },

        methods: {
            toggleTheme() {
                this.$vuetify.theme.custom = !this.$vuetify.theme.custom
                console.log("THEME: ", this.$vuetify.theme.themes.custom)
            }
        }
    }
</script>