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
    getItems: (context, payload) => {
      return axios.get(`${process.env.VUE_APP_MAIN_API}/api/todos`, {
        params:{
          page : payload.page,
          sortBy: payload.sortBy,
          sortDesc : payload.sortDesc
      }}).then(response => {
        context.commit("SET_ITEMS", response.data);
      });
    }
  }
};
