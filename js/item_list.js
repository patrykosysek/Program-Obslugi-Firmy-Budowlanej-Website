function generateItem(number, photo_url, item_name, item_price, item_rating){
	var html = "";
	html +=	'<li>';
	html +=	'<div class="item item'+ number +'">';
	html +=	'<img src="' + photo_url + '" class="item_photo">';
	html +=	'<h4 class="item_name">' + item_name + '</h4>';
	html +=	'<h4 class="item_price">Cena za sztukę: ' + item_price +'</h4>';
	html +=	'<h4 class="item_rating">Ocena: ' + item_rating +'</h4>';
	html +=	'<img src="img/add_to_cart.png" class="add_to_cart">';
	html +=	'</div>';
	html +=	'</li>';
}

function generateItems(){
	var html
}

window.onload = readCategoriesFromUrlQuery;

function readCategoriesFromUrlQuery(){
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('category');
	var el = document.querySelector("#" + myParam);
	el.click();
}