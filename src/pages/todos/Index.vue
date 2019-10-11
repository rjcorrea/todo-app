<template>
  <div>
    <v-container>
      <h2>My Todos</h2>
      <v-card>
        <v-list-item two-line v-for="todo in todos" :key="todo.id">
          <v-list-item-content>
            <v-list-item-title>{{todo.title}}</v-list-item-title>
            <v-list-item-subtitle>{{todo.description}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoIndex",
  data() {
    return {
      todos: [
        {
          title: "Title 1",
          description: "Description 1"
        },
        {
          title: "Title 2",
          description: "Description 2"
        },
        {
          title: "Title 3",
          description: "Description 3"
        }
      ]
    };
  }
};
</script>