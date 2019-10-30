<template>
  <div>
    <v-navigation-drawer class="white" app v-model="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Application</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/todos">
            <v-list-item-content>
              <v-list-item-title>Todos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>BASIC</span>
        <span class="font-weight-light">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            <v-avatar class="mr-2" color="primary" size="35">
              <span class="white--text" v-if="getUser != null">{{ getUser.name.charAt(0) }}</span>
            </v-avatar>
            <span class="hidden-xs-only" v-if="getUser != null">{{ getUser.name }}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    getUser : () => auth.getUser()
  },
  methods: {
    logout(){
      auth.logout().then(() => {
        auth.flush()
        this.$router.push('/login');
      });
    }
  },
};
</script>
