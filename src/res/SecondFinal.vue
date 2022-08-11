<script setup lang="ts">
import { ref } from 'vue'
import { secondFinalStore } from '../stores/secondFinal'
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';


const testP = secondFinalStore()

const tests = ref([
    {
        id: "japanese",
        score: testP.Japanese,
        av: testP.JapaneseAv,
    },
    {
        id: "geography",
        score: testP.Geography,
        av: testP.GeographyAv,

    },
    {
        id: "math2",
        score: testP.Math2,
        av: testP.Math2Av,

    },
    {
        id: "mathB",
        score: testP.MathB,
        av: testP.MathBAv,

    },
    {
        id: "Physics",
        score: testP.Physics,
        av: testP.PhysicsAv,

    },
    {
        id: "Creature",
        score: testP.Creature,
        av: testP.CreatureAv,
    },
    {
        id: "English",
        score: testP.English,
        av: testP.EnglishAv,
    },
    {
        id: "InfoIndus",
        score: testP.InfoIndus,
        av: testP.InfoIndusAv,
    },
    {
        id: "Health",
        score: testP.Health,
        av: testP.HealthAv,
    },
    {
        id: "Algo",
        score: testP.Algo,
        av: testP.AlgoAv,
    },

])

const submitForm = () => {
    testP.Japanese = tests.value[0].score
    testP.JapaneseAv = tests.value[0].av

    testP.Geography = tests.value[1].score
    testP.GeographyAv = tests.value[1].av

    testP.Math2 = tests.value[2].score
    testP.Math2Av = tests.value[2].av

    testP.MathB = tests.value[3].score
    testP.MathBAv = tests.value[3].av

    testP.Physics = tests.value[4].score
    testP.PhysicsAv = tests.value[4].av

    testP.Creature = tests.value[5].score
    testP.CreatureAv = tests.value[5].av

    testP.English = tests.value[6].score
    testP.EnglishAv = tests.value[6].av

    testP.InfoIndus = tests.value[7].score
    testP.InfoIndusAv = tests.value[7].av

    testP.Health = tests.value[8].score
    testP.HealthAv = tests.value[8].av

    testP.Algo = tests.value[9].score
    testP.AlgoAv = tests.value[9].av
    //いつかFor文でまとめる
}

</script>

<template>
    <h2>secondFinal</h2>
    <form>
        <div v-if="tests">
            <Button @click.prevent="submitForm" class="p-button-raised p-button-outlined">入力</Button>
            <div v-for="(test, index) in tests" :key="test.score">
                <span class="p-float-label input">
                    <InputNumber v-model="test.score" mode="decimal" :useGrouping="false" suffix="点" showButtons
                        decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
                    <label for="InputNumber">{{ index + 1 }} : {{ test.id }}</label>
                </span>

            </div>
            <br>
        </div>
    </form>

    <form>
        <div v-if="tests">
            <Button @click.prevent="submitForm" class="p-button-raised p-button-outlined">入力</Button>
            <div v-for="(test, index) in tests" :key="test.av">
                <span class="p-float-label input">
                    <InputNumber v-model="test.av" mode="decimal" :useGrouping="false" suffix="点" showButtons
                        decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
                    <label for="InputNumber">{{ index + 1 }} : {{ test.id }}</label>
                </span>

            </div>
            <br>
        </div>
    </form>

</template>