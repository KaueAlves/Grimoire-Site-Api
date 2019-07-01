<template>
  
    <MaterializeGrid gridTamanho="12">
      <h2>Publique sua conquista:</h2>
      <form method="GET" action="#" class="row">

        <MaterializeGrid gridTamanho="6">
          <input v-model="post_title" placeholder="Qual sua conquista?" id="post_title" name="post_title" type="text" class="validate" />
          <label for="post_title">Titulo</label>
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="6">
          <input v-model="post_image" placeholder="@/assets/HeadCoin.png" id="post_image" type="text" name="icone" class="validate" />
          <label for="post_image">Icone da Conquista (URL)</label>
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" aditionalClass="input-field">
          <textarea v-model="description" id="description" name="description" class="materialize-textarea"></textarea>
          <label for="description">Descreva sua conquista!</label>
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" aditionalClass="right-align" v-if="post_title && description">
          <button id="post_submit" type="submit" class="btn offset-s10">Publicar</button>
        </MaterializeGrid>

      </form>
    </MaterializeGrid>

</template>

<script>
import MaterializeGrid from "@/components/MaterializeGrid";

export default {
  name: "MaterializePostInput",
  props: [],
  components: {
    MaterializeGrid
  },
  data() {
    return {
      description:'',
      post_title:'',
      post_image:'',
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 24px;
  font-weight: 600;
}
</style>
