<template>
  <v-app>
    <v-app-bar
      app
    >
      <NuxtLink to="/" class="d-flex align-center">
        Richard
      </NuxtLink>

      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    </v-app-bar>

    <Background />
    <v-main>
      
      <v-container fluid>
        <v-row>
          <v-col>
            <SearchBar />
          </v-col>
        </v-row>
      </v-container>
      
    </v-main>
    
  </v-app>
</template>

<script>
  import Background from '../components/Background.vue';
  import SearchBar from '../components/SearchBar.vue'


  export default {

    name: 'Search',
    components: {
      Background,
      SearchBar
    },
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        console.log(this.$vuetify.theme.themes.dark)
      }
    }

    
  };
</script>
