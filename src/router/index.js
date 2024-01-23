import { createRouter, createWebHistory } from 'vue-router'
import Loginview from "../views/LoginView.vue"
import ListeConge from "../views/ListeConge.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"loginview",
      component:Loginview
    },
   {
    path:"/liste",
    name:"liste",
    component:ListeConge
  }
  ]
})

export default router
