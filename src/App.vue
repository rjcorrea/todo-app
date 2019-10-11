<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home 12345</router-link>|
      <router-link to="/todos" exact>Todos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
