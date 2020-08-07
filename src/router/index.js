import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NProgress from "nprogress";
import "../assets/css/lib/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home | Quixicari" },
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "About Us | Quixicari" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { title: "Contact Us | Quixicari" },
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/pricing",
    name: "Pricing",
    meta: { title: "Pricing | Quixicari" },
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/Pricing.vue")
  },
  {
    path: "/products",
    name: "Products",
    meta: { title: "Products | Quixicari" },
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404 Not Found | Quixicari" },
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];
/* eslint-disable */
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
