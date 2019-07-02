<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE" />
    </header>

    <main class="">
      <div class="row">
        <!-- Lado Esquerdo -->
        <MaterializeGrid gridTamanho="12" gridTamanhoL="4" aditionalClass="sidebar">
          <SidebarLeft/>
        </MaterializeGrid>
        <!-- Lado Direito -->
        <MaterializeGrid gridTamanho="12" gridTamanhoL="8" aditionalClass="main-content">
          <slot />
        </MaterializeGrid>
      </div>
    </main>

    <materialize-footer
      footerLogo="Grimorie"
      footerDesc="Desenvolvimento e teste de novas tecnologias"
      footerAno="2019"
      footerCor="blue"
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
import SidebarLeft from "@/layout/SidebarLeft.vue"

export default {
  name: "SiteTemplate",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    MaterializeBasicCard,
    MaterializePostInput,
    SidebarLeft
  },
  data() {
    return {
      icone: "./static/assets/logo.png"
    };
  }
};
</script>
<style>
</style>
