const state = {
	totalPrice: 0,
	shoppingCart: []
};

const mutations = {
	'ADD_PRODUCT_TO_CART'(state, product) {
		const record = state.shoppingCart.find(element => element.id == product.id);

		if (record) {
			record.quantity++;
		} else {
			product.quantity = 1;
			state.shoppingCart.push(product);
		}
		state.totalPrice += product.price;
	},
	'REMOVE_PRODUCT_FROM_CART'(state, product) {
		const record = state.shoppingCart.find(element => element.id == product.id);

		if (record.quantity > 1) {
			record.quantity--
		} else {
			state.shoppingCart.splice(state.shoppingCart.indexOf(record), 1);
		}

		state.totalPrice -= product.price;
	}
};

const actions = {
	addToShoppingCart({ commit }, product) {
		commit('ADD_PRODUCT_TO_CART', product);
	},
	removeFromShoppingCart({ commit }, product) {
		commit('REMOVE_PRODUCT_FROM_CART', product);
	},
};

const getters = {
	shoppingCartProducts(state) {
		return state.shoppingCart;
	},
	totalPrice(state) {
		return state.totalPrice;
	},
};

export default {
	state,
	mutations,
	actions,
	getters
}
