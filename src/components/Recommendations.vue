<template>
    <v-container>
        <h1>Recommendations</h1>
        <p>{{data}}</p>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            data: ""
        }
    },
    mounted() {
        this.data = this.$recommendationsIntegration.get("16NIKMRFRC1GRYWHTLFS");
    }
}
</script>