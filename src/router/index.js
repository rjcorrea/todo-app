import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Login";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Login
    }
  ],
  mode: "history"
});
