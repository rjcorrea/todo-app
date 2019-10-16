import axios from "axios";

export default {
  namespaced: true,
  actions: {
    login(context, credentials) {
      return axios
        .post("http://localhost:8000/api/login", credentials)
        .then(response => {
          localStorage.setItem("access_token", response.data.access_token);
        });
    },
    deleteToken() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");

      return axios.post("http://localhost:8000/api/logout").then(response => {
        localStorage.removeItem("access_token");
      });
    }
  }
};
