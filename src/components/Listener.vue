<template>
    <v-btn @click="handleRecord">
        <v-icon v-if="!recording">mdi-microphone</v-icon>
        <v-icon v-if="recording">mdi-microphone-outline</v-icon>
    </v-btn>
</template>

<script>

export default {
    name: "Listener",
    components: {
        
    },
    data() {
        return {
            recording: false
        }
    },
    methods: {
        handleRecord() {
            this.recording = !this.recording;

            if (this.recording) {
                navigator.mediaDevices
                .getUserMedia({audio: true, video: false})
                .then(handleSuccess)
                .catch(handleFailure);
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