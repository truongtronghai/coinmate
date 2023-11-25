<template>
    <client-only>
        <v-navigation-drawer :rail="rail" @click.stop="rail = false">
            <v-list>
                <v-list-item title="Home">
                    <template #prepend>
                        <v-icon icon="mdi-home-city" color="pink-accent-4" />
                    </template>
                    <template #append>
                        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </client-only>
</template>
<script setup>
const rail = ref(true)
</script>
