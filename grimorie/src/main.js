// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Materialize
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import "./scss/app.scss";

// Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faBorderAll,
  faSitemap,
  faTable,
  faFileAlt,
  faSearch,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// libraries
library.add(
  faUserSecret,
  faBorderAll,
  faTable,
  faFileAlt,
  faSitemap,
  faSearch,
  faSignOutAlt
);

// Plugins
Vue.use(VueAxios, axios);

// Componentes
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Configs
Vue.config.productionTip = false;

// Prototypes
Vue.prototype.$apiUrl = "http://localhost:8000";

new Vue({
  router,
  store,
  mounted() {
    M.AutoInit();
  },
  render: h => h(App)
}).$mount("#app");
