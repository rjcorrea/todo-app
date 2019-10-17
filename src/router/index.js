import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("access_token") !== null) {
      next();
    } else {
      next("/login");
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem("access_token") !== null) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
