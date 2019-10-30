import axios from "axios";
export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    getItems: state => state.items,
  },
  mutations: {
    SET_ITEMS: (state, payload) => {
      state.items = payload;
    }
  },
  actions: {
    getItems: (context, page) => {
      return axios.get(`${process.env.VUE_APP_MAIN_API}/api/todos`, {
        params:{
          page : page
      }}).then(response => {
        context.commit("SET_ITEMS", response.data);
      });
    }
  }
};
