<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';
import Combo from '@/rec/Combo.vue';

const radars = ref([
    {
        label: 'firstMid',
        to: '/rfm'
    },
    {
        label: 'firstFinal',
        to: '/rff'
    },
    {
        label: 'secondMid',
        to: '/rsm'
    },
    {
        label: 'secondFinal',
        to: '/rsf'
    },
    {
        label: 'thirdFinal',
        to: '/rtf'
    }
]);

</script> 

<template>
    <h1>record</h1>
    <TabMenu :model="radars" />
    <RouterView />
    <Combo />
</template>