const routes = [
  {
    path: "/",
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
  {
    path: "/logout",
    name: "logout",
    component: () => import("@/pages/Logout"),
    meta: {
      requiresAuth: true
    }
  }
];

export default routes;
