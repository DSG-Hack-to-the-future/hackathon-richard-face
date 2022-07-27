<script>
import Listener from "./Listener.vue";

export default {
  name: "SearchBar",
  components: {
    Listener,
  },
  data() {
    return {
      input: "",
      errorMessage: "",
      match: [
        v => (v && (new RegExp('^[a-zA-Z0-9\-\ ]+$').test(v))) || "Invalid Search"
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('searchSubmit', this.input);
    },
    async handleRecord() {
            this.recording = !this.recording;

            if (this.recording) {

                // I'd like to take this moment to curse whoever wrote the code
                // that prevented me from alowing microphone access to any 
                // browser I tried. The below code SHOULD pick up microphone
                // input, but it remains a mystery. - Andrew
                //
                // navigator.mediaDevices
                // .getUserMedia({audio: true, video: false})
                // .then(handleSuccess)
                // .catch(handleFailure);


                let audioData = await this.$axios.$get('/input.flac');
                console.log(audioData);

                // TODO: how do I convert this to base64 encoded data and
                // Create Base64 Object

                let text = this.$speechToTextIntegration.convert(audioData);
                console.log(text);

                this.input="runner"
                //this.input = text;

            } 
        },
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
        v-on:emptied="errorMessage = ''"
        :rules="match"
        required
        append-icon="mdi-arrow-right"
        v-model="input"
        @click:append="handleSubmit"
      >
        <v-btn @click="handleRecord" slot="prepend">
          <v-icon >mdi-microphone</v-icon>
        </v-btn>
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