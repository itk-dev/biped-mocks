import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StorytellingPage from '../pages/StorytellingPage.vue'
import DatasetPage from '../pages/DatasetPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/storytelling', name: 'storytelling', component: StorytellingPage },
  { path: '/dataset/:id', name: 'dataset', component: DatasetPage },
  { path: '/register', name: 'register', component: RegisterPage, meta: { standalone: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
