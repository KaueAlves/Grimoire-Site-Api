<template>
    <div :class="'col s'+ gridTamanho">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "MaterializeGrid",
  props: ['gridTamanho'],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
