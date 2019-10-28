import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import axios from "axios";
import auth from '@/services/auth';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

axios.interceptors.response.use(null, (error) => {
  if(error.response.status == 401 || error.response.status == 403){
      localStorage.clear();
      router.push('/login');
  }
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.getUser();

  if(currentUser){
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.getAuth().access_token}`;
  }

  if(requiresAuth && !currentUser){
      next('/login');
  } else if(to.path == '/login' && currentUser) {
      next('/');
  } else {
      next();
  }
});

export default router;
