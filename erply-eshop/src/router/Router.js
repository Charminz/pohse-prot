import HomePage from '../components/HomePage.vue'
import ProductDetails from '../components/products/ProductDetails'
import ShoppingCart from '../components/customer/ShoppingCart'

export const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	},
	{
		path: '/productInfo/:productId',
		name: 'ProductDetails',
		component: ProductDetails,
		props: true
	},
	{
		path: '/shoppingcart',
		name: 'ShoppingCart',
		component: ShoppingCart
	},
];

