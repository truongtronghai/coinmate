<template>
    <v-app-bar class="px-2 d-flex justify-space-between">
        <div class="d-flex me-auto">
            <v-icon icon="mdi-finance" color="green" class="align-self-center" />
            <h2 class="text-h2 ml-2">Coinmate</h2>
        </div>
        <v-btn icon="mdi-white-balance-sunny" @click="handleClickChangeTheme"></v-btn>
    </v-app-bar>
</template>
<script setup>
const emit = defineEmits(['changeTheme'])
const handleClickChangeTheme = () => {
    emit('changeTheme')
}
</script>
