<template>
  <div>
    <div class="navbar-fixed">
      <nav :class="menuClass || red">
        <div class="nav-wrapper container">
<<<<<<< HEAD
          <router-link class="brand-logo" to="/#/">{{logo || "Site"}}</router-link>
=======
          <router-link to="/#/" class="brand-logo">{{logo || "Site"}}</router-link>
>>>>>>> c4f58873dd8069c0fcc87750026309139f2aa524
          <a href="/#/" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <slot name="menu-desktop" />
          </ul>
        </div>
      </nav>
    </div>

    <ul class="sidenav" id="mobile-demo">
      <slot name="menu-mobile" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "MaterializeMenu",
  props: ["logo", "url", "menuClass"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
