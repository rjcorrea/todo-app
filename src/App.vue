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
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              <v-avatar v-on="on" class="mr-2" color="primary" size="35">
                <span class="white--text">RJ</span>
              </v-avatar>
              <span class="hidden-xs-only">Robin</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'logout' }">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
