<template>
	<v-app>
		<app-header></app-header>
		<v-content class="content">
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
	import Header from './components/header/Header.vue'

	export default {
		name: 'App',
		components: {
			appHeader: Header
		}
	}
</script>

<style>
	#app {
		background-color: #BFD5AA;
		width: 100%;
	}
	.app-container {
		margin: 0;
	}
</style>
