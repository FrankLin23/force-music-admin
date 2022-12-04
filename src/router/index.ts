import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const menuRoutes: RouteRecordRaw[] = [
  {
    path: "dashboard",
    name: "Dashboard",
    meta: { title: "Dashboard", icon: "dashboard" },
    component: () => import("@/pages/dashboard/index.vue"),
  },
  {
    path: "user",
    name: "User",
    meta: { title: "User Management", icon: "manage_accounts" },
    component: () => import("@/pages/user/index.vue"),
  },
  {
    path: "music",
    name: "Music",
    meta: { title: "Music Management", icon: "music_note" },
    component: () => import("@/pages/music/index.vue"),
  },
  {
    path: "artist",
    name: "Artist",
    meta: { title: "Artist Management", icon: "mic" },
    component: () => import("@/pages/artist/index.vue"),
  },
  {
    path: "playlist",
    name: "Playlist",
    meta: { title: "Playlist Management", icon: "queue_music" },
    component: () => import("@/pages/playlist/index.vue"),
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
