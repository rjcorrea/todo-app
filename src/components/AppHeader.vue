<template>
  <div>
    <v-app-bar color="#34495e" fixed app>
      <v-app-bar-nav-icon class="white--text" @click="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">My Vue App 1</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn class="white--text" text>About</v-btn>
        <v-btn class="white--text" text>Contact</v-btn>
        <v-btn class="white--text" text>Sign In</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false
    };
  }
};
</script>
