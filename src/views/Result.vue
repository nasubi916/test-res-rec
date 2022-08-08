<script setup lang="ts">
import { ref } from 'vue'
import { testStore } from '../stores/test'
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const testP = testStore()

const tests = ref([
    {
        id: "japanese",
        score: 0,
        av: 0,
    },
    {
        id: "geography",
        score: 0,
        av: 0,

    },
    {
        id: "math2",
        score: 0,
        av: 0,

    },
    {
        id: "mathB",
        score: 0,
        av: 0,

    },
    {
        id: "Physics",
        score: 0,
        av: 0,

    },
    {
        id: "Creature",
        score: 0,
        av: 0,
    },
    {
        id: "English",
        score: 0,
        av: 0,
    },
    {
        id: "InfoIndus",
        score: 0,
        av: 0,
    },
    {
        id: "Health",
        score: 0,
        av: 0,
    },
    {
        id: "Algo",
        score: 0,
        av: 0,
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
        <h1>result</h1>

        <form>
            <div v-if="tests">
                <div v-for="(test, index) in tests" :key="test.score">
                    <p>{{ index }} : {{ test.id }}</p>
                    <InputNumber v-model="test.score" mode="decimal" :useGrouping="false" suffix="点" showButtons
                        decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
                </div>
                <br>
                <Button @click.prevent="submitForm">入力</Button>
            </div>
        </form>

        <form>
            <div v-if="tests">
                <div v-for="(test, index) in tests" :key="test.av">
                    <p>{{ index }} : {{ test.id }}</p>
                    <InputNumber v-model="test.av" mode="decimal" :useGrouping="false" suffix="点" showButtons
                        decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
                </div>
                <br>
                <Button @click.prevent="submitForm">入力</Button>
            </div>
        </form>

</template>