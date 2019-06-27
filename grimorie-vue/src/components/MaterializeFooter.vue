<template>
  <footer class="page-footer" :class="footerCor">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{footerLogo || "Logo n Definido"}}</h5>
          <p
            class="grey-text text-lighten-4"
          >{{footerDesc|| "Desc n Definido"}}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
             <slot></slot>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © {{footerAno}} Copyright
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MaterializeFooter",
  props: ['footerLogo','footerDesc','footerAno','footerCor'],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
