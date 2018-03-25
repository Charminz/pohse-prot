<template>
	<v-card class="ma-4 product-card" hover :to="{ name: 'ProductDetails', params: { productId: product.id , product: product }}">
		<v-card-media src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg"
					  height="100px"></v-card-media>
		<!--<v-card-media :src="product.image" height="100px"></v-card-media>-->
		<v-card-title primary-title>
			<div class="product-title">
				<h3 class="headline">{{ product.name }}</h3>
				<h5 class="grey--text">{{ product.department }}</h5>
				<span v-if="product.instock" style="color: lightgreen">In Stock</span>
				<span v-else style="color: lightcoral"> Out of Stock</span>
			</div>
		</v-card-title>
		<v-card-text>
			<h4>Price: {{ product.price }} {{ product.currency }}</h4>
			<span>Location: {{ product.store }}</span>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn icon large @click.prevent="addToCart">
				<v-icon color="green" medium >add_shopping_cart</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		props: ['product'],
		methods: {
			addToCart() {
				return this.$store.dispatch('addToShoppingCart', this.product);
			}
		}
	}
</script>

<style scoped>
	.info-btn {
		background-color: #D1E2F0 !important;
	}

	.product-card {
		width: 16em !important;
		text-align: center;
		padding-bottom: 1em;
	}

	.product-title {
		width: 16em;
		height: 7em;
	}

	.headline {
		font-size: 16px !important;
	}
</style>
