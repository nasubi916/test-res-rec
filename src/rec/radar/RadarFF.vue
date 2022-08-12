<script setup lang="ts">
import { ref } from 'vue';
import { firstFinalStore } from '@/stores/firstFinal';
import Chart from 'primevue/chart';

const firstFinalP = firstFinalStore();

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
            data: [firstFinalP.Japanese, firstFinalP.Geography, firstFinalP.Math2, firstFinalP.MathB, firstFinalP.Physics, firstFinalP.Creature, firstFinalP.English, firstFinalP.InfoIndus,firstFinalP.Health,firstFinalP.Algo]
        },
        {
            label: 'average score',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [firstFinalP.JapaneseAv, firstFinalP.GeographyAv, firstFinalP.Math2Av, firstFinalP.MathBAv, firstFinalP.PhysicsAv, firstFinalP.CreatureAv, firstFinalP.EnglishAv, firstFinalP.InfoIndusAv,firstFinalP.HealthAv,firstFinalP.Algo]
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
<h2>radarFF</h2>
    <Chart type="radar" :data="radarData" :options="Options" />
</template>