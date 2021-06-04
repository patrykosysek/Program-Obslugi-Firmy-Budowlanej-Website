app = new Vue({
  el: "#app",
  data: {
    items: [],
    search: "",
  },

  mounted() {
  
    /*
    axios
      .get("https://mirbud-restapi.herokuapp.com/api/item/name/ceg")
      .then(
        (response) => {
          this.items = response.data;
          console.log(this.items)
        },
        (error) => {
          if (error.response.data.message != null) {
            alert(error.response.data.message);
          } else alert(error.response.data);
        }
      );
      */
      console.log(this.items);
  },
  methods: {
    searchItems() {

        const sendGetRequest = async () => {
			try{
				const resp = await axios.get(`https://mirbud-restapi.herokuapp.com/api/item/name/ceg`);
				this.items = resp.data; 
                console.log(this.items);
				
			}
			catch (err){
				window.location.href = 'error.html?error=503';
			}
		};
		sendGetRequest();
    },
    check(){
        console.log(this.items);
    },
  },
});
