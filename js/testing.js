new Vue({
  el: "#app",

  data: {
    id: "",
  },

  methods: {
    test() {
      console.log(this.id);
      localStorage.setItem("item_id", this.id);
      //var temp = [1, 2];
      //localStorage.setItem("cos", JSON.stringify(temp));

      window.location.replace(
        "D:/REPO/Program-Obslugi-Firmy-Budowlanej-Website/item_updating.html"
      );
    },
  },
});
