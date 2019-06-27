<template>
  <div id="app">
    <header>
      <materialize-menu cor="blue" logo="GRIMORIE"/>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <materialize-grid gridTamanho="4">
            <materialize-user-desc/>
          </materialize-grid>
          <materialize-grid gridTamanho="8">
            <router-view/>
          </materialize-grid>
        </div>
      </div>
    </main>

    <materialize-footer
      footerLogo="AAAAA"
      footerDesc="Testando vue.js"
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

export default {
  name: "App",
  components: {
    MaterializeMenu,
    MaterializeFooter,
    MaterializeGrid,
    MaterializeUserDesc
  }
};
</script>

<style>
</style>
