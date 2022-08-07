<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import TabMenu from 'primevue/tabmenu';

const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home',
		to: '/',
	},
	{
		label: 'Result',
		icon: 'pi pi-fw pi-calendar',
		to: '/result',
	},
	{
		label: 'Record',
		icon: 'pi pi-fw pi-pencil',
		to: '/record',
	},
	{
		label: 'About',
		icon: 'pi pi-fw pi-file',
		to: '/about',
	},
	{
		label: 'AboutUs',
		icon: 'pi pi-fw pi-cog',
		to: '/us',
	},
	{
		icon: 'pi pi-github',
		url: '',
	},
	{
		icon: 'pi pi-twitter',
	},
	{
		icon: 'pi pi-link',
	},
	{
		icon: 'pi pi-heart-fill',
	},
	{
		icon: 'pi pi-paperclip',
	},
	{
		icon: 'pi pi-user',
	},
	{
		icon: 'pi pi-plus',
	},
	{
		icon: 'pi pi-instagram',
	},

]);

</script>

<template>
	<div>
		<div class="card">
			<TabMenu :model="items" />
			<router-view />
		</div>

	</div>
</template>