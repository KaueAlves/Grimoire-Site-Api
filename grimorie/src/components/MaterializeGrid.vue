<template>
  <div
    :class="'col s'+(gridTamanho || '12') + ' m'+(gridTamanhoM || '') + ' l'+(gridTamanhoL || '') + ' xl'+(gridTamanhoXL || '') + ' ' + (aditionalClass || '') "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MaterializeGrid",
  props: [
    "gridTamanho",
    "gridTamanhoM",
    "gridTamanhoL",
    "gridTamanhoXL",
    "aditionalClass"
  ],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
