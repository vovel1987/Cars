// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: HomeView,
    children: []
    // component: () => import('@/layouts/default/Default.vue'),
    // children: [
    //   {
    //     path: '',
    //     name: 'Home',
    //     // route level code-splitting
    //     // this generates a separate chunk (Home-[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('@/views/Home.vue'),
    //   },
    // ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router