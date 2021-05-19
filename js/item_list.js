function generateItem(number, photo_url, item_name, item_price, item_rating) {
	var html = "";
	html += '<li>';
	html += '<div class="item item' + number + '">';
	html += '<img src="' + photo_url + '" class="item_photo">';
	html += '<h4 class="item_name">' + item_name + '</h4>';
	html += '<h4 class="item_price">Cena za sztukę: ' + item_price + '</h4>';
	html += '<h4 class="item_rating">Ocena: ' + item_rating + '</h4>';
	html += '<img src="img/add_to_cart.png" class="add_to_cart">';
	html += '</div>';
	html += '</li>';

	return html;
}

window.onload = readCategoriesFromUrlQuery;

function readCategoriesFromUrlQuery() {
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('category');
	var el = document.querySelector("#" + myParam);
	el.click();
}

function filter() {
	var bud = document.getElementById("bud");
	var ogr = document.getElementById("ogr");
	var tec = document.getElementById("tec");
	var mie = document.getElementById("mie");
	var kuc = document.getElementById("kuc");
	var laz = document.getElementById("laz");
	var ele = document.getElementById("ele");

	if (mie.checked == true) {
		$.getJSON('https://mirbud-restapi.herokuapp.com/api/item/categories/meble', function (data) {
			var html = "";
			for (var i = 0; i < data.length; i++) {
				html += generateItem(data[i].id, data[i].zdjecia, data[i].nazwa, data[i].cenaSprzedazy, data[i].ocena);
			}
			document.getElementById("lista").innerHTML += html;
		});
	}
}

const data = {
	"email": "email@osyslubissacpalska.com",
	"haslo": "haslo",
	"imie": "imie",
	"kodPocztowy": "kod",
	"miejscowosc": "miejscowosc",
	"nazwisko": "nazwisko",
	"nrTelefonu": "123456789",
	"ulicaNrDomu": "ulica"
};

function doregistration() {
	fetch('https://mirbud-restapi.herokuapp.com/api/clients/registration', {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}