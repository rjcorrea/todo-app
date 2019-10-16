import Vue from "vue";
import Vuex from "vuex";
import todos from "@/store/modules/todos";
import auth from "@/store/modules/auth";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: { auth, todos }
});
