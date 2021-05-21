
/* $(document).ready(function () {
	$.ajax({
		url: "https://mirbud-restapi.herokuapp.com/api/item/recommended/"
	}).then(function (data) {
		var i;
		for (i = 0; i < 6; i++) {
			var searchedClassName = ".item" + i + " h4.item_name";
			$(searchedClassName).append(data[i].nazwa);
		}
		for (i = 0; i < 6; i++) {
			var searchedClassName = ".item" + i + " h4.item_price";
			$(searchedClassName).append(data[i].cenaSprzedazy + "zł");
		}
		for (i = 0; i < 6; i++) {
			var searchedClassName = ".item" + i + " img.item_photo";
			$(searchedClassName).attr("src", data[i].zdjecia);
		}
		for (i = 0; i < 6; i++) {
			var searchedClassName = ".item" + i + " h4.item_rating";
			$(searchedClassName).append(data[i].ocena + "/5");
		}
	});
});

*/

Vue.component('recommended-item', {
	data: function() {
		return {
		item_index: 0,
		item_photo_url: '',
		item_name: '',
		item_price: '',
		item_rating: ''
		}
	},
	props: ['cats'],
	template: `
				<li>
					<div class="recommended_item item{{item_index}}">
						<img src={{item_photo_url}} class="item_photo">
						<h4 class="item_name">{{item_name}}</h4>
						<h4 class="item_price">Cena za sztukę: {{item_price}}</h4>
						<h4 class="item_rating">Ocena: {{item_rating}}</h4>
						<img src="img/add_to_cart.png" class="add_to_cart">
					</div>
				</li>
		`
})

app = new Vue({
	el: '.main_body',
	component: [
		
	],
	data: {
		
	},
	mounted() {
		axios.get('https://mirbud-restapi.herokuapp.com/api/item/recommended/')
		.then(response => (this.info = response))
		.catch(error => {
			window.location.href = 'error.html?error=503';
		});
		getRecommendedItems(response);
	},
	methods: {
		getRecommendedItems: function(response){
			
		}
	}
})