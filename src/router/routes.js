// import Home from "@/pages/HomePage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/about',
    name: "About",
    component: () => import('@/pages/AboutPage.vue'),
  },
  {
    path: '/airports',
    name: "Airports",
    component: () => import('@/pages/AirportsPage.vue'),
  },
  {
    path: '/airports/:code',
    name: "AirportDetail",
    component: () => import('@/pages/AirportDetail.vue'),
    children: [
      {
        path: 'destinations',
        name: 'AirportDestinations',
        component: () => import('@/pages/AirportDestinations.vue'),
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import('@/pages/PageNotFound.vue')
  }
]

export default routes