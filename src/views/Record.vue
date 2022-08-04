<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user'

// let count = ref(0)
// const addCount = () => {
//     count.value++;
// }
// const decCount = () => {
//     count.value--;
// } 

const userPinia = useUserStore()
const formState = reactive({
    name: "",
    score: ""
})

const submitForm = () => {
    userPinia.name = formState.name;
    userPinia.score = formState.score;
    console.log("submit");
    console.log(userPinia.name);
    console.log(userPinia.score);

}


</script>

<template>
    <h1>record</h1>

    <!-- <p>{{ count }}</p>
    <button @click="addCount" type="button">add</button>
    <button @click="decCount" type="button">dec</button><br><br> -->

    {{ formState }}
    <form>
        <div class="userName">
            <label for="name">name:</label>
            <input v-model="formState.name">
        </div>

        <div class="userScore">
            <label for="score">score:</label>
            <input v-model="formState.score">
        </div>

        <button @click.prevent="submitForm">入力</button>
    </form><br>

    国語、英語、数学Ⅱ、数学B、地理、生物、物理
</template>