<template>
  <div>
    <v-container>
      <h2>My Todos</h2>

      <v-data-table :headers="headers" :items="TODOS.data" :items-per-page="10"></v-data-table>
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
        {
          text: "ID",
          value: "id"
        },
        {
          text: "Title",
          value: "name"
        },
        { text: "Description", value: "description" }
      ]
    };
  },
  methods: {
    fetchTodos() {
      this.$store.dispatch("todos/getTodo");
    }
  },
  computed: {
    ...mapGetters("todos", ["TODOS"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>