<template>
  <v-app>
    <template v-if="$route.path != '/login'">
      <AppHeader />
    </template>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: { AppHeader, AppFooter },
  data() {
    return {};
  }
};
</script>
