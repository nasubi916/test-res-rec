<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';
import Card from 'primevue/card';

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
    },
    {
        label: 'fileDrop',
        to: '/fd'
    }
]);

</script>

<template>
    <Toast />
    <Card>
        <template #header>
            <TabMenu :model="testTerm" />
        </template>
        <template #content>
            <RouterView />
        </template>
    </Card>
    <!-- 総合計と平均獲得点数をComputedで出す -->
</template>