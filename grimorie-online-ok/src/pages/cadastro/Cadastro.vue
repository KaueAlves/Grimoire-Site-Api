<template>
  <LoginTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <h2>Cadastre-se:</h2>
      <input type="text" name="username" id="username" placeholder="Usuário" />
      <input type="text" name="email" id="email" placeholder="Email" />
      <input type="text" name="password" id="password" placeholder="Senha" />
      <input type="text" name="checkPassword" id="checkPassword" placeholder="Confirme a Senha" />
      <button type="submit" class="btn">Entrar</button>
      <router-link to="/login" class="btn orange">Já tenho conta</router-link>
      <!-- <button type="submit" class="btn">Esqueci</button> -->
    </span>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import MaterializeGrid from "@/components/MaterializeGrid";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Cadastro",
  components: {
    MaterializeGrid,
    LoginTemplate,
    SidebarLeft
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
