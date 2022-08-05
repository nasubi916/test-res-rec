<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user'

const userPinia = useUserStore()
const formState = reactive({
    name: "",
    score: 0
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

    フォームに入力されたやつ：{{ formState }}<br>
    ストアに保存されたやつ：{{ userPinia }}
    <form>
        <div class="userName">
            <label for="name">name:</label>
            <input v-model="formState.name">
        </div>

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

    国語、英語、数学Ⅱ、数学B、地理、生物、物理

    <div>
        <div>
            
        </div>
    </div>
</template>