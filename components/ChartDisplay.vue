<template>
    <Doughnut id="chartjs-4" class="chartjs" :data="data" :options="chartOptions" />
</template>
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart, ArcElement } from 'chart.js'

Chart.register(ArcElement)

// const props = defineProps<{
//     type: string
// }>()
const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
        },
    ],
}
const chartOptions = { responsive: true }
</script>
