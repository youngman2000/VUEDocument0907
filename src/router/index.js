import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import introduction from "@/views/introduction";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("@/views/introduction.vue")
    },
    {
      path: "/quick-start",
      component: () => import("@/views/quickStart.vue")
    }
  ]
});

export default router;
