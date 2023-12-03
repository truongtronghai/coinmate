<template>
    <client-only>
        <v-navigation-drawer id="left-nav-drawer" :rail="rail" mobile-breakpoint="sm" @click="rail = false">
            <v-list>
                <v-list-item>
                    <template #prepend>
                        <v-icon :icon="constants.NAVIBAR.HOME[1]" color="pink-accent-4" />
                    </template>
                    <template #append>
                        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                    </template>
                    <v-list-item-title>
                        <nuxt-link to="/" class="menu-item"> {{ constants.NAVIBAR.HOME[0] }} </nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <template #prepend>
                        <v-icon :icon="constants.NAVIBAR.BI[1]" color="pink-accent-4" />
                    </template>
                    <v-list-item-title>
                        <nuxt-link to="/bi" class="menu-item"> {{ constants.NAVIBAR.BI[0] }} </nuxt-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </client-only>
</template>
<script setup>
const rail = ref(true)
</script>
<style scoped>
.menu-item {
    text-decoration: none;
}
</style>
