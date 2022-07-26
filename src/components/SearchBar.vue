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
    generateSuggestions: function (event) {
      let temp = []
      for (let i = 0; i < 5; i++) {
        temp.push(event + i);
      }

      this.searchMessages = temp;
      console.log(this.searchMessages);
    },
    submit: function () {

    },
  }
}
</script>

<template>
  <v-container id="search-input">
    <v-row class="pa-auto ma-5">   
      <v-text-field 
        class="rounded-pill" 
        type="text" 
        solo 
        clearable 
        :messages="searchMessages"
        :error-messages="errorMessages"
        v-on:input="generateSuggestions($event)"
        v-on:emptied="() => {searchMessages = []; errorMessage = ''}"
        :rules="match"
        required
      >
        <Listener slot="prepend"/>
        <v-btn v-on:click="submit" slot="append">Search</v-btn>
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