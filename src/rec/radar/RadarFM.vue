<script setup lang="ts">
import { ref } from 'vue';
import { firstMidStore } from '@/stores/firstMid';
import Chart from 'primevue/chart';

const firstMidP = firstMidStore();

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
            data: [firstMidP.Japanese, firstMidP.Geography, firstMidP.Math2, firstMidP.MathB, firstMidP.Physics, firstMidP.Creature, firstMidP.English, firstMidP.InfoIndus]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [firstMidP.JapaneseAv, firstMidP.GeographyAv, firstMidP.Math2Av, firstMidP.MathBAv, firstMidP.PhysicsAv, firstMidP.CreatureAv, firstMidP.EnglishAv, firstMidP.InfoIndusAv]
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
<h2>radarFM</h2>
    <Chart type="radar" :data="radarData" :options="Options" />
</template>