<template>
    <client-only>
        <v-navigation-drawer id="left-nav-drawer" :rail="rail" mobile-breakpoint="sm" @click="rail = false">
            <v-list>
                <v-list-item :title="constants.NAVIBAR.HOME[0]">
                    <template #prepend>
                        <v-icon :icon="constants.NAVIBAR.HOME[1]" color="pink-accent-4" />
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
