<template>
  <div class="row">
    <MaterializeGrid class="s" gridTamanho="12" >
      <MaterializeImageCard
        class="postCompleto"
        title="Publicação Principal"
        description="A publicação principal eh um componente a parte."
        image="https://jovemnerd.com.br/wp-content/uploads/2019/03/one-punch-man-easter-eggs-mob2.png"
        aditionalClass="blue-grey darken-1"
      />
    </MaterializeGrid>

    <MaterializeGrid class="s" gridTamanho="12" gridTamanhoL="4" >
      <MaterializePostCard
        title="Preparar o Ambiente"
        description="Instalar VSCode, Composer, Npm, Git, Xamp, Vue.js, Materialize"
        link="Ver Detalhes"
        icone="logo.png"
        aditionalClass="blue-grey darken-1"
      />
    </MaterializeGrid>

    <MaterializeGrid class="s" gridTamanho="12" gridTamanhoL="4">
      <MaterializePostCard
        title="Basico de Vue.js"
        description="Entendendo Sistema De Rotas, Componentes, Propriedades, Metodos"
        link="Ver Detalhes"
        icone="HeadCoin.png"
        aditionalClass="blue-grey darken-1"
      />
    </MaterializeGrid>

    <MaterializeGrid class="s" gridTamanho="12" gridTamanhoL="4">
      <MaterializePostCard
        title="SRC Dinamico"
        description="Utilizando o require.context é possivel pegar os assets com url dinamica"
        link="Ver Detalhes"
        icone="logo.png"
        aditionalClass="blue-grey darken-1"
      />
    </MaterializeGrid>

  </div>
</template>

<script>
import MaterializePostCard from "@/components/MaterializePostCard";
import MaterializeImageCard from "@/components/MaterializeImageCard";
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "Home",
  components: {
    MaterializePostCard,
    MaterializeImageCard,
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
