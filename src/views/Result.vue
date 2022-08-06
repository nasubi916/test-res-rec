<script setup lang="ts">
import { useUserStore } from '../stores/test'

const userPinia = useUserStore();

</script>

<template>
    <h1>result</h1>

    your name is : {{ userPinia.name }}<br>
    your score is : {{ userPinia.score }}
</template>