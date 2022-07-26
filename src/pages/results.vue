<template>
    <v-container>
        <h1>{{searchTerm}}</h1>
        <ProductResults></ProductResults>
        <StoreMap></StoreMap>
        <ProTips></ProTips>
        <CommunityCalendar></CommunityCalendar>
        <NuxtLink to="/recommendations">Would you like personalized recommendations?</NuxtLink>
    </v-container>
</template>

<script>
import CommunityCalendar from '../components/CommunityCalendar.vue'
import ProductResults from '../components/ProductResults.vue'
import ProTips from '../components/ProTips.vue'
import StoreMap from '../components/StoreMap.vue'

export default {
    name: "Results",
    components: {
        CommunityCalendar,
        ProTips,
        ProductResults,
        StoreMap
    },
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