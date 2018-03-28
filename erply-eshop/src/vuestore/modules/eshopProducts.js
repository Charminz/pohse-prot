const state = {
	products: {},
	displayedProductDetails: {}
};

const mutations = {
	'SET_PRODUCTS'(state, products) {
		state.products = products;
		localStorage.setItem('products', JSON.stringify(products));
	},
};

const actions = {
	setProducts: ({ commit }, products) => {
		commit('SET_PRODUCTS', products);
	}
};

const getters = {
	products(state) {
		return JSON.parse(localStorage.getItem('products'));
	},
	getProductById(state) {
		let products = JSON.parse(localStorage.getItem('products'));
		return keyword => products.find(element => element.id == keyword);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}
