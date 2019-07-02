<template>
  <LoginTemplate>
    <div class="row">
      <MaterializeGrid gridTamanho="12">
        <h2>Login:</h2>
        <input type="text" name="email" id="email" placeholder="Email">
        <input type="text" name="password" id="password" placeholder="Senha">
        <button type="submit" class="btn">Entrar</button>
        <button type="submit" class="btn">Cadastrar-se</button>
        <button type="submit" class="btn">Esqueci</button>
      </MaterializeGrid>
    </div>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import SiteTemplate from "@/templates/SiteTemplate";
import MaterializePostCard from "@/components/MaterializePostCard";
import MaterializeImageCard from "@/components/MaterializeImageCard";
import MaterializeGrid from "@/components/MaterializeGrid";
import MaterializePostInput from "@/components/MaterializePostInput";

export default {
  name: "Login",
  components: {
    MaterializePostCard,
    MaterializeImageCard,
    MaterializeGrid,
    MaterializePostInput,
    SiteTemplate,
    LoginTemplate
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
