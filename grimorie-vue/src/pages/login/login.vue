<template>
  <SiteTemplate>
    <div class="row">
      <MaterializeGrid gridTamanho="12">
        <h1>Login</h1>
      </MaterializeGrid>
    </div>
  </SiteTemplate>
</template>

<script>
import SiteTemplate from "@/templates/SiteTemplate";
import MaterializePostCard from "@/components/MaterializePostCard";
import MaterializeImageCard from "@/components/MaterializeImageCard";
import MaterializeGrid from "@/components/MaterializeGrid";
import MaterializePostInput from "@/components/MaterializePostInput";

export default {
  name: "Login",
  components: {
    MaterializePostCard,
    MaterializeImageCard,
    MaterializeGrid,
    MaterializePostInput,
    SiteTemplate
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
