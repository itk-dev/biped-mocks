<template>
  <div class="articles-page">
    <ArticlesHero />
    <div class="articles-content">
      <ArticlesToolbar
        v-model:search="search"
        v-model:sort="sort"
        v-model:view="view"
      />
      <div class="articles-grid" :class="view">
        <ArticleCard
          v-for="article in filtered"
          :key="article.id"
          :article="article"
          :view="view"
        />
      </div>
      <p v-if="filtered.length === 0" class="no-results">No articles match your search.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticlesHero from '../components/articles/ArticlesHero.vue'
import ArticlesToolbar from '../components/articles/ArticlesToolbar.vue'
import ArticleCard from '../components/articles/ArticleCard.vue'
import { useArticles, searchArticles, sortArticles } from '../composables/useArticles.js'

const { articles } = useArticles()

const search = ref('')
const sort = ref('date-newest')
const view = ref('cards')

const filtered = computed(() => {
  const searched = searchArticles(search.value)
  return sortArticles(searched, sort.value)
})
</script>

<style scoped>
.articles-content {
  padding: 0 64px 64px;
}

.articles-grid {
  display: grid;
  gap: 24px;
}

.articles-grid.cards {
  grid-template-columns: repeat(3, 1fr);
}

.articles-grid.list {
  grid-template-columns: 1fr;
}

.no-results {
  text-align: center;
  padding: 48px 0;
  font-size: 15px;
  color: var(--color-text-muted);
}

@media (max-width: 1023px) {
  .articles-grid.cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .articles-content {
    padding: 0 24px 32px;
  }

  .articles-grid.cards {
    grid-template-columns: 1fr;
  }
}
</style>
