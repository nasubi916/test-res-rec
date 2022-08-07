<script setup lang="ts">
import { testStore } from '../stores/test'

const testP = testStore();

</script>

<template>
    <h1>result</h1>
    your japanese score is : {{ testP.Japanese }}<br>

</template>