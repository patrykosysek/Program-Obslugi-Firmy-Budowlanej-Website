new Vue({
  el: "#app",

  data: {
    item: {
      id: localStorage["item_id"],
      cenaSprzedazy: "",
      czyArchiwalny: true,
      nazwa: "",
      iloscNaMagazynie: "",
      opis: "",
      kategorie: [''],
      zdjecia: [""],
      materialyElektroniczne: [""],
    },
    completed: false,
  },

  mounted() {
    axios
      .get("https://mirbud-restapi.herokuapp.com/api/item/1")
      .then((response) => {
        this.item.cenaSprzedazy = response.data.cenaSprzedazy;
        this.item.nazwa = response.data.nazwa;
        this.item.iloscNaMagazynie = response.data.iloscNaMagazynie;
        this.item.opis = response.data.opis;
        this.item.kategorie = response.data.kategoriaId;
        this.item.zdjecia = response.data.zdjecia;
        this.item.materialyElektroniczne = response.data.materialyElektroniczne;
        this.item.czyArchiwalny = response.data.czyArchiwalny;
        console.log(response.data);
        console.log(this.item.kategorie);
      });
  },

  methods: {},
});
