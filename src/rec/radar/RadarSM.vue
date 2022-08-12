<script setup lang="ts">
import { ref } from 'vue';
import { secondMidStore } from '@/stores/secondMid';
import Chart from 'primevue/chart';

const secondMidP = secondMidStore();

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
            data: [secondMidP.Japanese, secondMidP.Geography, secondMidP.Math2, secondMidP.MathB, secondMidP.Physics, secondMidP.Creature, secondMidP.English, secondMidP.InfoIndus]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [secondMidP.JapaneseAv, secondMidP.GeographyAv, secondMidP.Math2Av, secondMidP.MathBAv, secondMidP.PhysicsAv, secondMidP.CreatureAv, secondMidP.EnglishAv, secondMidP.InfoIndusAv]
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
<h2>radarSM</h2>
    <Chart type="radar" :data="radarData" :options="Options" />
</template>