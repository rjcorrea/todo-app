import axios from "axios";

export default {
  namespaced: true,
  actions: {
    login(context, credentials) {
      return axios
        .post(`${process.env.VUE_APP_MAIN_API}/api/login`, credentials)
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.data));
        });
    },
    deleteToken() {
      
      return axios.post(`${process.env.VUE_APP_MAIN_API}/api/logout`).then(() => {
        localStorage.clear();
      });
    }
  }
};
