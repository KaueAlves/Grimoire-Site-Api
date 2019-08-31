<template>
  <LoginTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <h2>Login:</h2>

      <input type="text" name="email" id="email" placeholder="Email" />
      <input type="text" name="password" id="password" placeholder="Senha" />
      <button type="submit" class="btn">Entrar</button>
      <router-link to="/cadastro" class="btn orange">Cadastre-se</router-link>
    </span>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import MaterializeGrid from "@/components/MaterializeGrid";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Login",
  components: {
    MaterializeGrid,
    LoginTemplate,
    SidebarLeft
  },
  data() {
    return {
      cadastro: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
