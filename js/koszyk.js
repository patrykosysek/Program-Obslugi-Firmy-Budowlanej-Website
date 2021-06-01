// Functions for easy array acces from localStorage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

Vue.use(VueToast, {

});

app = new Vue({
	el: '.cart-items',
	data: {
		cart: [] // cart items loaded from localStorage
	},
	beforeCreate() {
		// load cart items from localStorage
		this.cart = localStorage.getObj('cart');
		console.log(this.cart[0].item_name);
	},
	mounted() {

		var removeCartItemButtons = document.getElementsByClassName('btn-danger')
		console.log(removeCartItemButtons)
		for (var i = 0; i < removeCartItemButtons.length; i++) {
			var button = removeCartItemButtons[i]
			button.addEventListener('click', this.removeCartItem)
		}
	
		var quantityInputs = document.getElementsByClassName('cart-quantity-input')
		for (var i = 0; i < quantityInputs.length; i++) {
			var input = quantityInputs[i]
			input.addEventListener('change', this.quantityChanged)
		}
	
		document.getElementsByClassName('btn-purchase')[0].addEventListener('click', this.purchaseClicked)
	},
	methods: {
		purchaseClicked : function(){
			alert("Dziękujemy za złożenie zamówienia")
			var cartItems = document.getElementsByClassName('cart-items')[0]
			while (cartItems.hasChildNodes()) {
				cartItems.removeChild(cartItems.firstChild)
			}
			updateCartTotal()
		},
		quantityChanged : function(event){
			var input = event.target
			if (isNaN(input.value) || input.value <= 0) {//chcemy 1 lub wiecej
				input.value = 1
			}
			updateCartTotal()
		},
		removeCartItem : function(event){
			//usuwanie produktów z koszyka
			var buttonClicked = event.target
			buttonClicked.parentElement.parentElement.remove()
			updateCartTotal()
		},
		updateCartTotal : function(){
			var cartItemContainer = document.getElementsByClassName('cart-items')[0]
			var cartRows = cartItemContainer.getElementsByClassName('cart-row')
			var total = 0
			for (var i = 0; i < cartRows.length; i++) {
				var cartRow = cartRows[i]
				var priceElement = cartRow.getElementsByClassName('cart-price')[0]
				var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
				[0]
				var price = parseFloat(priceElement.innerText.replace(' zł', ''))
				var quantity = quantityElement.value
				total = total + (price * quantity)
			}
			total = Math.round(total * 100) / 100 //zeby nie bylo miliona liczb po przecinku
			document.getElementsByClassName('cart-total-price')[0].innerText = total + ' zł'
		}
	}
})
