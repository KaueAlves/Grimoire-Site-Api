import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/Home.vue";
import Login from "./pages/login/Login.vue";
import Cadastro from "./pages/cadastro/Cadastro.vue";
import Perfil from "./pages/perfil/Perfil.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login/",
      name: "Login",
      component: Login
    },
    {
      path: "/cadastro",
      name: "Cadastro",
      component: Cadastro
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: Perfil
    }
  ]
});
