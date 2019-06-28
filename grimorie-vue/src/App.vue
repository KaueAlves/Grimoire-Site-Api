<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE"/>
    </header>

    <main>
      <div class>
        <div class="row">
          <materialize-grid gridTamanho="12" gridTamanhoL="4">

            <materialize-card>
              <materialize-user-desc
                :userIcone="icone"
                userName="Kauê Nicoletti Alves"
                userFunction="Desenvolvedor"
                userObjective="Desenvolvendo um site com Laravel + Vue.js"
                userDescription="Objetivo é adicionar cards os minhas conquistas, fazendo um emblema para cada."
              />
            </materialize-card>

          </materialize-grid>
          <materialize-grid gridTamanho="12" gridTamanhoL="8">

            <router-view/>
            
          </materialize-grid>
        </div>
      </div>
    </main>

    <materialize-footer
      footerLogo="Grimorie"
      footerDesc="Desenvolvimento e teste de novas tecnologias"
      footerAno="2019"
      footerCor="blue"
    >
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 1</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 2</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 3</a>
      </li>
      <li>
        <a class="grey-text text-lighten-3" href="#!">Link 4</a>
      </li>
    </materialize-footer>
  </div>
</template>

<script>
import MaterializeMenu from "@/components/MaterializeMenu.vue";
import MaterializeFooter from "@/components/MaterializeFooter.vue";
import MaterializeGrid from "@/components/MaterializeGrid.vue";
import MaterializeUserDesc from "@/components/MaterializeUserDesc.vue";
import materializeCard from "@/components/MaterializeCard.vue";

export default {
  name: "App",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc,
    materializeCard
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
