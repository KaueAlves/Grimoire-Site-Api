<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE" />
    </header>

    <main class="container">
      <div class="row">
        <!-- Lado Esquerdo -->
        <MaterializeGrid gridTamanho="12" gridTamanhoXL="6" aditionalClass="sidebar">
          <slot name="esquerda"/>
        </MaterializeGrid>
        <!-- Lado Direito -->
        <MaterializeGrid gridTamanho="12"  gridTamanhoXL="6" aditionalClass="main-content">
          <slot name="direita"/>
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

export default {
  name: "LoginTemplate",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    MaterializeBasicCard,
    MaterializePostInput,
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>
