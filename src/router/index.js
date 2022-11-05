import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Thoughts from "../views/Thoughts.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import LoginAdmin from "../views/LoginAdmin.vue";
import ThoughtDetails from "../views/ThoughtDetails.vue";
import ChapterDetails from "../views/ChapterDetails.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminThought from "../views/AdminThought.vue";
import WriteThought from "../views/WriteThought.vue";
import WriteChapter from "../views/WriteChapter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thoughts",
    name: "Thoughts",
    component: Thoughts,
  },
  {
    path: "/thought-details",
    name: "Thought Details",
    component: ThoughtDetails,
  },
  {
    path: "/chapter-details",
    name: "Chapter Details",
    component: ChapterDetails,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: `/profile/:username`,
    name: "Profile",
    component: Profile,
  },
  {
    path: "/login-admin",
    name: "Login Admin",
    component: LoginAdmin,
  },
  {
    path: "/admin-dashboard",
    name: "Admin Dashboard",
    component: AdminDashboard,
  },
  {
    path: "/admin-thought",
    name: "Admin Thought",
    component: AdminThought,
  },
  {
    path: "/write-thought",
    name: "Write Thought",
    component: WriteThought,
  },
  {
    path: "/write-chapter",
    name: "Write Chapter",
    component: WriteChapter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
