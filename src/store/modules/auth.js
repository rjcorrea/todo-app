import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
  namespaced: true,
  state: {
    todos: []
  },
  actions: {
    login: async context => {
      await axios.post("http://localhost:8000/api/login").then(response => {});
    }
  }
};
