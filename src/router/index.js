import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'journalappel',
      component: () => import('../views/JournalAppelView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/nouveaucontact',
      name: 'nouveaucontact',
      component: () => import('../views/NouveauContactView.vue')
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: () => import('../views/ClavierView.vue')
    }
  ]
})

export default router
