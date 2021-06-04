new Vue({
  el: "#app",

  data: {
    item: {
      cenaSprzedazy: 0,
      cenaZakupu: 0,
      czyArchiwalny: false,
      id: 0,
      iloscNaMagazynie: 0,
      kategoriaId: [""],
      materialyElektroniczne: [""],
      nazwa: "",
      opis: "",
      zdjecia: [""],
    },
    dostepne_kategorie: [],
    przedmiot_kategorie: [],
    przedmiot_zdjecia: [],
    przedmiot_materialy: [],
    dodaj_kategoria: "",
    dodaj_zdjecie: "",
    dodaj_material: "",
    completed: false,
  },

  mounted() {

    axios
      .get("https://mirbud-restapi.herokuapp.com/api/categories/getAll")
      .then(
        (response) => {
          this.dostepne_kategorie = response.data;
        },
        (error) => {
          if (error.response.data.message != null) {
            alert(error.response.data.message);
          } else alert(error.response.data);
        }
      );

  },
  watch: {
    completed() {

      this.item.cenaSprzedazy = 0;
      this.item.cenaZakupu = 0;
      this.item.czyArchiwalny = false;
      this.item.iloscNaMagazynie = 0;
      this.item.kategoriaId = [""];
      this.item.materialyElektroniczne = [""];
      this.item.nazwa = "";
      this.item.opis = "";
      this.item.zdjecia = [""];

      this.przedmiot_kategorie = [];
      this.przedmiot_zdjecia = [];
      this.przedmiot_materialy = [];

      this.completed = false;
    },
  },

  methods: {

    addCategory() {

      if (this.dostepne_kategorie.indexOf(this.dodaj_kategoria) == -1) {
        alert("Podaj prawidłową kategorię!");
        this.dodaj_kategoria = "";
      }
      else {
        this.przedmiot_kategorie.push(this.dodaj_kategoria);
        this.dodaj_kategoria = "";
      }

    },
    deleteCategory() {

      const index = this.przedmiot_kategorie.indexOf(this.dodaj_kategoria
      );

      this.przedmiot_kategorie.splice(index, 1);
      this.dodaj_kategoria = "";

    },
    addNewCategory() {
      axios
        .post("https://mirbud-restapi.herokuapp.com/api/categories/add", {
          id: 0,
          kategoriaPrzedmiotyId: [0],
          nazwaKategorii: this.dodaj_kategoria,
        })
        .then(
          (response) => {
            alert("Pomyślnie dodano nową kategorię");
            this.dostepne_kategorie.push({
              id: 0,
              kategoriaPrzedmiotyId: [0],
              nazwaKategorii: this.dodaj_kategoria,
            });

            this.dodaj_kategoria = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    addImage() {


      this.przedmiot_zdjecia.push(this.dodaj_zdjecie);
      this.dodaj_zdjecie = "";

    },
    deleteImage() {

      const index = this.przedmiot_zdjecia.indexOf(this.dodaj_zdjecie);
      this.przedmiot_zdjecia.splice(index, 1);
      this.dodaj_zdjecie = "";

    },
    addMaterial() {

      this.przedmiot_materialy.push(this.dodaj_material);
      this.dodaj_material = "";

    },
    deleteMaterial() {

      const index = this.przedmiot_materialy.indexOf(this.dodaj_material);
      this.przedmiot_materialy.splice(index, 1);
      this.dodaj_material = "";



    },
    addItem() {

      if (this.item.cenaSprzedazy == 0 || this.item.cenaZakupu == 0) {
        alert("Podaj prawidłową cenę zakupu i sprzedaży");
      }
      else {
        this.item.iloscNaMagazynie = parseInt(this.item.iloscNaMagazynie);
        this.item.cenaSprzedazy = parseInt(this.item.cenaSprzedazy);
        this.item.kategoriaId = this.przedmiot_kategorie;
        this.item.materialyElektroniczne = this.przedmiot_materialy;
        this.item.zdjecia = this.przedmiot_zdjecia;

        axios.post("https://mirbud-restapi.herokuapp.com/api/item", this.item).then(
          (response) => {
            alert("Pomyślnie dodano przedmiot");
            this.completed = true;
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
      }

    },
  },
});