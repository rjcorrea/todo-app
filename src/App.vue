<template>
  <v-app>
    <template v-if="$route.path != '/'">
      <AppSidebar :drawer="drawer" />
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
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
    </template>
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppSidebar from "@/components/AppSidebar";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: { AppSidebar, AppFooter },
  data() {
    return {
      drawer: true
    };
  }
};
</script>
