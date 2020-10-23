import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import * as views from "../views/views.js";

const routes = [
  {
    name: "home",
    path: "/",
    component: views.AppHome,
  },
  {
    path: "*",
    component: views.AppNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
