<template>
  <div id="app">
    <materialize-menu menuClass="blue" logo="GRIMORIE">
      <span slot="menu-desktop">
        <li>
          <a href="sass.html">PHP</a>
        </li>
        <li>
          <a href="badges.html">C++</a>
        </li>
        <li>
          <a href="collapsible.html">C#</a>
        </li>
        <li>
          <a href="mobile.html">JS</a>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </span>
      <span slot="menu-mobile">
        <li>
          <a href="sass.html">PHP</a>
        </li>
        <li>
          <a href="badges.html">C++</a>
        </li>
        <li>
          <a href="collapsible.html">C#</a>
        </li>
        <li>
          <a href="mobile.html">JS</a>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </span>
    </materialize-menu>

    <main class="container">
      <div class="row">
        <!-- Lado Esquerdo -->
        <MaterializeGrid gridTamanho="12" gridTamanhoL="6" aditionalClass="sidebar">
          <slot name="esquerda" />
        </MaterializeGrid>
        <!-- Lado Direito -->
        <MaterializeGrid gridTamanho="12" gridTamanhoL="6" aditionalClass="main-content">
          <slot name="direita" />
        </MaterializeGrid>
      </div>
    </main>

    <materialize-footer
      footerLogo="Grimorie"
      footerDesc="Desenvolvimento e teste de novas tecnologias"
      footerAno="2019"
      footerClass="blue"
    />
  </div>
</template>

<script>
import MaterializeMenu from "@/components/MaterializeMenu.vue";
import MaterializeFooter from "@/components/MaterializeFooter.vue";
import MaterializeGrid from "@/components/MaterializeGrid.vue";
import MaterializeUserDesc from "@/components/MaterializeUserDesc.vue";
import MaterializeBasicCard from "@/components/MaterializeBasicCard.vue";
import MaterializePostInput from "@/components/MaterializePostInput.vue";

export default {
  name: "LoginTemplate",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    MaterializeBasicCard,
    MaterializePostInput
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>
