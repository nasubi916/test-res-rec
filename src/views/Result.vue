<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';

const testTerm = ref([
    {
        label: 'firstMid',
        to: '/fm'
    },
    {
        label: 'firstFinal',
        to: '/ff'
    },
    {
        label: 'secondMid',
        to: '/sm'
    },
    {
        label: 'secondFinal',
        to: '/sf'
    },
    {
        label: 'thirdFinal',
        to: '/tf'
    }
]);

</script>

<template>
    <h1>result</h1>
    
    <TabMenu :model="testTerm" />
    <RouterView />
    <!-- 総合計と平均獲得点数をComputedで出す -->
</template>