<template>
  <div class="app-home">
    <section class="container-fluid p-0 m-0">
      <b-row>
        <b-col sm="12" class="p-0 m-0">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.publicdomainpictures.net/pictures/30000/velka/beauty-of-nature-9.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.publicdomainpictures.net/pictures/30000/velka/evening-landscape-13530956185Aw.jpg"
                  class="d-block w-100"
                />
              </div>
              <div class="carousel-item">
                <img src="https://wallpapercave.com/wp/wp4088654.jpg" class="d-block w-100" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </b-col>
        <b-col class="my-auto p-1 p-md-5" md="6">
          <div class="h1 font-bolder text-center">Excellence.</div>
          <div
            class="h6 text-muted text-center"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        </b-col>
        <b-col class="p-1 p-md-5" md="6">
          <mdb-container>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
              ></iframe>
            </div>
          </mdb-container>
        </b-col>
        <b-col sm="12">
          <mdb-card class="card-image">
            <div class="text-black text-center py-5 px-4 my-5">
              <div>
                <h2 class="card-title h1-responsive pt-3 font-bold">
                  <strong>Why choose us?</strong>
                </h2>
                <p
                  class="mx-5 mb-5"
                >Voluptates eos temporibus sequi corrupti reiciendis perspiciatis repellat. Atque voluptatibus culpa veniam. Saepe aut accusantium ut at cumque esse culpa. Veniam dolores recusandae sed deleniti. Rerum et nesciunt ducimus numquam et libero incidunt. Minima voluptate repudiandae rerum. Voluptates eos temporibus sequi corrupti reiciendis perspiciatis repellat. Atque voluptatibus culpa veniam. Saepe aut accusantium ut at cumque esse culpa.</p>
                <router-link to="/pricing">
                  <mdb-btn outline="blue" size="md" icon="clone" class="my-2 p-1">Pricing</mdb-btn>
                </router-link>
                <router-link to="/products">
                  <mdb-btn outline="blue" size="md" icon="clone" class="my-2 p-1">Products</mdb-btn>
                </router-link>
              </div>
            </div>
          </mdb-card>
        </b-col>
      </b-row>
    </section>
    <section class="container-fluid"></section>
  </div>
</template>

<script>
import { mdbCard, mdbBtn } from "mdbvue";
export default {
  name: "Home",
  components: {
    mdbCard,
    mdbBtn
  }
};
</script>
