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
        color: "red"
    },
    {
        id: "geography",
        score: 0,
        color: "green"
    },
    {
        id: "math2",
        score: 0,
        color: "blue"
    },
    {
        id: "mathB",
        score: 0,
        color: "lightblue"
    },
    {
        id: "Physics",
        score: 0,
        color: "yellow"
    },
    {
        id: "Creature",
        score: 0,
        color: "darkgreen"
    },
    {
        id: "English",
        score: 0,
        color: "brawn"
    },
    {
        id: "InfoIndus",
        score: 0,
        color: "grey"
    },
    {
        id: "Health",
        score: 0,
        color: "pink"
    },
    {
        id: "Algo",
        score: 0,
        color: "orange"
    },

])

const submitForm = () => {
    testP.Japanese = tests.value[0].score
    testP.Geography = tests.value[1].score
    testP.Math2 = tests.value[2].score
    testP.MathB = tests.value[3].score
    testP.Physics = tests.value[4].score
    testP.Creature = tests.value[5].score
    testP.English = tests.value[6].score
    testP.InfoIndus = tests.value[7].score
    testP.Health = tests.value[8].score
    testP.Algo = tests.value[9].score
    //いつかFor文でまとめる
}

</script>

<template>
    <h1>record</h1>
    <form>
        <div v-if="tests">
            <div v-for="(test, index) in tests" :key="test.score">
                <p>{{ index + 1 }} : {{ test.id }}</p>
                <InputNumber v-model="test.score" mode="decimal" :useGrouping="false" suffix="点" showButtons
                    decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus" :min=0 :max=100 />

            </div>
            <Button @click.prevent="submitForm">入力</Button>
        </div>
    </form>

</template>