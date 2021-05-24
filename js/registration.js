new Vue({
  el: "#app",

  template: `    <div>
  <div class="nav_bar">
    <a href="index.html"><img src="img/logo_small.png" class="logo" /></a>
    <form class="search_bar">
      <input
        type="text"
        id="fsearch"
        name="fsearch"
        placeholder="Wpisz szukany przedmiot..."
      />
    </form>

    <div class="nav_bar_cart_and_user">
      <div class="user">
        <h4>Witaj gościu!</h4>
      </div>
      <div class="cart_all">
        <a href="koszyk.html"><img src="img/cart.png" class="cart" /> </a>
        <p class="item_number">Ilość przedmiotów w koszyku:</p>
      </div>
      <a href="logowanie.html">
        <button class="login_btn" type="button">
          Zaloguj/Zarejestruj się
        </button>
      </a>
    </div>
  </div>
  <div class="categories_bar">
    <ul>
      <li>
        <a href="item_list.html?category=bud">Budowanie</a>
      </li>
      <li>
        <a href="item_list.html?category=ogr">Ogród i wypoczynek</a>
      </li>
      <li>
        <a href="item_list.html?category=tec">Technika</a>
      </li>
      <li>
        <a href="item_list.html?category=mie">Mieszkanie</a>
      </li>
      <li>
        <a href="item_list.html?category=kuc">Kuchnia</a>
      </li>
      <li>
        <a href="item_list.html?category=laz">Łazienka</a>
      </li>
      <li>
        <a href="item_list.html?category=ele">Elektronika</a>
      </li>
    </ul>
  </div>
  <div class="container">
  <button @click="test">halo</button>
    <h1>Rejestracja</h1>
    <p>Wpisz swoje dane aby założyć konto.</p>
    <hr />
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
    <hr />
    <p>
      Tworząc konto zgadzasz się z naszym
      <a class="links" href="regulamin.html">Regulaminem</a>
      i
      <a class="links" href="politykaprywatnosci.html">
        Polityką Prywatności
      </a>
      .
    </p>
    <button @click="register" class="registerbtn">Zarejestruj się</button>
  </div>

  <div class="container signin">
    <p>
      Posiadasz już konto?
      <a class="links" href="logowanie.html">Zaloguj się</a>.
    </p>
  </div>
  <div class="footer">
    <div class="contact">
      <p class="contact_element">
        Tel: <br />
        <b>123-456-789</b>
      </p>
      <p class="contact_element">
        E-mail:<br />
        <b>tab@Mirbud.pl</b>
      </p>
      <p class="contact_element">
        Adres:<br />
        <b>Abc 12<br /></b>
        <b>12-345, ABC<br /></b>
        <b>Polska</b>
      </p>
    </div>
    <p class="cookies_info">
      W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
      Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
      indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
      dotyczących cookies oznacza, że będą one zamieszczane w Państwa
      urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
      ustawień dotyczących cookies.
    </p>
  </div>
</div>`,

  data: {
    reapet_password: "",
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
      if (this.user.haslo == this.reapet_password) {
        axios
          .post(
            "https://mirbud-restapi.herokuapp.com/api/clients/registration",
            this.user
          )
          .then(
            (response) => {
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
    },
    test() {
      localStorage["item_id"] = 1;

      window.location.replace(
        "D:/REPO/Program-Obslugi-Firmy-Budowlanej-Website/item_updating.html"
      );
    },
  },
});
