import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/player',
    name: "Player",
    component: () => import("../views/Player.vue"),
  },
  {
    path: '/player/:id',
    name: "Player",
    component: () => import("../views/Player.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
