<template>
    <v-main style="min-height: 100vh">
        <v-container class="d-flex flex-column align-items mt-6">
            <v-img :src="data.image.large" width="50" />
            <h1>{{ data.id }}</h1>
            <div>
                <ClientOnly>
                    <p v-for="(val, idx) in data.description.en.split('\r\n')" :key="idx">{{ val }}</p>
                </ClientOnly>
            </div>
            <div v-for="(val, idx) in data.links.homepage" :key="idx">
                <a v-if="val" :href="val" target="_blank">{{ val }}</a>
            </div>
            <div v-for="(val, idx) in data.links.blockchain_site" :key="idx">
                <a v-if="val" :href="val" target="_blank">{{ val }}</a>
            </div>
        </v-container>
    </v-main>
</template>
<script setup>
const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/tectum/contract/0x68a47fe1cf42eba4a030a10cd4d6a1031ca3ca0a'
)
</script>
