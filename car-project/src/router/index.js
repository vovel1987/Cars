// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HauptSite from '../components/HauptSeite.vue'
import NotFound from '../components/NotFound.vue'
import SecondCard from '../components/card/SecondCard.vue'
import StammDaten from '../components/stammdaten/StammDaten.vue'
import Fotos from '../components/stammdaten/Fotos.vue'
import Bewertung from '../components/stammdaten/Bewertung.vue'
import Schadenliste from '../components/stammdaten/Schadenliste.vue'
import Status from '../components/stammdaten/Status.vue'
import Dokuments from '../components/stammdaten/Dokuments.vue'


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
  },
  {
    path:'/stock/vehicle/:vin/overview',component:StammDaten
  },
  {
    path:'/stock/vehicle/:vin/pictures',component:Fotos
  },
  {
    path:'/stock/vehicle/:vin/bewertung',component:Bewertung
  },
  {
    path:'/stock/vehicle/:vin/damages',component:Schadenliste
  },
  {
    path:'/stock/vehicle/:vin/status',component:Status
  },
  {
    path:'/stock/vehicle/:vin/documents',component:Dokuments
  },
  
  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
