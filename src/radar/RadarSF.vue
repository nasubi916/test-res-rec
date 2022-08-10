<script setup lang="ts">
import { ref } from 'vue';
import { secondFinalStore } from '@/stores/secondFinal';
import Chart from 'primevue/chart';

const secondFinalP = secondFinalStore();

const radarData = ref({
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
            data: [secondFinalP.Japanese, secondFinalP.Geography, secondFinalP.Math2, secondFinalP.MathB, secondFinalP.Physics, secondFinalP.Creature, secondFinalP.English, secondFinalP.InfoIndus]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [secondFinalP.JapaneseAv, secondFinalP.GeographyAv, secondFinalP.Math2Av, secondFinalP.MathBAv, secondFinalP.PhysicsAv, secondFinalP.CreatureAv, secondFinalP.EnglishAv, secondFinalP.InfoIndusAv]
        },
    ]
});

const Options = ref({
    plugins: {
        elements: {
            borderAlign: 'inner'
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
    <Chart type="radar" :data="radarData" :options="Options" />
</template>