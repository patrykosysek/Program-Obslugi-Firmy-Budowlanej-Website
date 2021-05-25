app = new Vue({
	el: '.main_body',
	data: {
		items: [] // recommended items loaded from API
	},
	beforeCreate() {
		axios.get('https://mirbud-restapi.herokuapp.com/api/item/recommended/')
		.then(response => {
			this.items = response.data;
		})
		.catch(error => {
			window.location.href = 'error.html?error=503';
		});
	}
})

Vue.component('recommended-item', {

	props: ['item_class', 'item_photo_url', 'item_name', 'item_price', 'item_rating'],
	template: `
				<li>
					<div :class="item_class">
						<img :src="item_photo_url" class="item_photo">
						<h4 class="item_name">{{item_name}}</h4>
						<h4 class="item_price">Cena za sztukę: {{item_price}}</h4>
						<h4 class="item_rating">Ocena: {{item_rating}}</h4>
						<img src="img/add_to_cart.png" class="add_to_cart">
					</div>
				</li>
		`
})