<template>
  <v-app>
    <v-app-bar app v-if="$route.path != '/'">
      <v-toolbar-title class="headline text-uppercase">
        <span>TODO</span>
        <span class="font-weight-light">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-bottom-navigation v-model="bottomNav">
      <v-btn to="/" value="recent">
        <span>Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn to="/todos" value="favorites">
        <span>Todos</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
