<template>
	<v-container grid-list-md text-xs-center>
		<v-layout row wrap>
			<v-flex xs6>
				<v-card color="transparent" flat>
					<!--<v-card-media class="px-0" height="87vh" :src="getProduct.image"></v-card-media>-->
					<v-card-media class="px-0" height="87vh" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg"></v-card-media>

				</v-card>
			</v-flex>
			<v-flex xs6>
				<v-card dark color="secondary" height="100%">
					<v-card-text>
						<div>
							<h3>{{ getProduct.name }}</h3>
							<small>(ID:{{ getProduct.productcode}})</small>
							<br>
							<small>{{ getProduct.department }}</small>
						</div>
						<v-divider></v-divider>
						<div class="additional-info">
							<div class="info-section">
								<span v-if="getProduct.instock" style="color: lightgreen">In Stock</span>
								<span v-else style="color: lightcoral"> Out of Stock</span>
							</div>

							<div class="info-section">
								<h4>Location: </h4>
								<p>{{ getProduct.store }}</p>
							</div>
							<div class="info-section">
								<h4>Price: </h4>
								<p>{{ getProduct.price }} {{ getProduct.currency }}</p>
							</div>
							<div class="info-section">
								<h4>Description: </h4>
								<p>{{ getProduct.description }}</p>
							</div>
						</div>
						<v-btn :disabled="!getProduct.instock" large @click.prevent="addToCart">
							<v-icon color="green" medium >add_shopping_cart</v-icon>
							<span>
								Add to shopping cart
							</span>
						</v-btn>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		name: "ProductDetails",
		props: ['productId', 'product'],
		methods: {
			addToCart() {
				return this.$store.dispatch('addToShoppingCart', this.product);
			}
		},
		computed: {
			getProduct() {
				if (!this.product) {
					return this.$store.getters.getProductById(this.productId);
				}
				return this.product;
			}
		}
	}
</script>

<style scoped>
	.product-image {

	}

	.additional-info {
		width: 75%;
		margin: auto;
		padding-top: 40px;
		text-align: start;
	}

	.info-section {
		margin-bottom: 20px;
	}
</style>
