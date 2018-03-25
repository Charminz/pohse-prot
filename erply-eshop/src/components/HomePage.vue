<template>
	<v-container class="products-container" fluid grid-list-md>
		<div v-show="!contentLoaded" class="show-loading">
			<v-progress-circular class="loading-icon" indeterminate :size="70" :width="7"></v-progress-circular>
		</div>
		<div style="display:flex" v-show="contentLoaded">
			<div>
				<v-list class="sidebar">
					<v-subheader>
						<v-icon>location_on</v-icon>
						Location Filters:
					</v-subheader>
					<v-list-tile @click.prevent="filterByCountry('All')">
						<v-list-tile-action>
							<v-icon small>fiber_manual_record</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								All
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile @click.prevent="filterByCountry('Estonia')">
						<v-list-tile-action>
							<v-icon small>fiber_manual_record</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								Estonia
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile @click.prevent="filterByCountry('Finland')">
						<v-list-tile-action>
							<v-icon small>fiber_manual_record</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								Finland
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</div>
			<div style="width: 70%; margin: auto">
				<v-layout row wrap>
					<v-flex sm6 md4 v-for="product in productsList[pageNumber + 1]" :key="product.id">
						<product-card :product="product"></product-card>
					</v-flex>
				</v-layout>
				<div class="text-xs-center">
					<v-pagination :length="productsList.length" v-model="pageNumber" circle :total-visible="8"></v-pagination>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
	import { Axios } from '../api/RetrieveData';
	import Product from './products/Product.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'HomePage',
		components: {
			productCard: Product
		},
		data() {
			return {
				productsList: [[]],
				numberOfProducts: 0,
				pageNumber: 1,
				contentLoaded: false,
				selectedCountry: 'All',
			}
		},
		computed: {
			allProducts() {
				return this.$store.getters.products;
			}
		},
		methods: {
			filterByCountry(type) {
				if (type != this.selectedCountry) {
					let prodNr = 0;
					let page = 0;
					this.productsList = [[]];
					this.selectedCountry = type;

					for (let prod = 0; prod < this.numberOfProducts; prod++) {
						if (this.allProducts[prod].store === this.selectedCountry || this.selectedCountry === "All") {
							if (prodNr === 24) {
								prodNr = 0;
								page++;
								this.productsList.push([]);
							}
							this.productsList[page].push(this.allProducts[prod]);
							prodNr++;
						}
					}
					this.contentLoaded = true;
				}
			}
		},
		created() {
			Axios.get()
				.then(response => {
					this.$store.dispatch('setProducts', response.data);

					this.numberOfProducts = this.allProducts.length;
					let prodNr = 0;
					let page = 0;

					for (let prod = 0; prod < this.numberOfProducts; prod++) {
						if (prodNr === 24) {
							prodNr = 0;
							page++;
							this.productsList.push([]);
						}
						this.productsList[page].push(this.allProducts[prod]);
						prodNr++;
					}
					this.contentLoaded = true;
				})
				.catch(e => {
					console.log(e);
				})
		}
	}

</script>

<style scoped>
	.products-container {
		width: 100%;
	}

	.show-loading {
		width: 100%;
		margin-top: 40px;
	}

	.loading-icon {
		margin: auto !important;
		width: 100% !important;
		color: #36541C;
	}

	.sidebar {
		background-color: transparent !important;
		color: black !important;
	}
</style>
