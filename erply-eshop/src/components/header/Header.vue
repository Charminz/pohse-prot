<template>
	<div>
		<v-toolbar
			dark
			app
			clipped-left
			class="nav-toolbar"
		>
			<router-link style="color: white; text-decoration: none;" :to="{ name: 'HomePage' }">
				<v-toolbar-title>
					Erply E-shop
				</v-toolbar-title>
			</router-link>

			<v-spacer></v-spacer>
			<v-toolbar-items class="shopping-cart-item">
				<v-btn class="cart-btn" flat :to="{ name: 'ShoppingCart'}">
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

	.shopping-cart-item {
		width: 230px;
		height: 100%;
		margin-right: 0;
		padding-right: 0;
	}
</style>
