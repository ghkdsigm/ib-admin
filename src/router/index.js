import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("@/views/Chart.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/eventlist/EventRegister.vue"),
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("@/components/eventlist/EventEdit.vue"),
  },
  {
    path: "/pbguide",
    name: "PbGuide",
    component: () => import("@/components/publishing/PublishingList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes,
});

export default router;
