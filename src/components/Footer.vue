<template>
  <div class="app-footer">
    <mdb-footer color="blue" class="font-small">
      <mdb-container class="text-left pt-3">
        <mdb-row>
          <mdb-col sm="6">
            <h5 class="title">Quixicari</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam eum doloremque velit architecto doloribus aperiam! Esse ipsum perferendis dolore voluptatum a quas rem modi nobis, iste dolores veniam! Qui.</p>
          </mdb-col>
          <mdb-col sm="3">
            <h5 class="title">Links</h5>
            <ul>
              <li class="list-unstyled">
                <router-link to="/">Home</router-link>
              </li>
              <li class="list-unstyled">
                <router-link to="/about">About</router-link>
              </li>
              <li class="list-unstyled">
                <router-link to="/products">Products</router-link>
              </li>
              <li class="list-unstyled">
                <router-link to="/pricing">Pricing</router-link>
              </li>
              <li class="list-unstyled">
                <router-link to="/contact">Contact Us</router-link>
              </li>
            </ul>
          </mdb-col>
          <mdb-col sm="3">
            <h5 class="title">Social Media</h5>
            <ul>
              <li class="footer-list list-unstyled">
                <router-link to="/social/linkedin">
                  <span class="icon">
                    <i class="fab fa-facebook"></i>
                  </span>
                  <span>&nbsp;Facebook</span>
                </router-link>
              </li>
              <li class="footer-list list-unstyled">
                <router-link to="/social/linkedin">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>&nbsp;Twitter</span>
                </router-link>
              </li>
              <li class="footer-list list-unstyled">
                <router-link to="/social/linkedin">
                  <span class="icon">
                    <i class="fab fa-instagram"></i>
                  </span>
                  <span>&nbsp;Instagram</span>
                </router-link>
              </li>
              <li class="footer-list list-unstyled">
                <router-link to="/social/medium">
                  <span class="icon">
                    <i class="fa fa-medium"></i>
                  </span>
                  <span>&nbsp;Medium</span>
                </router-link>
              </li>
              <li class="footer-list list-unstyled">
                <router-link to="/social/linkedin">
                  <span class="icon">
                    <i class="fab fa-linkedin"></i>
                  </span>
                  <span>&nbsp;Linkedin</span>
                </router-link>
              </li>
            </ul>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 Copyright
          Quixicari
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import mdbFooter from "./FooterCustom.vue";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
ul {
  padding-inline-start: 0px;
}
</style>
