new Vue({
  el: "#app",
  data: {
    dostepne_kategorie: [],
    dodaj_kategoria: "",
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
  methods: {
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
    deleteCategory() {
      axios
        .delete(
          `https://mirbud-restapi.herokuapp.com/api/categories/delete/${this.dodaj_kategoria}`
        )
        .then(
          (response) => {
            alert("Pomyślnie usunięto kategorię");

            const index = this.dostepne_kategorie.findIndex(
              (item) => item.nazwaKategorii == this.dodaj_kategoria
            );
            this.dostepne_kategorie.splice(index, 1);
            this.dodaj_kategoria = "";
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
