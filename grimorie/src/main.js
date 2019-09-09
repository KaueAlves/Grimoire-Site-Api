// Vue
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// Materialize
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

// Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret, faBorderAll, faSitemap, faTable, faFileAlt, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// Personalizado
import "./scss/app.scss"

library.add(faUserSecret, faBorderAll, faTable, faFileAlt, faSitemap, faSearch, faSignOutAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
