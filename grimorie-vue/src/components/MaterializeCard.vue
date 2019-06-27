<template>
  <materialize-grid gridTamanho="12">
    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row valign-wrapper">
        <slot></slot>
      </div>
    </div>
  </materialize-grid>
</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializeCard",
  props: [],
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
