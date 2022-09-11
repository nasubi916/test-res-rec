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