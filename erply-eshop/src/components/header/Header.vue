<template>
	<div>
		<v-toolbar
			dark
			app
			clipped-left
			class="nav-toolbar"
		>
			<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>
				Erply E-shop
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<!--<v-text-field-->
			<!--flat-->
			<!--solo-inverted-->
			<!--label="Search"-->
			<!--class="hidden-sm-and-down"-->
			<!--&gt;</v-text-field>-->
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-navigation-drawer
			clipped
			app
			class="nav-drawer"
			v-model="drawer">
			<v-list>
				<v-list-tile>
					<v-list-tile-content>
						<v-list-tile-title>Shop</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data: function () {
			return {
				drawer: false
			}
		}
	}
</script>

<style scoped>
	.nav-toolbar {
		background-color: #7DBB3E !important;
	}

	.nav-drawer {
		background-color: #B8CE9C;
		-webkit-box-shadow: 2px 4px 11px 0px rgba(0,0,0,0.48);
		-moz-box-shadow: 2px 4px 11px 0px rgba(0,0,0,0.48);
		box-shadow: 2px 4px 11px 0px rgba(0,0,0,0.48);

	}
</style>
