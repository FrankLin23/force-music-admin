import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const menuRoutes: RouteRecordRaw[] = [
  {
    path: "dashboard",
    name: "Dashboard",
    meta: { title: "Dashboard", icon: "dashboard" },
    component: () => import("@/pages/dashboard/index.vue"),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "dashboard",
    children: menuRoutes,
  },
  {
    path: "/login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/403",
    component: () => import("@/pages/403.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
