import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StorytellingPage from '../pages/StorytellingPage.vue'
import DatasetPage from '../pages/DatasetPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/storytelling', name: 'storytelling', component: StorytellingPage },
  { path: '/dataset/:id', name: 'dataset', component: DatasetPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
