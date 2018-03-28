<template>
	<v-container v-if="shoppingCart.length > 0" grid-list-md text-xs-center>
		<v-layout row wrap class="cart-header">
			<v-flex xs4>
				<div class="product-info">
					<h3>Product:</h3>
				</div>
			</v-flex>
			<v-flex xs4>
				<div class="product-info">
					<h3>Quantity:</h3>
				</div>
			</v-flex>
			<v-flex xs4>
				<div class="product-info">
					<h3>Price:</h3>
				</div>
			</v-flex>
		</v-layout>
		<div v-for="product in shoppingCart" :key="product.id" class="product-row">
			<shopping-cart-product :product="product"></shopping-cart-product>
		</div>
	</v-container>
	<v-container class="empty-error" v-else grid-list-md text-xs-center>
		<h1>
			Your shopping cart is empty
		</h1>
		<h4>In order to buy items you have to add them to your shopping cart</h4>
		<div class="return-section">
			<h3>Return to our shop:</h3>
			<v-btn color="green darken-4" class="back-btn" :to="{ name: 'HomePage' }"> Back </v-btn>
		</div>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
	import ShoppingCartProduct from './ShoppingCartProduct'

	export default {
		name: "ShoppingCart",
		components: {
			shoppingCartProduct: ShoppingCartProduct
		},
		computed: {
			...mapGetters({
				shoppingCart: 'shoppingCartProducts'
			}),
		}
	}
</script>

<style scoped>
	.product-row {
		background-color: #B2C492;
		padding: 20px;
		border-bottom: 1px solid darkgreen;
	}

	.cart-header {
		background-color: #4C9130;
		color: white;
		padding: 10px;
		border-bottom: 1px solid darkgreen;
	}

	.empty-error {
		margin-top: 30px;
	}

	.return-section {
		margin-top: 50px;
	}

	.back-btn {
		color: #C5E1A5;
	}

	.back-btn:hover {
		background-color: #2E7D32 !important;
	}
</style>
