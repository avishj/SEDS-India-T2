<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
$image-path: "~@/../mdb/mdbvue/img";
@import "~@/../mdb/mdbvue/scss/mdb-free.scss";

@import "./assets/css/lib/bootstrap.css";
@import "./assets/css/lib/bootstrap-vue.css";
</style>
