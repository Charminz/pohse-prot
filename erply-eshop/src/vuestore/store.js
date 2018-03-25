import Vue from 'vue';
import Vuex from 'vuex';
import customer from './modules/customer';
import eshopProducts from './modules/eshopProducts';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		customer,
		eshopProducts
	}
});
