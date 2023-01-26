import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./../pages/HomePage.vue";
import LoginPage from "./../Authentication/LoginPage.vue";
import RegisterPage from "./../Authentication/RegisterPage.vue";
import CreatePost from "./../pages/posts/CraetePost.vue";
import EditPost from "./../pages/posts/EditPost.vue";
import PostDetails from "./../pages/posts/PostDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/create-post",
    name: "create-post",
    meta: { requresAuth: true },
    component: CreatePost,
  },
  {
    path: "/edit-post",
    name: "edit-post",
    meta: { requresAuth: true },
    component: EditPost,
  },
  {
    path: "/post-details",
    name: "post details",
    component: PostDetails,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.requresAuth) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
