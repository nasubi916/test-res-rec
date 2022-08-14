<script setup lang="ts">
import { ref } from 'vue';
import { firstMidStore } from '@/stores/firstMid';
import { firstFinalStore } from '@/stores/firstFinal';
import { secondMidStore } from '@/stores/secondMid';
import { secondFinalStore } from '@/stores/secondFinal';
import { thirdFinalStore } from '@/stores/thirdFinal';
import { colorStore } from '@/stores/color';
import Chart from 'primevue/chart';
import Card from 'primevue/card';

const firstMidP = firstMidStore();
const firstFinalP = firstFinalStore();
const secondMidP = secondMidStore();
const secondFinalP = secondFinalStore();
const thirdFinalP = thirdFinalStore();
const colorP = colorStore();


const terms = ref([
    {
        sub: {
            id: 'Japanese',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.JapaneseAv, firstFinalP.JapaneseAv, secondMidP.JapaneseAv, secondFinalP.JapaneseAv, thirdFinalP.JapaneseAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Japanese,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.Japanese, firstFinalP.Japanese, secondMidP.Japanese, secondFinalP.Japanese, thirdFinalP.Japanese]
            }]
        }
    },
    {
        sub: {
            id: 'Geography',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.GeographyAv, firstFinalP.GeographyAv, secondMidP.GeographyAv, secondFinalP.GeographyAv, thirdFinalP.GeographyAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Geography,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.Geography, firstFinalP.Geography, secondMidP.Geography, secondFinalP.Geography, thirdFinalP.Geography]
            }]
        }
    },
    {
        sub: {
            id: 'Math2',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.Math2Av, firstFinalP.Math2Av, secondMidP.Math2Av, secondFinalP.Math2Av, thirdFinalP.Math2Av]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Math2,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.Math2, firstFinalP.Math2, secondMidP.Math2, secondFinalP.Math2, thirdFinalP.Math2]
            }]
        }
    },
    {
        sub: {
            id: 'MathB',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.MathBAv, firstFinalP.MathBAv, secondMidP.MathBAv, secondFinalP.MathBAv, thirdFinalP.MathBAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.MathB,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.MathB, firstFinalP.MathB, secondMidP.MathB, secondFinalP.MathB, thirdFinalP.MathB]
            }]
        }
    },
    {
        sub: {
            id: 'Physics',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.PhysicsAv, firstFinalP.PhysicsAv, secondMidP.PhysicsAv, secondFinalP.PhysicsAv, thirdFinalP.PhysicsAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Physics,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.Physics, firstFinalP.Physics, secondMidP.Physics, secondFinalP.Physics, thirdFinalP.Physics]
            }]
        }
    },
    {
        sub: {
            id: 'Creature',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.CreatureAv, firstFinalP.CreatureAv, secondMidP.CreatureAv, secondFinalP.CreatureAv, thirdFinalP.CreatureAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Creature,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.Creature, firstFinalP.Creature, secondMidP.Creature, secondFinalP.Creature, thirdFinalP.Creature]
            }]
        }
    },
    {
        sub: {
            id: 'English',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.EnglishAv, firstFinalP.EnglishAv, secondMidP.EnglishAv, secondFinalP.EnglishAv, thirdFinalP.EnglishAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.English,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.English, firstFinalP.English, secondMidP.English, secondFinalP.English, thirdFinalP.English]
            }]
        }
    },
    {
        sub: {
            id: 'InfoIndus',
            labels: ['firstMid', 'FirstFinal', 'secondMid', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstMidP.InfoIndusAv, firstFinalP.InfoIndusAv, secondMidP.InfoIndusAv, secondFinalP.InfoIndusAv, thirdFinalP.InfoIndusAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.InfoIndus,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstMidP.InfoIndus, firstFinalP.InfoIndus, secondMidP.InfoIndus, secondFinalP.InfoIndus, thirdFinalP.InfoIndus]
            }]
        }
    },
    {
        sub: {
            id: 'Health',
            labels: ['FirstFinal', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstFinalP.HealthAv, secondFinalP.HealthAv, thirdFinalP.HealthAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Health,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstFinalP.Health, secondFinalP.Health, thirdFinalP.Health]
            }]
        }
    },
    {
        sub: {
            id: 'Algo',
            labels: ['FirstFinal', 'secondFinal', 'thirdFinal'],
            datasets: [{
                type: 'line',
                label: 'Average Score',
                borderColor: '#222222',
                borderWidth: 2,
                fill: false,
                data: [firstFinalP.AlgoAv, secondFinalP.AlgoAv, thirdFinalP.AlgoAv]
                //データをPiniaで配列保存したものを読み取る
            },
            {
                type: 'bar',
                label: 'Your Score',
                backgroundColor: colorP.Algo,
                borderColor: 'white',
                borderWidth: 2,
                data: [firstFinalP.Algo, secondFinalP.Algo, thirdFinalP.Algo]
            }]
        }
    },
]);

const Options = ref({
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
    <div v-if="terms" class="flex">
        <div v-for="(term, index) in terms">
            <Card class="size">
                <template #title>
                    <br>{{ terms[index].sub.id }}
                </template>
                <template #content>
                    <Chart type="bar" :data="term.sub" :options="Options" />
                </template>
            </Card>
        </div>
    </div>
</template>