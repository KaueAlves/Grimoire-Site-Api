<template>
  <div>
    <nav :class="cor || red">
      <div class="nav-wrapper container">
        <a href="#!" class="brand-logo">{{logo || "Site"}}</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">PHP</a>
          </li>
          <li>
            <a href="badges.html">C++</a>
          </li>
          <li>
            <a href="collapsible.html">C#</a>
          </li>
          <li>
            <a href="mobile.html">JS</a>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="sass.html">PHP</a>
      </li>
      <li>
        <a href="badges.html">C++</a>
      </li>
      <li>
        <a href="collapsible.html">C#</a>
      </li>
      <li>
        <a href="mobile.html">JS</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MaterializeMenu",
  props: ["logo", "url", "cor"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
