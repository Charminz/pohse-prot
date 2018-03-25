<template>
	<div>
		<v-toolbar
			dark
			app
			clipped-left
			class="nav-toolbar"
		>
			<v-spacer></v-spacer>
			<v-toolbar-title>
				Erply E-shop
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn flat :to="{ name: 'ShoppingCart'}">
					<v-icon>shopping_cart</v-icon>
					Shopping cart ( {{ totalPrice }} € )
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data: function () {
			return {
				drawer: false
			}
		},
		computed: {
			totalPrice() {
				return this.$store.getters.totalPrice;
			}
		},
	}
</script>

<style scoped>
	.nav-toolbar {
		background-color: #7DBB3E !important;
	}
</style>
