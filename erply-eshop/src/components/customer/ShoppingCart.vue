<template>
	<v-container grid-list-md text-xs-center>
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
</template>

<script>
	import { mapGetters } from 'vuex'
	import ShoppingCartProduct from './ShoppingCartProduct'

	export default {
		name: "ShoppingCart",
		components: {
			shoppingCartProduct: ShoppingCartProduct
		},
		data: function () {
			return {
				headers: [
					{
						text: 'Product',
						align: 'left',
						sortable: false,
						value: 'name'
					},
					{text: 'Code', value: 'code'},
					{text: 'Store', value: 'location'},
					{text: 'Price', value: 'euros'},
				],
				customerProducts: []
			}
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
		padding: 10px;
		border-bottom: 1px solid darkgreen;
	}
</style>
