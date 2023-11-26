<template>
    <v-app-bar class="pa-2 d-flex justify-space-between">
        <div class="d-flex">
            <v-icon icon="mdi-finance" color="green" class="align-self-center" />
            <h2 class="text-h2 ml-2 hidden-xs">Coinmate</h2>
            <h2 class="text-h4 ml-2 d-xs hidden-sm-and-up">Coinmate</h2>
        </div>
        <v-btn icon="mdi-white-balance-sunny" @click="handleClickChangeTheme"></v-btn>
        <v-spacer />
        <v-app-bar-nav-icon variant="text" class="hidden-sm-and-up" @click="handleSwitchMobDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
</template>
<script setup>
const emit = defineEmits(['changeTheme', 'switchMobDrawer'])
const handleClickChangeTheme = () => {
    emit('changeTheme')
}
const handleSwitchMobDrawer = () => {
    emit('switchMobDrawer')
}
</script>
