<template>
  <div class="row">
      <MaterializePostCard title="Preparar o Ambiente" description="Instalar VSCode, Composer, Npm, Git, Xamp, Vue.js, Materialize" link="Ver Detalhes" icone="logo.png"></MaterializePostCard>
      <MaterializePostCard title="Basico de Vue.js" description="Entendendo Sistema De Rotas, Componentes, Propriedades, Metodos" link="Ver Detalhes" icone="HeadCoin.png"></MaterializePostCard>
      <MaterializePostCard title="SRC Dinamico" description="Utilizando o require.context é possivel pegar os assets com url dinamica" link="Ver Detalhes" icone="logo.png"></MaterializePostCard>
      <!-- <MaterializePostCard title="Titulo4" description="Quarta publicação" link="Ver Detalhes"></MaterializePostCard>
      <MaterializePostCard title="Titulo5" description="Quinta publicação" link="Ver Detalhes"></MaterializePostCard>
      <MaterializePostCard title="Titulo6" description="Sexta publicação" link="Ver Detalhes"></MaterializePostCard> -->
  </div>
</template>

<script>
import MaterializePostCard from "@/components/MaterializePostCard";

export default {
  name: "Home",
  components:{
    MaterializePostCard
  },
  data() {
    return {
};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
