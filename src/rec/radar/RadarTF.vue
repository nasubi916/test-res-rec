<script setup lang="ts">
import { ref } from 'vue';
import { thirdFinalStore } from '@/stores/thirdFinal';
import Chart from 'primevue/chart';

const thirdFinalP = thirdFinalStore();

const radarData = ref({
    labels: ['Japanese', 'Geography', 'Math2', 'MathB', 'Physics', 'Creature', 'English', 'InfoIndus','Health','Algo'],
    datasets: [
        {
            label: 'your score',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [thirdFinalP.Japanese, thirdFinalP.Geography, thirdFinalP.Math2, thirdFinalP.MathB, thirdFinalP.Physics, thirdFinalP.Creature, thirdFinalP.English, thirdFinalP.InfoIndus,thirdFinalP.Health,thirdFinalP.Algo]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [thirdFinalP.JapaneseAv, thirdFinalP.GeographyAv, thirdFinalP.Math2Av, thirdFinalP.MathBAv, thirdFinalP.PhysicsAv, thirdFinalP.CreatureAv, thirdFinalP.EnglishAv, thirdFinalP.InfoIndusAv,thirdFinalP.HealthAv,thirdFinalP.AlgoAv]
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
<h2>radarTF</h2>
    <Chart type="radar" :data="radarData" :options="Options" />
</template>