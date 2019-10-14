<template>
  <v-app>
    <v-layout align-center justify-center row fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="5" lg="4" xl="3">
          <v-row justify="center">
            <v-img src="@/assets/logo.png" aspect-ratio="1" max-width="120" max-height="120"></v-img>
          </v-row>
          <v-container>
            <v-card>
              <v-card-title>
                <h1 class="display-1">Login</h1>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" prepend-icon="mdi-account-circle" />
                  <v-text-field
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false
    };
  }
};
</script>