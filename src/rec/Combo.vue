<script setup lang="ts">
import { ref } from 'vue';
import { firstMidStore } from '@/stores/firstMid';
import { firstFinalStore } from '@/stores/firstFinal';
import { secondMidStore } from '@/stores/secondMid';
import { secondFinalStore } from '@/stores/secondFinal';
import { thirdFinalStore } from '@/stores/thirdFinal';
import Chart from 'primevue/chart';
import Card from 'primevue/card'

const firstMidP = firstMidStore()
const firstFinalP = firstFinalStore()
const secondMidP = secondMidStore()
const secondFinalP = secondFinalStore()
const thirdFinalP = thirdFinalStore()

const terms = ref([
    {
        
    },
])

const japaneseData = ref({
    labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
    datasets: [{
        type: 'line',
        label: 'Average Score',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [firstMidP.Japanese, firstFinalP.Japanese, secondMidP.Japanese, secondFinalP.Japanese, thirdFinalP.Japanese]
    },
    {
        type: 'bar',
        label: 'Your Score',
        backgroundColor: '#66BB6A',
        borderColor: 'white',
        borderWidth: 2,
        data: [firstMidP.JapaneseAv, firstFinalP.JapaneseAv, secondMidP.JapaneseAv, secondFinalP.JapaneseAv, thirdFinalP.JapaneseAv]
    }]
});

const japaneseOptions = ref({
    plugins: {
        subtitle: {
            font: {
                family: 'Rubik'
            },
            display: true,
            text: '一年間の推移',
            color: '#000000',
        },
        legend: {
            labels: {
                color: '#000000'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#000000'
            },
            grid: {
                color: '#aaaaaa'
            }
        },
        y: {
            ticks: {
                color: '#000000'
            },
            grid: {
                color: '#aaaaaa'
            }
        }
    }
});

</script>

<template>
    <div v-if="terms">
           <div v-for="(term,index) in terms" :key="term.">
            <Card class="size">
                <template #content>
                    <Chart type="bar" :data="japaneseData" :options="japaneseOptions" />
                </template>
            </Card>
        </div>
    </div>
</template>