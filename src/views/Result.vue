<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user'

const userPinia = useUserStore();

</script>

<template>
    <h1>result</h1>

    your name is : {{ userPinia.name }}<br>
    your score is : {{ userPinia.score }}
</template>