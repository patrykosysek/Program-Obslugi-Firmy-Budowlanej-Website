if (document.readyState == 'loading') {

	document.addEventListener('DOMContentLoaded', ready)
}
else {

	ready()
}

function ready() {

	var removeCartItemButtons = document.getElementsByClassName('btn-danger')
	console.log(removeCartItemButtons)
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i]
		button.addEventListener('click', removeCartItem)
	}


	var quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}

	document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
	alert("Dziękujemy za złożenie zamówienia")
	var cartItems = document.getElementsByClassName('cart-items')[0]
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild)
	}
	updateCartTotal()
}

function quantityChanged(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {//chcemy 1 lub wiecej
		input.value = 1
	}
	updateCartTotal()
}


function removeCartItem(event) {
	//usuwanie produktów z koszyka
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.remove()
	updateCartTotal()

}

function updateCartTotal() {
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

