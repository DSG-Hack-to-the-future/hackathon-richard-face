<template>
    <v-btn @click="handleRecord">
        <v-icon >mdi-microphone</v-icon>
    </v-btn>
</template>

<script>

export default {
    name: "Listener",
    components: {
        
    },
    data() {
        return {
        }
    },
    methods: {
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
            } 
        },
        
    }
}

const handleSuccess = function (stream) {
    if (window.URL) {
        player.srcObject = stream;
    } else {
        player.src = stream;
    }
}

const handleFailure = function (error) {
    console.error(error);
}
</script>