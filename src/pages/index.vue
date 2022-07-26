<template>
  <v-container>
    <NuxtLink :color="this.$vuetify.theme.themes.dark.secondary" to="/search">Welcome</NuxtLink>
  </v-container>
</template>

<script>


export default {
  name: 'Richard',
  components: {
  },

  data() {
    return {
      
    }
  },
  
   
};
</script>

<style>
  .v-enter-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from {
    opacity: 0;
  }
</style>
