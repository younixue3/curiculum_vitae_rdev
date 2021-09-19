import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/dashboard/Login'
import DashboardLayout from "@/views/dashboard/Layout/DashboardLayout.vue";
import Dashboard from "@/views/dashboard/Dashboard";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'indexDashboard',
        component: Dashboard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
