<script setup lang="ts">
import { ref } from 'vue';
import { firstMidStore } from '../stores/firstMid'
import Chart from 'primevue/chart';
import Card from 'primevue/card'

const testP = firstMidStore();

const chartData = ref({
    labels: ['Japanese', 'Geography', 'Math2', 'MathB', 'Physics', 'Creature', 'English', 'InfoIndus'],
    datasets: [
        {
            label: 'your score',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [testP.Japanese, testP.Geography, testP.Math2, testP.MathB, testP.Physics, testP.Creature, testP.English, testP.InfoIndus]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [testP.JapaneseAv, testP.GeographyAv, testP.Math2Av, testP.MathBAv, testP.PhysicsAv, testP.CreatureAv, testP.EnglishAv, testP.InfoIndusAv]
        },
    ]
});

const chartOptions = ref({
    plugins: {
        elements:{
            borderAlign:'inner'
        },
        subtitle: {
            display: true,
            text: 'レーダーチャート'
        },
        legend: {
            labels: {
                color: '#000000'
            }
        }
    },
    scales: {
        r: {
            pointLabels: {
                color: '#000000',
            },
            grid: {
                color: '#aaaaaa',
            },
            angleLines: {
                color: '#aaaaaa'
            }
        }
    }
});

</script>

<template>
    <h1>record</h1>
    your japanese score is : {{ testP.Japanese }}<br>

    <Card class="size">
        <template #content>
        <Chart type="radar" :data="chartData" :options="chartOptions" />
        </template>
    </Card>
</template>