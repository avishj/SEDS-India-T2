<template>
  <div class="app-404 container-fluid">
    <div class="container-404">
      4
      <i class="far fa-question-circle fa-spin"></i>
      4
    </div>
    <b-row>
      <b-col md="8" class="mx-auto">
        <span class="h5 font-weight-bold text-center">
          Maybe this page was moved?
          <br />Maybe it has been deleted?
          <br />Did you make a mistake while typing?
          <br />Maybe it is hiding in quarantine?
          <br />Maybe it never existed in the first place?
        </span>
        <hr class="custom-hr" />
        <span>Let's go&nbsp;</span>
        <router-link to="/">home</router-link>
        <span>&nbsp;and try from there.</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>

<style scoped>
.container-404 {
  text-align: center;
  display: inline-block;
  font-size: 18vw;
  width: 100%;
  margin: auto;
}
.custom-fa {
  font-size: 15.5vw;
  /* vertical-align: middle; */
  line-height: 100%;
}
.custom-hr {
  background-color: #f4f4f4;
}
</style>