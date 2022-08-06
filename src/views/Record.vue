<script setup lang="ts">
import { ref, reactive } from 'vue'
import { testStore } from '../stores/test'
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const testPinia = testStore()
const formState = reactive({
    score: 0,
    Japanese: 0,
    Geography: 0,
    Math2: 0,
    MathB: 0,
    Physics: 0,
    Creature: 0,
    English: 0,
    InfoIndus: 0,
    Health: 0,
    Algo: 0

})

const submitForm = () => {
    testPinia.score = formState.score;
    testPinia.Japanese = formState.Japanese;
    testPinia.Geography = formState.Geography;
    testPinia.Math2 = formState.Math2;
    testPinia.MathB = formState.MathB;
    testPinia.Physics = formState.Physics;
    testPinia.Creature = formState.Creature;
    testPinia.English = formState.English;
    testPinia.InfoIndus = formState.InfoIndus;
    
    testPinia.Health = formState.Health;
    testPinia.Algo = formState.Algo;

    console.log("submit");
    console.log(testPinia.score);
    console.log(testPinia.Japanese);
    console.log(testPinia.Geography);
    console.log(testPinia.Math2);
    console.log(testPinia.MathB);
    console.log(testPinia.Physics);
    console.log(testPinia.Creature);
    console.log(testPinia.English);
    console.log(testPinia.InfoIndus);

    console.log(testPinia.Health);
    console.log(testPinia.Algo);

}

</script>

<template>
    <h1>record</h1>

    フォームに入力されたやつ：{{ formState }}<br>
    ストアに保存されたやつ：{{ testPinia }}
    <form>
        <div class="userScore">
            <label for="score">score:</label>
            <input v-model="formState.score" type="number" min="0" max="100" step="1">
        </div>

        <button @click.prevent="submitForm">入力</button>
    </form><br>

    <!-- <div v-for="list,index in data" :key="score.user"></div>
        <li>{{index+1}}-{{score.user}}
    <v-if></v-if>
    <v-else></v-else> -->

    国語、地理、数学Ⅱ、数学B、物理、生物、英語

    <form>
        <div>
            <InputNumber v-model="formState.Japanese" mode="decimal" :useGrouping="false" suffix="点" showButtons
                decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
        </div>

        <div>
            <InputNumber v-model="formState.Geography" mode="decimal" :useGrouping="false" suffix="点" showButtons
                decrementButtonClass="p-button-danger" incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus" :min=0 :max=100 />
        </div>
        
        <button @click.prevent="submitForm">入力</button>
    </form>
</template>