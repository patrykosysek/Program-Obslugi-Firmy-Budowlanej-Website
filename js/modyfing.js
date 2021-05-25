new Vue({
  el: "#app",

  data: {
    item: {
      id: "",
      cenaSprzedazy: "",
      czyArchiwalny: true,
      nazwa: "",
      iloscNaMagazynie: "",
      opis: "",
      kategoriaId: "",
      zdjecia: "",
      materialyElektroniczne: "",
    },
    dostepne_kategorie:[],
  },

  mounted() {
    axios
      .get(
        `https://mirbud-restapi.herokuapp.com/api/item/${localStorage["item_id"]}`
      )
      .then((response) => {
        this.item.id = localStorage.getItem("item_id");
        this.item.cenaSprzedazy = response.data.cenaSprzedazy;
        this.item.nazwa = response.data.nazwa;
        this.item.iloscNaMagazynie = response.data.iloscNaMagazynie;
        this.item.opis = response.data.opis;
        this.item.kategoriaId = response.data.kategoriaId;
        this.item.zdjecia = response.data.zdjecia;
        this.item.materialyElektroniczne = response.data.materialyElektroniczne;
        this.item.czyArchiwalny = response.data.czyArchiwalny;

        console.log(response.data);


      axios.get("https://mirbud-restapi.herokuapp.com/api/categories/getAll")
      .then(
        (response) => {
          console.log(response.data);
          this.dostepne_kategorie = response.data;
          console.log(this.dostepne_kategorie);
        },
        (error) => {
          if (error.response.data.message != null) {
            alert(error.response.data.message);
          } else alert(error.response.data);
        }
      );



        //console.log(localStorage["cos"]);
        //var temp2 = JSON.parse(localStorage.getItem("cos"));
        //temp2.push(3);
        //localStorage.setItem("cos", JSON.stringify(temp2));
        //console.log(localStorage["cos"]);
      });
  },

  methods: {
    update() {
      /*
      console.log(this.item.cenaSprzedazy);
      console.log(this.item.nazwa);
      console.log(this.item.iloscNaMagazynie);
      console.log(this.item.opis);
      console.log(this.item.kategoriaId);
      console.log(this.item.zdjecia);
      console.log(this.item.materialyElektroniczne);
      console.log(this.item.czyArchiwalny);
      */

      this.item.kategoriaId = this.item.kategoriaId.toString().split(",");
      console.log(this.item.kategoriaId);

      this.item.zdjecia = this.item.zdjecia.toString().split(",");
      console.log(this.item.zdjecia);

      this.item.materialyElektroniczne = this.item.materialyElektroniczne
        .toString()
        .split(",");
      console.log(this.item.materialyElektroniczne);

      this.item.id = parseInt(this.item.id);

      axios
        .put(
          `https://mirbud-restapi.herokuapp.com/api/item/${localStorage["item_id"]}`,
          this.item
        )
        .then(
          (response) => {
            alert("Modyfikacja przebiegła pomyślnie");
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
  },
});
