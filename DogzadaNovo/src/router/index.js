import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CachorrosView from "../views/CachorrosView.vue";
import Login from "@/views/Login.vue";
import SignInView from "@/views/SignInView.vue";
import Cadastro from "@/views/Cadastro.vue";
import Contate from "@/views/Contate.vue";
import Comentarios from "@/views/Comentarios.vue";
import Carrosel from "@/components/Carrosel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
        {
          path: "/cadastro",
          name: "cadastro",
          component: Cadastro,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
      ],
    },
    {
      path: "",
      component: () => import("@/layouts/FullLayout.vue"),
      children: [
        {
          path: "/cachorrada",
          name: "home",
          component: CachorrosView,
        },
        {
          path: "/cachorrada",
          name: "cachorros",
          component: CachorrosView,
        },
        {
          path: "/contate",
          name: "contate",
          component: Contate,
        },
        {
          path: "/teste",
          name: "carrosel",
          component: Carrosel,
        },
        {
          path: "/comentarios",
          name: "comentarios",
          component: Comentarios,
        },
      ],
    },
  ],
});

export default router;
