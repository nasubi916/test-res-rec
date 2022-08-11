<script setup lang="ts">
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';
import Card from 'primevue/card';
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

function bbb() {
    num.value++
}

const shares = ref([
    {
        label: 'link',
        icon: 'pi pi-link',
    },
    {
        label: 'twitter',
        icon: 'pi pi-twitter',
        command: () => {
            window.location.href = 'https://github.com/nasubi916'

        }
    },
    {
        label: 'photo',
        icon: 'pi pi-image',
    },
    {
        label: 'instagram',
        icon: 'pi pi-instagram',
    },
])

</script> 

<template>
    <h1>record</h1>
    <SpeedDial :model="shares" class="bottom-right" type="quarter-circle" direction="up-left" :radius=150 @click=bbb()
        showIcon="pi pi-link" />
    <TabMenu :model="radars" />
    <Card class="size">
        <template #content>
            <RouterView />
        </template>
    </Card>
    <Combo />


</template>