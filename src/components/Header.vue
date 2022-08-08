<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';

const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home',
		to: '/'
	},
	{
		label: 'Result',
		icon: 'pi pi-fw pi-pencil',
		to: '/result',
		visible: true,
		//次々現れるようにする
	},
	{
		label: 'Record',
		icon: 'pi pi-fw pi-file',
		to: '/record',
	},
	{
		label: 'AboutUs',
		icon: 'pi pi-user',
		to: '/us',
	},
	{
		icon: 'pi pi-link',
	},
	{
		icon: 'pi pi-github',
		url: 'https://github.com/nasubi916',
		target: '_blank',
	},
	{
		icon: 'pi pi-twitter',
	},
	{
		icon: 'pi pi-instagram',
		class: 'right'
	},

]);

</script>

<template>
	<TabMenu :model="items" />
</template>

<style>
.right {
	position: absolute;
	top: 0;
	right: 0;
}
</style>