<template>
  <div class="dataset-header">
    <AppBreadcrumb :crumbs="[{ label: 'Articles', to: '/articles' }]" :current="title" />
    <div class="publisher"><Building2 :size="14" :stroke-width="1.5" /> {{ publisher }}</div>
    <h1>{{ title }}</h1>
    <div class="tags">
      <span v-for="tag in tags" :key="tag.label" class="tag" :class="tag.variant">{{ tag.label }}</span>
    </div>
    <div class="meta">
      <span><Calendar :size="14" :stroke-width="1.5" /> Updated: {{ updated }}</span>
      <span><Download :size="14" :stroke-width="1.5" /> {{ downloads }} downloads</span>
      <span><Eye :size="14" :stroke-width="1.5" /> {{ views }} views</span>
      <a href="#discussion" class="comments-link" @click.prevent="scrollToDiscussion"><MessageCircle :size="14" :stroke-width="1.5" /> {{ commentCount }} comments</a>
    </div>
  </div>
</template>

<script setup>
import { Building2, Calendar, Download, Eye, MessageCircle } from 'lucide-vue-next'
import AppBreadcrumb from '../shared/AppBreadcrumb.vue'

defineProps({
  title: String,
  publisher: String,
  tags: Array,
  updated: String,
  downloads: [String, Number],
  views: [String, Number],
  commentCount: [String, Number],
})

function scrollToDiscussion() {
  document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.dataset-header {
  margin-bottom: 32px;
}

.publisher {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--color-text-light);
  background: var(--color-border-row);
  padding: 4px 12px;
  border-radius: var(--radius-xl);
  margin-bottom: 12px;
}

h1 {
  font-size: 26px;
  color: var(--color-darkest);
  margin-bottom: 8px;
}

.tags {
  margin: 8px 0 12px;
}

.meta {
  font-size: 13px;
  color: var(--color-text-muted);
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.comments-link {
  color: var(--color-teal);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.15s;
}

.comments-link:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  h1 {
    font-size: 22px;
  }

  .meta {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
