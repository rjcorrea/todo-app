import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    TODOS: state => state.todos
  },
  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    }
  },
  actions: {
    getTodo: async context => {
      await axios.get("http://localhost:8000/api/todos").then(response => {
        context.commit("SET_TODO", response.data);
      });
    }
  }
};
