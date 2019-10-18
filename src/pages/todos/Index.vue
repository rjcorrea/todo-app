<template>
  <div>
    <v-container>
      <h2>My Todos</h2>

      <v-data-table
        :headers="headers"
        :items="getTodos.data"
        :server-items-length="getTodos.total"
        loading="true"
        hide-default-footer
      ></v-data-table>
    </v-container>
      <div class="text-center">
    <v-pagination
      v-model="pagination.current_page"
      total-visible="5"
      :length="pagination.last_page"
      @input="paginateCall"
    ></v-pagination>
    </div>
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
      pagination:{}
    };
  },
  methods: {
    fetchTodos() {
      this.$store.dispatch("todos/getTodos");
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