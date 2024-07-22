import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Dashboard from "@/views/surveyor/Dashboard.vue";
import PlateRequests from "@/views/surveyor/plate-requests/Index.vue";
import CSRSubmissions from "@/views/surveyor/csr-submissions/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/plate-requests",
      name: "plate requests",
      component: PlateRequests,
    },
    {
      path: "/csr-submissions",
      name: "CSR Submissions",
      component: CSRSubmissions,
    },
  ],
});

export default router;
