<template>
  <v-app>
    <Background />
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Richard
      </div>
    </v-app-bar>

    <v-main color="secondary">
      <SearchBar/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import Background from '../components/Background.vue';

export default {
  name: 'Richard',

  components: {
    SearchBar,
    Background
},

  data: () => ({
    //
  }),
};
</script>
