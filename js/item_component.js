// Functions for easy array acces from localStorage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.component('displayed-item', {

	methods : {
		addToCart : function(item_id, item_name, item_photo_url, item_price, item_rating){
			var cartArray = localStorage.getObj('cart');
			cartArray.push({
				item_id: item_id,
				item_name: item_name,
				item_photo_url: item_photo_url,
				item_price: item_price,
				item_rating: item_rating
			})
			localStorage.setObj('cart', cartArray);
			// Display a toast message
			this.$toast.open({
				message: "Przedmiot: " + item_name + " został pomyślnie dodany do koszyka",
				type: "success",
				duration: 5000,
				dismissible: true
			})
		}
	},
	props: ['item_class', 'item_photo_url', 'item_name', 'item_price', 'item_rating', 'item_id'],
	template: `
				<li>
				<div :class="item_class">
					<img :src="item_photo_url" class="item_photo">
					<h4 class="item_name">{{item_name}}</h4>
					<h4 class="item_price">Cena za sztukę: {{item_price}}</h4>
					<h4 class="item_rating">Ocena: {{item_rating}}</h4>
					<button class="add_to_cart_button"  v-on:click="addToCart(item_id, item_name, item_photo_url, item_price, item_rating)">
						<div class="add_to_cart_box">
							<img src="img/add_to_cart.png" class="add_to_cart">
							<p>
								Dodaj do koszyka
							</p>
						</div>
					</button>
				</div>
			</li>
		`
})