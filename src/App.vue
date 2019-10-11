<template>
  <v-app>
    <v-app-bar app v-if="$route.path != '/'">
      <v-toolbar-title class="headline text-uppercase">
        <span>TODO</span>
        <span class="font-weight-light">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">
        <v-avatar class="mr-2" color="primary" size="35">
          <span class="white--text">RJ</span>
        </v-avatar>
        <span class="hidden-xs-only">Robin</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
