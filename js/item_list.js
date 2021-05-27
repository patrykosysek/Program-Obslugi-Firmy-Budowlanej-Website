app = new Vue({
	el: '.item_bar',
	data: {
		items: [], // all items list loaded from API
		viewedItems: [], // items currently rendered
		categoryQueryString: "",
		lastRenderedItemIndex: 12
	},
	created: function() {
		//get the category from urlQuery
		const urlParams = new URLSearchParams(window.location.search);
		const categoriesParam = urlParams.get('category');

		//check checkbox on given value
		var el = document.querySelector("#" + categoriesParam);
		el.click();
		this.categoryQueryString = categoriesParam;


		var queryURL = 'https://mirbud-restapi.herokuapp.com/api/item/categories/' + this.categoryQueryString;

		var data;
		// get data from API
		// fucntion must be async await to make sure
		// all data will be fetched correctly
		const sendGetRequest = async () => {
			try{
				const resp = await axios.get(queryURL);
				this.items = resp.data; 

				// items are fetched now, assign first 12 to render them
				var i;
				for (i = 0; i < this.lastRenderedItemIndex; i ++){
					this.viewedItems.push(this.items[i]);
				}
				console.log(this.viewedItems);
			}
			catch (err){
				window.location.href = 'error.html?error=503';
			}
		};
		sendGetRequest();
		
	},
	methods: {
		clickForward : function(){
			if (this.lastRenderedItemIndex == this.items.length + 1){
				return;
			}

			viewedItems = [];
			var i;
			if (this.lastRenderedItemIndex + 12 < this.items.length){
				for (i = this.lastRenderedItemIndex; i < this.lastRenderedItemIndex + 12; i++){
					this.viewedItems.push(this.items[i]);
				}
				this.lastRenderedItemIndex = this.lastRenderedItemIndex + 12;
			}
			else{
				for (i = this.lastRenderedItemIndex; i < this.items.length; i++){
					this.viewedItems.push(this.items[i]);
				}
				this.lastRenderedItemIndex = this.lastRenderedItemIndex + this.items.length;
			}
		}
	}
})

Vue.component('displayed-item', {

	methods : {
		addToCart : function(id){
			console.log(id);
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
					<button class="add_to_cart_button"  v-on:click="addToCart(item_id)">
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