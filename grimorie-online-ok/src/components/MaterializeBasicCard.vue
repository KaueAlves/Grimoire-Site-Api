<template>
  <div :class="'card-panel ' + aditionalClass">
    <div class="row valign-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializeBasicCard",
  props: ["aditionalClass"],
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
  div.row.valign-wrapper{
    margin: 0px;
  }
</style>
