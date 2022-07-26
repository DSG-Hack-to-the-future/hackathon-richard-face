<script>
import Listener from "./Listener.vue";

export default {
  name: "SearchBar",
  components: {
    Listener,
  },
  data() {
    return {
      errorMessage: "",
      match: [
        v => (v && (new RegExp('^[a-zA-Z0-9\-\ ]+$').test(v))) || "Invalid Search"
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('searchSubmit');
    }
  }
}
</script>

<template>
  <v-container id="search-input" class="fill-height">
    <v-row class="pa-auto ma-5">   
      <v-text-field 
        class="rounded-pill" 
        type="text" 
        solo 
        clearable
        :error-messages="errorMessage"
        v-on:emptied="() => {errorMessage = ''}"
        :rules="match"
        required
      >
        <Listener slot="prepend"/>
        <v-btn @click="handleSubmit" slot="append">Search</v-btn>
      </v-text-field>
      
      
    </v-row>
  </v-container>
</template>

<style scoped>
Listener > {
  z-index: 101
}
v-text-field {
  z-index: 100
}
v-btn {
  z-index: 101
  
}
</style>