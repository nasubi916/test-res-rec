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
		//次々現れるようにする
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
	},
	{
		label: 'TestField',
		icon: 'pi pi-bolt',
		to: '/test'
	},
	{
		icon: 'pi pi-link',
	},
	{
		icon: 'pi pi-twitter',
	},
	{
		icon: 'pi pi-image',
	},
	{
		icon: 'pi pi-camera',
	},
	{
		icon: 'pi pi-user-edit',
	},
	{
		icon: 'pi pi-copy',
	},
	{
		icon: 'pi pi-external-link',
	},

	{
		icon: 'pi pi-instagram',
		class: 'right'
	},

]);

</script>

<template>
	<TabMenu :model="routes" />
</template>

<style>
.right {
	position: absolute;
	top: 0;
	right: 0;
}
</style>