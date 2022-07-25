<template>
    <v-container
        id="search-input"
        fluid
        
    >
        <v-row>
            <v-col cols="auto">
                <Listener />
                <input 
                    class="rounded-pill" 
                    type="text"
                />
                <v-btn>Search</v-btn>
            </v-col>
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