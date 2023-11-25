<template>
    <v-app>
        <v-theme-provider :theme="isDark ? 'dark' : 'light'" with-background>
            <Header @change-theme="handleChangeTheme" />
            <NaviBar />
            <NuxtPage />
        </v-theme-provider>
    </v-app>
</template>
<script setup>
const isDark = ref(false)
const handleChangeTheme = () => {
    isDark.value = !isDark.value
}
</script>
