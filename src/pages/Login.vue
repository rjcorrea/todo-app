<template>
  <v-app>
    <v-layout align-center justify-center row fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="5" lg="4" xl="3">
          <v-row justify="center">
            <v-img src="@/assets/logo.png" aspect-ratio="1" max-width="120" max-height="120"></v-img>
          </v-row>
          <v-container>
            <v-form @submit.prevent="attemptLogin()">
              <v-card>
                <v-card-title>
                  <h1 class="display-1">Login</h1>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-text-field label="Email" prepend-icon="mdi-account-circle" v-model="email" />
                  <v-text-field
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                  />
                  <v-alert
                    dense
                    text
                    type="error"
                    :value="invalidCredentials"
                  >
                    Invalid credentials.
                  </v-alert>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    type="submit"
                    block
                    large
                    depressed
                    class="mt-4"
                    :loading="loading"
                  >Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-layout>
  </v-app>
</template>

<script>
import auth from '@/services/auth'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      invalidCredentials: false,
      showPassword: false,
      loading: false
    };
  },
  methods: {
    async attemptLogin() {
      const credentials = {
        email: this.email,
        password: this.password
      };
      this.loading = true;
      await auth.login(credentials).then((response) => {
        auth.setAuth(response.data.auth);
        auth.setUser(response.data.user);
        this.$router.push('/');
      }).catch((error) => {
        if(error.response.status == 401 || error.response.status == 403){
          this.invalidCredentials = true;
        }
      }).finally(() => {
        this.loading = false;
      })
    }
  }
};
</script>