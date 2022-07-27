<template>
  <v-main>
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <NuxtLink to="/search">
          <v-card >
            <v-card-title>
              Are you ready to take the field?
            </v-card-title>
          </v-card>
        </NuxtLink>
      </v-row>
    </v-container>
   
  </v-main>
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
