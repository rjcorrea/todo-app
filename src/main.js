import Vue from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import store from "@/store"; // Import Store
import router from "@/router"; // Import Router

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
