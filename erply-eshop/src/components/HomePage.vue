<template>
	<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex sm6 md4 v-for="product in productsList[pageNumber + 1]" :key="product.id">
				<product-card :product="product"></product-card>
			</v-flex>
		</v-layout>
		<div class="text-xs-center">
			<v-pagination :length="productsList.length" v-model="pageNumber" circle :total-visible="8"></v-pagination>
		</div>
	</v-container>
</template>

<script>
	import { Axios } from '../api/RetrieveData';
	import Product from './products/Product.vue';

	export default {
		name: 'HomePage',
		components: {
			productCard: Product
		},
		data() {
			return {
				products: [],
				productsList: [[]],
				numberOfProducts: 0,
				pageNumber: 1
			}
		},
		created() {
			Axios.get()
				.then(response => {
					this.products = response.data;
					this.numberOfProducts = response.data.length;
					let prodNr = 0;
					let page = 0;

					for (let prod = 0; prod < this.numberOfProducts; prod++) {
						if (prodNr === 24) {
							prodNr = 0;
							page++;
							this.productsList.push([]);
						}
						this.productsList[page].push(this.products[prod]);
						prodNr++;
					}
				})
				.catch(e => {
					console.log(e);
				})
		}
	}

</script>

<style scoped>

</style>
