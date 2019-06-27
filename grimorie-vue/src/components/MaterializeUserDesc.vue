<template>
  <div>
    <materialize-grid gridTamanho="2">
      <img src="@/assets/logo.png" alt class="circle responsive-img">
    </materialize-grid>
    <materialize-grid gridTamanho="10">
      <span class="black-text">Uma descrição simples de um usuário padrão.</span>
    </materialize-grid>
  </div>
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
