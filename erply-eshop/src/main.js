import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import {routes} from './router/Router'

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
