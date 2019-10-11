import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home/Home.vue";
import Login from "./pages/login/login.vue";
import Cadastro from "./pages/cadastro/Cadastro.vue";

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
    }
  ]
});
