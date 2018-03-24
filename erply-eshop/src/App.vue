<template>
	<v-app>
		<!--<app-header></app-header>-->
		<v-content class="content">
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
</style>
