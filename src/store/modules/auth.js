import auth from '@/services/auth.js';

export default {
  namespaced: true,
  actions: {
    login(context, credentials) {
      return auth.login(credentials).then((response) => {
        auth.setAuth(response.data.auth);
        auth.setUser(response.data.user);
      })
    },
    logout() {
      auth.flush()
      return auth.logout();
    }
  }
};
