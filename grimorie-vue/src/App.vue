<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE" />
    </header>

    <main>
      <div class="row">
        <MaterializeGrid gridTamanho="12" gridTamanhoL="4" aditionalClass="sidebar">
          <MaterializeBasicCard aditionalClass="grey lighten-5 z-depth-1 ">
            <MaterializeUserDesc
              userIcone="HeadCoin.png"
              userName="Kauê Nicoletti Alves"
              userFunction="Desenvolvedor"
              userObjective="Desenvolvendo um site com Laravel + Vue.js"
              userDescription="Objetivo é adicionar cards os minhas conquistas, fazendo um emblema para cada."
            />
          </MaterializeBasicCard>
          <MaterializeBasicCard aditionalClass="grey lighten-5 z-depth-1 ">
            <MaterializePostInput />
          </MaterializeBasicCard>
        </MaterializeGrid>
        <MaterializeGrid gridTamanho="12" gridTamanhoL="8" aditionalClass="main-content">
          <router-view />
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
  name: "App",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    MaterializeBasicCard,
    MaterializePostInput
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
