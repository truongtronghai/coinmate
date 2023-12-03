<template>
    <v-main style="min-height: 100vh">
        <v-container class="d-flex flex-column align-items mt-6">
            <v-row>
                <v-col cols="12"><h1 class="text-h4">Pie chart</h1></v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-sheet width="300" height="300"><ChartDisplay /></v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
