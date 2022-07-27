<template>
    <v-container>
        <h1>Recommendations</h1>
        <p>{{data}}</p>
        <v-overlay :value="overlay">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            data: "",
            overlay: true
        }
    },
    mounted() {
        this.$recommendationsIntegration
            .get("16NIKMRFRC1GRYWHTLFS")
            .then((data) => {
                this.data = data
                this.overlay = false
            });
    }
}
</script>