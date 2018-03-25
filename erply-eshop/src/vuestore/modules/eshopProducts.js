const state = {
	products: []
};

const mutations = {
	'SET_PRODUCTS'(state, products) {
		state.products = [products];
	},
};

const actions = {
	initStocks: ({ commit }) => {
		commit('SET_PRODUCTS', stocks);
	}
};

const getters = {
	products: state => {
		return state.products;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}
