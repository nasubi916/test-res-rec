<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	body

	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/result">Result</RouterLink>
		<RouterLink to="/record">Record</RouterLink>
	</nav>
	<RouterView />

</template>

<style>
</style>