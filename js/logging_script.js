app2 = new Vue({
	el : '.nav_bar',
	data :{
		user_name : 'Niezalogowany - Gość'
	},
	mounted() {
		// Get the user email to be displayed on the page
		var userData = sessionStorage.getObj('userData');
		if(this.user_name != null){
			this.user_name = userData.email;
			document.getElementsByClassName('login_btn')[0].remove();
		}
	},
})