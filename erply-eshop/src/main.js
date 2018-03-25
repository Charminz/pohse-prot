import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import {routes} from './router/Router';
import store from './vuestore/store';

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
	store,
	render: h => h(App)
});
