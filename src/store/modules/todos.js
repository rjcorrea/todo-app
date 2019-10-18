import axios from "axios";
export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    getTodos: state => state.todos
  },
  mutations: {
    SET_TODOS: (state, payload) => {
      state.todos = payload;
    }
  },
  actions: {
    getTodos: async context => {
      await axios.get(`${process.env.VUE_APP_MAIN_API}/api/todos`).then(response => {
        context.commit("SET_TODOS", response.data);
      });
    }
  }
};
