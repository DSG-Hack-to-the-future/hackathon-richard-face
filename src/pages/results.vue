<template>
    <v-container>
        <h1>{{searchTerm}}</h1>
    </v-container>
</template>

<script>
export default {
    name: "Results",
    data() {
        return {
            searchTerm: ""
        }
    },
    beforeMount() {
        this.searchTerm = this.$route.query['search'];
        this.performQuery();
    },
    methods: {
        performQuery() {
            console.log(this.searchTerm);
        }
    }
}
</script>