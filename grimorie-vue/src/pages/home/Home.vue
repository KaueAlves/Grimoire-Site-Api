<template>
  <SiteTemplate>
    <span slot="esquerda">
      <SidebarLeft :home="home"/>
    </span>
    <span slot="direita">
      <div class="row">
        <MaterializeGrid gridTamanho="12">
          <MaterializeImageCard
            class="postCompleto"
            title="Publicação Principal"
            description="A publicação principal eh um componente a parte."
            image="https://jovemnerd.com.br/wp-content/uploads/2019/03/one-punch-man-easter-eggs-mob2.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="Preparar Ambiente"
            description="Instalar VSCode, Composer, Npm, Git, Xamp, Vue.js, Materialize."
            link="Ver Detalhes"
            icone="PremioCobre.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="Basico de Vue.js"
            description="Entendendo Sistema De Rotas, Componentes, Propriedades, Metodos."
            link="Ver Detalhes"
            icone="PremioSilver.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="SRC Dinamico"
            description="Utilizando o require.context é possivel pegar os assets com url dinamica."
            link="Ver Detalhes"
            icone="PremioSilver.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="Organiza com Slots"
            description="Organizei os templates e os componentes definindo nomes para os slots usados."
            link="Ver Detalhes"
            icone="PremioGold.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="Criar Templates"
            description="App.vue chama apenas a view, e os templates chamam os componentes."
            link="Ver Detalhes"
            icone="PremioSilver.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>

        <MaterializeGrid gridTamanho="12" gridTamanhoM="4">
          <MaterializePostCard
            title="V-If V-Model"
            description="Atrele um elemento a uma variavel usando v-model, verifique o valor com v-if"
            link="Ver Detalhes"
            icone="PremioCobre.png"
            aditionalClass="blue-grey darken-1"
          />
        </MaterializeGrid>
        
      </div>
    </span>
  </SiteTemplate>
</template>

<script>
import SiteTemplate from "@/templates/SiteTemplate";
import MaterializePostCard from "@/components/MaterializePostCard";
import MaterializeImageCard from "@/components/MaterializeImageCard";
import MaterializeGrid from "@/components/MaterializeGrid";
import MaterializePostInput from "@/components/MaterializePostInput";
import SidebarLeft from "@/layout/SidebarLeft.vue";

export default {
  name: "Home",
  components: {
    MaterializePostCard,
    MaterializeImageCard,
    MaterializeGrid,
    MaterializePostInput,
    SiteTemplate,
    SidebarLeft
  },
  data() {
    return {
      home: true,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
