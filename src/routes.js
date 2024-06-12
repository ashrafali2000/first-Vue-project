import { createWebHistory, createRouter } from "vue-router";
// import NavBar from "./components/NavBar.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Login from "./components/Login.vue";
import PromoSection from "./components/PromoSection.vue";
import NotFound from "./components/PageNotFound.vue";
import Products from "./components/Products.vue";
const routes = [
  { path: "/", component: PromoSection },
  { path: "/profile/:name", component: TheWelcome },
  { path: "/login", component: Login },
  { path: "/products", component: Products },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
