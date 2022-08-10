<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';
import Combo from '@/rec/Combo.vue';

const radars = ref([
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
])

</script> 

<template>
    <h1>record</h1>
    <TabMenu :model="radars" />
    <RouterView />
    <Combo />
</template>