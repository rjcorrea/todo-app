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
        :page.sync="page"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        must-sort
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
      loading: false,
      options: {},
      page : 1,
      sortBy: 'id',
      sortDesc: true,
      headers: [
        { text: "ID", value: "id"},
        { text: "Title", value: "name"},
        { text: "Description", value: "description" }
      ]
    };
  },
  methods: {
    fetchItems(payload) {
      this.loading = true
      this.$store.dispatch("todos/getItems", payload).then(() => {
        this.loading = false
      });
    },
    paginateCall(page){
      this.page = page;
      this.handleRequest();
    },
    handleRequest(){   
      const payload = {
        page : this.page,
        sortBy : this.sortBy,
        sortDirection : this.sortDesc ? 'desc' : 'asc'
      }
      this.fetchItems(payload);
    }
  },
  computed: {
    ...mapGetters("todos", ["getItems"])
  },
  watch: {
    options: {
      handler () {
          this.sortBy = this.options.sortBy[0] ? this.options.sortBy[0] : this.sortBy;
          this.sortDesc = this.options.sortDesc[0] ? this.options.sortDesc[0] : false;
          this.handleRequest();
      },
      deep: true,
    },
  },
  created() {
    this.handleRequest();
  }
};
</script>