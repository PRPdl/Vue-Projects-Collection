import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Weather from '../views/Weather.vue';
import PageNotFound from '../views/PageNotFound.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Weather",
    name: "Weather",
    component: Weather,
  },
  {
  path: '/*',
  name: 'PageNotFound',
  component: PageNotFound
  }
];

const router = new VueRouter({
  routes,
});

export default router;