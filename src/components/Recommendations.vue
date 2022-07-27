<template>
    <v-container>
        <h1>Recommendations</h1>
        <v-row 
            class="ma-5"
            v-for="item in data"
            v-bind:key="item.id"
        >
            {{item}}
        </v-row>
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
            data: [],
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