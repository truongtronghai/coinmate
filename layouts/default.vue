<template>
    <v-app>
        <v-theme-provider :theme="isDark ? 'dark' : 'light'" with-background>
            <Header @change-theme="handleChangeTheme" @switch-mob-drawer="handleMobDrawer" />
            <NaviBar />
            <NaviBarMobile :show="isMobile" />
            <NuxtPage />
        </v-theme-provider>
    </v-app>
</template>
<script setup>
const isDark = ref(false)
const isMobile = ref(false)
const handleChangeTheme = () => {
    isDark.value = !isDark.value
}
const handleMobDrawer = () => {
    isMobile.value = !isMobile.value
}
</script>
