<template>
  <div class="row">
    <materialize-grid gridTamanho="12">
      <materialize-grid
        gridTamanho="12"
        gridTamanhoXL="4"
        aditionalClass="s-center-align xl-left-align"
      >
        <img :src="getAssets(userIcone) || ''" alt class="responsive-img" />
      </materialize-grid>
      <materialize-grid
        gridTamanho="12"
        gridTamanhoXL="8"
        aditionalClass="s-center-align xl-left-align"
      >
        <div class="userInfo">
          <h2 class="black-text">{{userName|| 'username'}}</h2>
          <h3 class="black-text">{{userFunction|| 'fuction'}}</h3>
        </div>
      </materialize-grid>
      <materialize-grid gridTamanho="12" aditionalClass="s-center-align xl-left-align">
        <p>{{userObjective || "Objetivo" }}</p>
        <p>{{userDescription || "Descrição"}}</p>
      </materialize-grid>
    </materialize-grid>
  </div>
</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializeUserDesc",
  props: [
    "userName",
    "userFunction",
    "userObjective",
    "userDescription",
    "userIcone"
  ],
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
div.userInfo h2 {
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: bold;
}
div.userInfo h3 {
  margin: 0px;
  font-size: 16px;
}
div.userInfo {
  padding-top: 10px;
}
</style>
