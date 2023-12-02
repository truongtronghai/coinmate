<template>
    <v-main style="min-height: 100vh">
        <v-container class="d-flex flex-column align-items mt-6">
            <v-row>
                <v-col cols="12"><h1 class="text-h4">Top 7 search on CoinGecko</h1></v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="d-flex">
                    <v-sheet class="d-flex justify-start flex-wrap">
                        <v-card v-for="(coin, idx) in data.coins" :key="idx" class="ma-3" width="120">
                            <v-card-item>
                                <v-card-title>{{ coin.item.symbol }}</v-card-title>
                                <v-card-subtitle>{{ coin.item.price_btc }}</v-card-subtitle>
                                <v-card-text>
                                    <v-img :src="coin.item.small" cover />
                                </v-card-text>
                            </v-card-item>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12"><h1 class="text-h4">Top 7 NFTs</h1></v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="d-flex">
                    <v-sheet class="d-flex justify-start flex-wrap">
                        <v-card v-for="(nft, idx) in data.nfts" :key="idx" class="ma-3" width="120">
                            <v-card-item>
                                <v-card-title>{{ nft.name }}</v-card-title>
                                <v-card-subtitle>{{ nft.symbol }}</v-card-subtitle>
                                <v-card-text>
                                    <v-img :src="nft.thumb" />
                                    <div>{{ nft.nft_contract_id }}</div>
                                    <div>{{ nft.native_currency_symbol }}</div>
                                    <div>
                                        {{ nft.floor_price_in_native_currency }}
                                    </div>
                                    <div>{{ nft.floor_price_24h_percentage_change }} %</div>
                                </v-card-text>
                            </v-card-item>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script setup>
const { data } = await useFetch('https://api.coingecko.com/api/v3/search/trending')
</script>
