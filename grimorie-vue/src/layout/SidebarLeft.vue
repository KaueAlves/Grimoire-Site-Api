<template>
  <div class="">
    <!-- Card Usuário -->
    <MaterializeBasicCard aditionalClass="grey lighten-5 z-depth-1 ">
      <MaterializeUserDesc
        userIcone="HeadCoin.png"
        userName="Kauê Nicoletti Alves"
        userFunction="Desenvolvedor"
        userObjective="Desenvolvendo um site com Laravel + Vue.js"
        userDescription="Objetivo é adicionar cards os minhas conquistas, fazendo um emblema para cada."
      />
    </MaterializeBasicCard>
    <!-- Input de Conquista -->
    <MaterializeBasicCard aditionalClass="grey lighten-5 z-depth-1 ">
      <MaterializePostInput />
    </MaterializeBasicCard>
  </div>
</template>

<script>
import MaterializeBasicCard from "@/components/MaterializeBasicCard"
import MaterializePostInput from "@/components/MaterializePostInput"
import MaterializeUserDesc  from "@/components/MaterializeUserDesc"
import MaterializeGrid from "@/components/MaterializeGrid"
export default {
  name: "LayoutLadoEsquedo",
  components: {
    MaterializeBasicCard,
    MaterializePostInput,
    MaterializeUserDesc,
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
