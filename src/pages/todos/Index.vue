<template>
  <div>
    <v-container>
      <h2>My Todos</h2>

      <v-data-table
        :headers="headers"
        :items="getItems.data"
        :server-items-length="getItems.total"
        :loading="loading"
        :options.sync="options"
        hide-default-footer
      ></v-data-table>

    <v-pagination
      v-model="getItems.current_page"
      :length="getItems.last_page"
      :total-visible="10"
      circle
      @input="paginateCall"
    ></v-pagination>

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
      loading: false,
      options: {}
    };
  },
  methods: {
    fetchItems(page = null) {
      this.loading = true
      this.$store.dispatch("todos/getItems", page).then(() => {
        this.loading = false
      });
    },
    paginateCall(page = null){
      this.fetchItems(page);
    }
  },
  computed: {
    ...mapGetters("todos", ["getItems"])
  },
  created() {
    this.fetchItems();
  }
};
</script>