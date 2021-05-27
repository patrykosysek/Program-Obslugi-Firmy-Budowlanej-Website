new Vue({
  el: "#app",

  template: ` <div>
  <div class="container">
    <h1>Rejestracja</h1>
    <p>Wpisz swoje dane aby założyć konto.</p>
    <hr />
    <span class="category_filter_element">
      <input
        type="checkbox"
        id="client"
        name="category1"
        value="client"
        v-model="client"
      />
      <label for="category1"> Klient </label><br />
    </span>
    <span class="category_filter_element">
      <input
        type="checkbox"
        id="manager"
        name="category2"
        value="manager"
        v-model="manager"
      />
      <label for="category2"> Menadżer </label><br />
    </span>
    <span class="category_filter_element">
      <input
        type="checkbox"
        id="admin"
        name="category3"
        value="admin"
        v-model="admin"
      />
      <label for="category3"> Admin </label><br />
    </span>
    <p></p>
    <label for="imie"><b>Imię</b></label>
    <input
      class="reg_log_input"
      type="text"
      placeholder="Imię"
      name="imie"
      id="imie"
      v-model="user.imie"
      required
    />
    <label for="nazwisko"><b>Nazwisko</b></label>

    <input
      class="reg_log_input"
      type="text"
      placeholder="Nazwisko"
      name="nazwisko"
      id="nazwisko"
      v-model="user.nazwisko"
      required
    />

    <label for="email"><b>Email</b></label>

    <input
      class="reg_log_input"
      type="text"
      placeholder="Email"
      name="email"
      id="email"
      v-model="user.email"
      required
    />

    <label for="psw"><b>Hasło</b></label>
    <input
      class="reg_log_input"
      type="password"
      placeholder="Hasło"
      name="psw"
      id="psw"
      v-model="user.haslo"
      required
    />

    <label for="psw-repeat"><b>Powtórz hasło</b></label>
    <input
      class="reg_log_input"
      type="password"
      placeholder="Powtórz hasło"
      name="psw-repeat"
      id="psw-repeat"
      v-model="reapet_password"
      required
    />

    <label for="phone_number"
      ><b>Numer telefonu (wraz z numerem kierunkowym)</b></label
    >
    <input
      class="reg_log_input"
      type="text"
      placeholder="Nr Telefonu"
      name="phone_number"
      id="phone_number"
      v-model="user.nrTelefonu"
      required
    />

    <h2>Adres do wysyłek wysyłek</h2>

    <label for="address_street"><b>Ulica i numer domu</b></label>
    <input
      class="reg_log_input"
      type="text"
      placeholder="Ulica i nr domu"
      name="address_street"
      id="address_street"
      v-model="user.ulicaNrDomu"
      required
    />
    <label for="address_city"><b>Miasto</b></label>
    <input
      class="reg_log_input"
      type="text"
      placeholder="Miasto"
      name="address_city"
      id="address_city"
      v-model="user.miejscowosc"
      required
    />
    <label for="address_postal"><b>Kod pocztowy</b></label>
    <input
      class="reg_log_input"
      type="text"
      placeholder="Kod pocztowy"
      name="address_postal"
      id="address_postal"
      v-model="user.kodPocztowy"
      required
    />
   
    <button @click="register" class="registerbtn">Zarejestruj użytkownika</button>
  </div>
</div>`,

  data: {
    reapet_password: "",
    client: false,
    manager: false,
    admin: false,
    url: "",
    isOk: false,
    user: {
      email: "",
      haslo: "",
      id: 0,
      imie: "",
      kodPocztowy: "",
      miejscowosc: "",
      nazwisko: "",
      nrTelefonu: "",
      ulicaNrDomu: "",
    },
    completed: false,
  },

  watch: {
    completed() {
      this.user.email = "";
      this.user.haslo = "";
      this.user.imie = "";
      this.user.kodPocztowy = "";
      this.user.miejscowosc = "";
      this.user.nazwisko = "";
      this.user.nrTelefonu = "";
      this.user.ulicaNrDomu = "";
      this.reapet_password = "";
      this.completed = false;
    },
  },

  methods: {
    register() {
      if (this.admin == true) {
        this.url =
          "https://mirbud-restapi.herokuapp.com/api/clients/registration/admin";
        this.isOk = true;
      } else if (this.manager == true) {
        this.url =
          "https://mirbud-restapi.herokuapp.com/api/clients/registration/manager";
        this.isOk = true;
      } else if (this.client == true) {
        this.url =
          "https://mirbud-restapi.herokuapp.com/api/clients/registration";
        this.isOk = true;
      } else alert("Wybierz użytkownika do zarejestrowania");

      if (this.isOk == true) {
        this.isOk == false;
        console.log(this.user);
        if (this.user.haslo == this.reapet_password) {
          axios.post(this.url, this.user).then(
            (response) => {
              console.log(this.user);
              alert("Rejestracja przebiegła pomyślnie");
              this.completed = true;
            },
            (error) => {
              if (error.response.data.message != null) {
                alert(error.response.data.message);
              } else alert(error.response.data);
            }
          );
        } else {
          alert("Hasła się nie zgadzają");
          this.user.haslo = "";
          this.reapet_password = "";
        }
      }
    },
  },
});
