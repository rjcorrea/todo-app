const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/pages/Dashboard"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login"),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("@/pages/todos/Index"),
    meta: {
      requiresAuth: true
    }
  },
];

export default routes;
