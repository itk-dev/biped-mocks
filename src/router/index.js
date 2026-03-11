import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import StorytellingPage from '../pages/StorytellingPage.vue'
import DatasetPage from '../pages/DatasetPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ArticlesPage from '../pages/ArticlesPage.vue'
import SolOverBrabrandPage from '../pages/SolOverBrabrandPage.vue'
import FaqPage from '../pages/FaqPage.vue'
import VideoGuidePage from '../pages/VideoGuidePage.vue'
import DigitalTwinPage from '../pages/DigitalTwinPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/digital-twin', name: 'digital-twin', component: DigitalTwinPage },
  { path: '/articles', name: 'articles', component: ArticlesPage },
  { path: '/articles/storytelling', name: 'articles-storytelling', component: StorytellingPage },
  { path: '/articles/brabrand-solar', name: 'articles-brabrand-solar', component: DatasetPage },
  { path: '/articles/sol-over-brabrand', name: 'articles-sol-over-brabrand', component: SolOverBrabrandPage },
  { path: '/articles/faq', name: 'articles-faq', component: FaqPage },
  { path: '/articles/video-guide', name: 'articles-video-guide', component: VideoGuidePage },
  { path: '/register', name: 'register', component: RegisterPage, meta: { standalone: true } },
  // Redirects for old routes
  { path: '/storytelling', redirect: '/articles/storytelling' },
  { path: '/dataset/brabrand-solar', redirect: '/articles/brabrand-solar' },
  { path: '/dataset/:id', redirect: '/articles' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
