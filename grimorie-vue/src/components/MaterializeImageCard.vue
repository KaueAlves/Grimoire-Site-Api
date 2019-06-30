<template>
  <div :class="'card ' + aditionalClass">
    <div class="card-image">
      <img :src="image"/>
      <span class="card-title">{{title || "Titulo Bonito"}}</span>
    </div>
    <div class="card-content white-text">
      <p>{{description || "Descrição bonita"}}</p>
    </div>
    <div class="card-action white-text">
      <a :href="link || '#'">Ver Detalhes</a>
    </div>
  </div>
</template>
<script>
import MaterializeGrid from "@/components/MaterializeGrid";
export default {
  name: "MaterializeImageCard",
  props: ["title", "subtitle", "description", "link", "image", "aditionalClass"],
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
<style scoped>
</style>
