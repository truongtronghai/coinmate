<template>
    <client-only>
        <v-navigation-drawer id="mob-nav-drawer" v-model="show" class="hidden-sm-and-up mt-2" location="top" rail>
            <v-list>
                <v-list-item title="Home">
                    <template #prepend>
                        <v-icon icon="mdi-home-city" color="pink-accent-4" />
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </client-only>
</template>
<script setup>
const props = defineProps({ show: Boolean })
const show = computed(() => props.show)
</script>
