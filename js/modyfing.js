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
  },

  mounted() {
    axios
      .get(
        `https://mirbud-restapi.herokuapp.com/api/item/${JSON.parse(
          localStorage.getItem("item_id")
        )}`
      )
      .then((response) => {
        this.item.id = JSON.parse(localStorage.getItem("item_id"));
        this.item.cenaSprzedazy = response.data.cenaSprzedazy;
        this.item.nazwa = response.data.nazwa;
        this.item.iloscNaMagazynie = response.data.iloscNaMagazynie;
        this.item.opis = response.data.opis;
        this.item.czyArchiwalny = response.data.czyArchiwalny;

        this.przedmiot_kategorie = response.data.kategoriaId;
        this.przedmiot_zdjecia = response.data.zdjecia;
        this.przedmiot_materialy = response.data.materialyElektroniczne;

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
      });
  },

  methods: {
    update() {
      this.item.iloscNaMagazynie = parseInt(this.item.iloscNaMagazynie);
      this.item.id = parseInt(this.item.id);
      this.item.cenaSprzedazy = parseInt(this.item.cenaSprzedazy);

      axios
        .put(
          `https://mirbud-restapi.herokuapp.com/api/item/${JSON.parse(
            localStorage.getItem("item_id")
          )}`,
          this.item
        )
        .then(
          (response) => {
            alert("Modyfikacja przebiegła pomyślnie");
          },
          (error) => {
            alert("Wypełnij prawidłowo wszystkie pola!");
          }
        );
    },
    addCategory() {
      axios
        .put(
          `https://mirbud-restapi.herokuapp.com/api/item/category/${JSON.parse(
            localStorage.getItem("item_id")
          )}`,
          {
            categoryName: this.dodaj_kategoria,
          }
        )
        .then(
          (response) => {
            alert("Pomyślnie dodano kategorię");

            this.przedmiot_kategorie.push(this.dodaj_kategoria);
            this.dodaj_kategoria = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    deleteCategory() {
      axios
        .delete(
          `https://mirbud-restapi.herokuapp.com/api/item/category/${JSON.parse(
            localStorage.getItem("item_id")
          )}/${this.dodaj_kategoria}`
        )
        .then(
          (response) => {
            alert("Pomyślnie usunięto kategorię");
            const index = this.przedmiot_kategorie.indexOf(
              this.dodaj_kategoria
            );
            this.przedmiot_kategorie.splice(index, 1);
            this.dodaj_kategoria = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
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
      axios
        .put(
          `https://mirbud-restapi.herokuapp.com/api/item/image/${JSON.parse(
            localStorage.getItem("item_id")
          )}`,
          {
            id: 0,
            ref: this.dodaj_zdjecie,
          }
        )
        .then(
          (response) => {
            alert("Pomyślnie dodano zdjęcie");

            this.przedmiot_zdjecia.push(this.dodaj_zdjecie);
            this.dodaj_zdjecie = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    deleteImage() {
      axios
        .delete(
          `https://mirbud-restapi.herokuapp.com/api/item/image/${JSON.parse(
            localStorage.getItem("item_id")
          )}/${this.dodaj_zdjecie}`
        )
        .then(
          (response) => {
            alert("Pomyślnie usunięto zdjęcie");
            const index = this.przedmiot_zdjecia.indexOf(this.dodaj_zdjecie);
            this.przedmiot_zdjecia.splice(index, 1);
            this.dodaj_zdjecie = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    addMaterial() {
      axios
        .put(
          `https://mirbud-restapi.herokuapp.com/api/item/electronical/${JSON.parse(
            localStorage.getItem("item_id")
          )}`,
          {
            id: 0,
            ref: this.dodaj_material,
          }
        )
        .then(
          (response) => {
            alert("Pomyślnie dodano materiał elektroniczny");

            this.przedmiot_materialy.push(this.dodaj_material);
            this.dodaj_material = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    deleteMaterial() {
      axios
        .delete(
          `https://mirbud-restapi.herokuapp.com/api/item/electronical/${JSON.parse(
            localStorage.getItem("item_id")
          )}/${this.dodaj_material}`
        )
        .then(
          (response) => {
            alert("Pomyślnie usunięto materiał elektroniczny");
            const index = this.przedmiot_materialy.indexOf(this.dodaj_material);
            this.przedmiot_materialy.splice(index, 1);
            this.dodaj_material = "";
          },
          (error) => {
            if (error.response.data.message != null) {
              alert(error.response.data.message);
            } else alert(error.response.data);
          }
        );
    },
    goBack() {
      window.location.replace(
        "testing.html"
      );
    },
  },
});
