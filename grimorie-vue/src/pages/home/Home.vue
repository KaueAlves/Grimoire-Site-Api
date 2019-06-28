<template>
  <div class="row">
      <MaterializePostCard title="Titulo1" description="Primeira publicação" link="Ver Detalhes" icone=""></MaterializePostCard>
      <!-- <MaterializePostCard title="Titulo2" description="Segunda publicação" link="Ver Detalhes"></MaterializePostCard>
      <MaterializePostCard title="Titulo3" description="Terça publicação" link="Ver Detalhes"></MaterializePostCard>
      <MaterializePostCard title="Titulo4" description="Quarta publicação" link="Ver Detalhes"></MaterializePostCard>
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
