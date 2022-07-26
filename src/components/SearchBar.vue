<template>
    <v-container
        id="search-input"
        class="pa-xs-4 ma-xs-4"
    >
        <v-row>
            <Listener />
            <v-text-field 
                class="rounded-pill" 
                type="text"
                solo
            />
            <v-btn>Search</v-btn>
        </v-row>
        
    </v-container>
</template>

<script>
import Listener from "./Listener.vue";

export default {
    name: "SearchBar",
    components: {
        Listener,
    }
}


</script>