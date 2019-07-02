<template>
  <div>
    <nav :class="cor || red">
      <div class="nav-wrapper container">
        <a href="/#/" class="brand-logo">{{logo || "Site"}}</a>
        <a href="/#/" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <slot name="menu-desktop" />
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <slot name="menu-mobile" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "MaterializeMenu",
  props: ["logo", "url", "cor"],
  mounted(){
    $(document).ready(function() {
      $(".sidenav").sidenav();
    });
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
