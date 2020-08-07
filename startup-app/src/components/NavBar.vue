<template>
  <div class="app-navbar">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed>
      <b-navbar-brand href="#">
        <b-img class="navbar-logo" :src="require('../assets/img/logo.png')"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="my-2 mx-5 h5" to="/">Home</b-nav-item>
          <b-nav-item class="my-2 mx-5 h5" to="/about">About</b-nav-item>
          <b-nav-item class="my-2 mx-5 h5" to="/products">Products</b-nav-item>
          <b-nav-item class="my-2 mx-5 h5" to="/pricing">Pricing</b-nav-item>
          <b-nav-item class="my-2 mx-5 h5" to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar-logo {
  max-height: 3.5rem;
  max-width: 10rem;
}
.nav-link {
  border-bottom: 2px solid #17a2b8;
}
.nav-link:hover {
  border-bottom: 2px solid #b1dbdd;
}
</style>