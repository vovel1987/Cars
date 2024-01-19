// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HauptSite from '../components/HauptSeite.vue'
import NotFound from '../components/NotFound.vue'
import SecondCard from '../components/card/SecondCard.vue'


const routes = [
  {
    path: '/',
    name: "Home",
    component: HomeView,
    children: [],
    redirect:'/stock',
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
  {
    path:'/stock',name:'Stock',component:HauptSite,
  },

  {
    path:'/:notFound(.*)',component:NotFound
  },
  {
     path:'/stock/model/:id',component:SecondCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
