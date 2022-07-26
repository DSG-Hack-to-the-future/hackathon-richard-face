<template>
  <v-app>
    <Transition>
      <v-main>
        <NuxtLink color="primary" to="/search">Welcome</NuxtLink>
      </v-main>
    </Transition>
    
  </v-app>
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
