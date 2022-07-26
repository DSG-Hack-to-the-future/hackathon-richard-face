<template>
    <v-btn>
        <Microphone :requestAccess="true" :mediaType="'audio/webm'">
            <v-icon slot="record" name="record">mdi-microphone</v-icon>
        </Microphone>
    </v-btn>
</template>

<script>
import { Microphone } from 'vue-capture'

export default {
    name: "Listener",
    components: {
        Microphone
    },
}
</script>