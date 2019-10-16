<template></template>

<script>
export default {
  created() {
    this.$store.dispatch("auth/deleteToken").then(response => {
      this.$router.push({ name: "login" });
    });
  }
};
</script>
