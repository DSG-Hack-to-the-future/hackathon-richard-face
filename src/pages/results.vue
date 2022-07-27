<template>
    <v-main>
        <v-banner sticky="true" :color="this.$vuetify.theme.themes.dark.primary">
            <h1> Results: "{{searchTerm}}"</h1>
            <h3>Store: 160</h3>
        </v-banner>
        
        <v-container >
            <ProductResults></ProductResults>
            <StoreMap></StoreMap>
            <ProTips></ProTips>
            <CommunityCalendar></CommunityCalendar>
            <Recommendations></Recommendations>
        </v-container>
        
    </v-main>
</template>

<script>
import CommunityCalendar from '../components/CommunityCalendar.vue'
import ProductResults from '../components/ProductResults.vue'
import ProTips from '../components/ProTips.vue'
import StoreMap from '../components/StoreMap.vue'
import Recommendations from '../components/Recommendations.vue'


export default {
    name: "Results",
    components: {
        CommunityCalendar,
        ProTips,
        ProductResults,
        StoreMap,
        Recommendations,
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