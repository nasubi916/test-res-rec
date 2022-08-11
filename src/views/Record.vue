<script setup lang="ts">
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
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

const num = ref(0);

const shares = ref([
    {
        label: 'share',
        icon: 'pi pi-link',
        click: () => {
            num.value++
        }
    },
    {
        label: 'share',
        icon: '',
        click: () => {
            num.value++
        }
    },
    {
        label: 'share',
        icon: '',
        click: () => {
            num.value++
        }
    },
    {
        label: 'share',
        icon: '',
        click: () => {
            num.value++
        }
    },
])

</script> 

<template>
    <h1>record</h1>
    {{num}}
    <TabMenu :model="radars" />
    <RouterView />
    <SpeedDial :model="shares" class="bottom-right" type="quarter-circle" direction="up-left" :radius=150 />
    <Combo />
    

</template>