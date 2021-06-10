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
	el: '.list_of_orders',
	data: {
		history_of_orders : [],     // every order client ordered is stored here
        clientID : 1,               // client's ID
        items_list: []
	},
    beforeCreate() {
        const getOrdersHistory = async () => {
			try{
                var userData = sessionStorage.getObj('userData');
                this.clientID = userData.id;

                var queryURL = 'https://mirbud-restapi.herokuapp.com/api/orders/' + this.clientID;

				const resp = await axios.get(queryURL);
                if (resp.data != null){
                    document.getElementsByClassName('no_orders_text')[0].remove();
                    this.history_of_orders = resp.data; 
                    this.items_list = resp.data.przedmiotyZamowienia;
                }
			}
			catch (err){
				//window.location.href = 'error.html?error=503';
			}
		};
		getOrdersHistory();
    },
	methods: {
	}
})