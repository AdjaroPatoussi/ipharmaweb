import { createRouter, createWebHashHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'

import { projectAuth } from '../firebase/config';

// eslint-disable-next-line no-unused-vars
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'login' })
  } else {
    next()
  }
}
const routes = [
  {
    meta: {
      title: 'Select style',
      fullScreen: true
    },
    path: '/',
    name: 'style',
    component: Style
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home,
    beforeEnter: requireAuth
  },
  

  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Register',
      fullScreen: true
    },
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    meta: {
      title: 'Logout',
       
    },
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/LogoutView.vue')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  },
  {
    meta: {
      title: 'Categorie'
    },
    path: '/categorie',
    name: 'categorie',
    component: () => import('@/views/CategorieView.vue')
  },
  {
    meta: {
      title: 'Categoriescreate'
    },
    path: '/categorie/create',
    name: 'categoriecreate',
    component: () => import('@/views/CategoriecreateView.vue')
  },
  {
    meta: {
      title: 'Produit'
    },
    path: '/produit',
    name: 'produit',
    component: () => import('@/views/ProduitView.vue')
  },
  {
    meta: {
      title: 'Produitcreate'
    },
    path: '/produit/create',
    name: 'produitcreate',
    component: () => import('@/views/ProduitcreateView.vue')
  },
  {
    meta: {
      title: 'Utilisateur'
    },
    path: '/utilisateur',
    name: 'utilisateur',
    component: () => import('@/views/UtilisateurView.vue')
  },
  {
    meta: {
      title: 'Utilisateurcreate'
    },
    path: '/utilisateur/create',
    name: 'utilisateurcreate',
    component: () => import('@/views/UtilisateurcreateView.vue')
  }, 
  
  {
    meta: {
      title: 'resetpassword',
      fullScreen: true
    },
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('@/views/ResetpasswordView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
