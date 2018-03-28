<template>
	<v-layout row wrap>
		<v-flex xs4>
			<div class="product-info">
				<img class="product-image" :src="product.image">
				<div class="product-title">
					<h2>{{ product.name }}</h2>
					<small>{{ product.productcode }}</small>
				</div>
			</div>
		</v-flex>
		<v-flex xs4>
			<div class="product-quantity">
				<v-btn class="button" icon flat @click="addProductQuantity()">
					<v-icon>plus_one</v-icon>
				</v-btn>
				<h3 class="quantity">
					{{ product.quantity }}
				</h3>
				<v-btn class="button" icon flat @click="removeProductQuantity()">
					<v-icon>exposure_neg_1</v-icon>
				</v-btn>
			</div>
		</v-flex>
		<v-flex xs4>
			<div class="product-price">
				<h3>{{ product.quantity * product.price }} {{ product.currency }}</h3>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		name: "ShoppingCartProduct",
		props: ['product'],
		methods: {
			addProductQuantity() {
				this.$store.dispatch('addToShoppingCart', this.product);
				this.$forceUpdate();

			},
			removeProductQuantity() {
				this.$store.dispatch('removeFromShoppingCart', this.product);
				this.$forceUpdate();
			},
		},
	}
</script>

<style scoped>
	.product-info {
		display: flex;
		justify-content: start;
	}

	.product-image {
		height: 100px;
		width: 100px;
		margin-right: 30px;
	}

	.product-title {
		margin: auto;
	}

	.product-quantity {
		display: flex;
		justify-content: center;
		height: 100%;
	}

	.quantity {
		margin-top: auto;
		margin-bottom: auto;
		width: 100px;
		padding: 5px;
		background-color: #B1BD84;
	}

	.product-price {
		height: 100%;
	}

	.product-price h3 {
		margin: auto;
	}

	.button {
		margin-top:auto;
		margin-bottom:auto;
	}
</style>
