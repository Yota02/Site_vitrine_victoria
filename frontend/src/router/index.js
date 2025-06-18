import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Publications from '../views/Publications.vue'
import Contact from '../views/Contact.vue'
import Plugins from '../views/Plugins.vue'
import PluginDetail from '../views/PluginDetail.vue'
import Research from '../views/Research.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil - IA Conversationnelle'
    }
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins,
    meta: {
      title: 'Plugins - IA Conversationnelle'
    }
  },
  {
    path: '/plugin/:slug',
    name: 'PluginDetail',
    component: PluginDetail,
    meta: {
      title: 'Détail Plugin - IA Conversationnelle'
    }
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications,
    meta: {
      title: 'Publications - IA Conversationnelle'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - IA Conversationnelle'
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: Research,
    meta: {
      title: 'Recherches - IA Conversationnelle'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'IA Conversationnelle'
  next()
})

export default router
