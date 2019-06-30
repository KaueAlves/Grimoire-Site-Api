<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE" />
    </header>

    <main>
      <div class="row">
        <materialize-grid gridTamanho="12" gridTamanhoL="4" aditionalClass="sidebar">
          <MaterializeBasicCard aditionalClass="grey lighten-5 z-depth-1 ">
            <materialize-user-desc
              userIcone="HeadCoin.png"
              userName="Kauê Nicoletti Alves"
              userFunction="Desenvolvedor"
              userObjective="Desenvolvendo um site com Laravel + Vue.js"
              userDescription="Objetivo é adicionar cards os minhas conquistas, fazendo um emblema para cada."
            />
          </MaterializeBasicCard>
          <span class="clear-both"></span>
        </materialize-grid>
        <materialize-grid gridTamanho="12" gridTamanhoL="8" aditionalClass="main-content">
          <router-view />
        </materialize-grid>
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

export default {
  name: "App",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    MaterializeBasicCard
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
