<template>
    <v-container outlined :color="this.$vuetify.theme.themes.dark.primary" class="pa-4">
        <h1>Store Map:</h1>
        <v-row class="d-flex justify-center pa-2">
            <v-col cols="auto">
                <v-img contain class="floorPlan" src="/storeImages/bottom.png"></v-img>
                <v-img contain class="floorPlan" src="/storeImages/top.png"></v-img>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
</script>

<style>
.floorPlan {
    width: 50%;
    height: 50%;
}
</style>