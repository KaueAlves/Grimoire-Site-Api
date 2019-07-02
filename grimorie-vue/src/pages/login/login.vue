<template>
  <LoginTemplate>
    <span slot="esquerda">
      <SidebarLeft />
    </span>
    <span slot="direita">
      <div class>
        <MaterializeGrid gridTamanho="12">
          <h2>Login:</h2>
          <form action>
            <input type="text" name="email" id="email" placeholder="Email" />
            <input type="text" name="password" id="password" placeholder="Senha" />
            <button type="submit" class="btn">Entrar</button>
            <button type="submit" class="btn">Cadastrar-se</button>
            <button type="submit" class="btn">Esqueci</button>
          </form>
        </MaterializeGrid>
      </div>
    </span>
  </LoginTemplate>
</template>

<script>
import LoginTemplate from "@/templates/LoginTemplate";
import SiteTemplate from "@/templates/SiteTemplate";
import MaterializePostCard from "@/components/MaterializePostCard";
import MaterializeImageCard from "@/components/MaterializeImageCard";
import MaterializeGrid from "@/components/MaterializeGrid";
import MaterializePostInput from "@/components/MaterializePostInput";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Login",
  components: {
    MaterializePostCard,
    MaterializeImageCard,
    MaterializeGrid,
    MaterializePostInput,
    SiteTemplate,
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
