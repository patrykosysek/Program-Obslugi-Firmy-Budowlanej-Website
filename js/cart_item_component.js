// Functions for easy array acces from localStorage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.component('cart-item', {

	methods : {
	},
	props: ['item_class', 'item_photo_url', 'item_name', 'item_price', 'item_rating', 'item_id'],
	template: `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="img/cegla4.jpg" width="100" height="100">
            <span class="cart-item-title">Cegła 2</span>
        </div>
        <span class="cart-price cart-column">9.99 zł</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="2">
            <button class="btn btn-danger" type="button">Usuń</button>
        </div>
    </div>
		`
})