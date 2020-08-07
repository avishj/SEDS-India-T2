<template>
  <div class="app-navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed>
      <b-navbar-brand href="#">
        <b-img class="navbar-logo" :src="require('../assets/img/logo.png')"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="my-2 mx-3 h5" to="/">Home</b-nav-item>
          <b-nav-item class="my-2 mx-3 h5" to="/about">About</b-nav-item>
          <b-nav-item class="my-2 mx-3 h5" to="/products">Products</b-nav-item>
          <b-nav-item class="my-2 mx-3 h5" to="/pricing">Pricing</b-nav-item>
          <b-nav-item class="my-2 mx-3 h5" to="/contact">Contact</b-nav-item>
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
  color: #dfdfdf;
  border-bottom: 2px solid #212121;
}
.nav-link:active {
  color: #ffffff;
  border-bottom: 2px solid #;
}
.nav-link:hover {
  border-bottom: 2px solid #33b5e5;
}
</style>
