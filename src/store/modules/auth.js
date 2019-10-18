import axios from "axios";

export default {
  namespaced: true,
  actions: {
    login(context, credentials) {
      return axios
        .post("http://localhost:8000/api/login", credentials)
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.data));
        });
    },
    deleteToken() {
      return axios.post("http://localhost:8000/api/logout").then(() => {
        localStorage.clear();
      });
    }
  }
};
