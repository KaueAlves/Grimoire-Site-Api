<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    $(document).ready(function() {
      $(".sidenav").sidenav();
    });
  },
  components: {},
  data() {
    return {};
  }
};
</script>
<style>
</style>
