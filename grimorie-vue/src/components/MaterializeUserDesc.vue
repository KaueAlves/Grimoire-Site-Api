<template>
  <!-- <div class="col s12 m8 offset-m2 l6 offset-l3"> -->
  <materialize-grid tamanho="12">
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <!-- <div class="col s2"> -->
        <materialize-grid tamanho="2">
          <img src="@/assets/logo.png" alt class="circle responsive-img">
          <!-- notice the "circle" class -->
        </materialize-grid>
        <!-- </div> -->
        <!-- <div class="col s10"> -->
          <materialize-grid tamanho="10">
            <span
              class="black-text"
            >Uma descrição simples de um usuário padrão.</span>
          </materialize-grid>
        <!-- </div> -->
      </div>
    </div>
  </materialize-grid>

  <!-- </div> -->
</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializeUserDesc",
  props: ["gridTamanho"],
  components: {
    MaterializeGrid
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
