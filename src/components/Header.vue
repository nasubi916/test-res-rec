<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';

const routes = ref([
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home',
		to: '/'
	},
	{
		label: 'Result',
		icon: 'pi pi-fw pi-pencil',
		to: '/result/fm',
		visible: true,
		//次々現れるようにする class="p-ripple purple" v-ripple
	},
	{
		label: 'Record',
		icon: 'pi pi-fw pi-file',
		to: '/record/rfm',
	},
	{
		label: 'AboutUs',
		icon: 'pi pi-user',
		to: '/us',
		class:'right'
	},
	{
		label: 'TestField',
		icon: 'pi pi-bolt',
		to: '/test'
	},
]);

</script>

<template>
	<TabMenu :model="routes" />
</template>