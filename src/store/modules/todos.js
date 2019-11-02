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
    getItems: async (context, payload) => {
      return await axios.get(`${process.env.VUE_APP_MAIN_API}/api/todos`, { params : payload } ).then(response => {
        context.commit("SET_ITEMS", response.data);
      });
    }
  }
};
