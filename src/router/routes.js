const routes = [
  { path: "/", component: () => import("@/pages/Login") },
  { path: "/todos", component: () => import("@/pages/todos/Index") }
];

export default routes;
