<template>
  <v-container>
    <v-main>
      
      <v-container fluid>
        <v-row>
          <v-col>
            <SearchBar @searchSubmit="searchSubmit" />
          </v-col>
        </v-row>
      </v-container>
      
    </v-main>
    
   
  </v-container>
</template>

<script>
  import SearchBar from '../components/SearchBar.vue'


  export default {

    name: 'Search',
    components: {
      SearchBar
    },
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        console.log(this.$vuetify.theme.themes.dark)
      },
      searchSubmit(input) {
        this.$router.push({
          path: "/results",
          query: { search: input }
        })
      }
    }

    
  };
</script>
