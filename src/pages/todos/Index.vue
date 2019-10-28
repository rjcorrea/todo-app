<template>
  <div>
    <v-container>
      <h2>My Todos</h2>

      <v-data-table
        :headers="headers"
        :items="getTodos.data"
        :server-items-length="getTodos.total"
        :loading="loading"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoIndex",
  data() {
    return {
      headers: [
        { text: "ID", value: "id"},
        { text: "Title", value: "name"},
        { text: "Description", value: "description" }
      ],
      pagination:{},
      loading: false
    };
  },
  methods: {
    fetchTodos() {
      this.loading = true
      this.$store.dispatch("todos/getTodos").then(() => {
        this.loading = false
      });

    }
  },
  computed: {
    ...mapGetters("todos", ["getTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>