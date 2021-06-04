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
	el: '.main_body',
	data: {
		items: [] // recommended items loaded from API
	},
	beforeCreate() {
		axios.get('https://mirbud-restapi.herokuapp.com/api/item/recommended/')
		.then(response => {
			this.items = response.data;
			document.getElementsByClassName('loader_indicator')[0].remove();
		})
		.catch(error => {
			window.location.href = 'error.html?error=503';
		});
	},
	mounted() {
		// remove and create new cart ONLY FOR DEBUG PURPOSES
		localStorage.removeItem('cart');
		var cart = [];
		localStorage.setObj('cart', cart);
	},
})

app2 = new Vue({
	el : '.nav_bar',
	data :{
		user_name : 'Niezalogowany - Gość',
		no_of_items : 0
	},
	mounted() {
		// Get the user email to be displayed on the page
		var userData = sessionStorage.getObj('userData');
		this.user_name = userData.email;
	},
})