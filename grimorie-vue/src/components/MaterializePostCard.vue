<template>
  <div :class="'card ' + aditionalClass">
    <div class="card-content white-text">
      <materialize-grid gridTamanho="12" gridTamanhoL="12" aditionalClass="s-center-align">
        <img :src="getAssets(icone) || ''" alt class="responsive-img" style="max-width:80px;" />
      </materialize-grid>
      <span class="card-title">{{title}}</span>
      <p>{{description}}</p>
    </div>
    <div class="card-action">
      <a :href="link">Ver Detalhes</a>
      <a href="#">Curtir</a>
    </div>
  </div>
</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializePostCard",
  props: ["title", "subtitle", "description", "link", "icone","aditionalClass"],
  methods: {
    getAssets(source) {
      var image = require.context("../assets/", false);
      return image("./" + source);
    }
  },
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
