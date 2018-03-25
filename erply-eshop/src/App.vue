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
	import { Axios } from './api/RetrieveData';

	export default {
		name: 'App',
		components: {
			appHeader: Header
		},
		created() {
			Axios.get()
				.then(response => {
					this.$store.dispatch('setProducts', response.data);
				})
				.catch(e => {
					console.log(e);
				})
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
