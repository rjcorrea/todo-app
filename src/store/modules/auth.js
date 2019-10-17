import axios from "axios";

export default {
  namespaced: true,
  actions: {
    login(context, credentials) {
      return axios
        .post("http://localhost:8000/api/login", credentials)
        .then(response => {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        });
    },
    deleteToken() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");

      return axios.post("http://localhost:8000/api/logout").then(() => {
        localStorage.removeItem("access_token");
      });
    }
  }
};
