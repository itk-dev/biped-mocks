<template>
  <router-link
    :to="`/articles/${article.id}`"
    class="article-card"
    :class="[view, `type-${typeSlug}`]"
  >
    <div class="card-badge">{{ article.type }}</div>
    <div class="card-content">
      <h3>{{ article.title }}</h3>
      <p class="card-description">{{ article.description }}</p>
      <div class="card-footer">
        <div class="card-tags">
          <span v-for="tag in article.tags" :key="tag" class="card-tag">{{ tag }}</span>
        </div>
        <span class="card-date">{{ formattedDate }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  view: {
    type: String,
    default: 'cards',
  },
})

const typeSlug = computed(() => props.article.type.toLowerCase().replace(/\s+/g, '-'))

const formattedDate = computed(() => {
  const d = new Date(props.article.date)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
})
</script>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
  text-decoration: none;
  color: inherit;
}

.article-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
  border-color: var(--color-teal);
}

/* Type color accents */
.card-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  margin: 20px 20px 0;
  align-self: flex-start;
}

.type-data-story .card-badge {
  background: var(--color-accent-teal-bg);
  color: var(--color-teal);
}

.type-dataset .card-badge {
  background: var(--color-accent-green-bg);
  color: var(--color-dark);
}

.type-article .card-badge {
  background: var(--color-accent-orange-bg);
  color: var(--color-accent-orange);
}

.type-guide .card-badge {
  background: var(--color-accent-blue-bg);
  color: var(--color-darkest);
}

.card-content {
  padding: 12px 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  font-size: 16px;
  color: var(--color-darkest);
  margin-bottom: 8px;
  line-height: 1.3;
}

.card-description {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  background: var(--color-border-row);
  color: var(--color-text);
}

.card-date {
  font-size: 11px;
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* List view */
.article-card.list {
  flex-direction: row;
  align-items: center;
}

.article-card.list .card-badge {
  margin: 0;
  padding: 4px 12px;
  margin-left: 20px;
  min-width: 80px;
  text-align: center;
  align-self: center;
}

.article-card.list .card-content {
  padding: 16px 20px;
  flex-direction: row;
  align-items: center;
  gap: 24px;
}

.article-card.list .card-content h3 {
  margin-bottom: 0;
  min-width: 200px;
  flex-shrink: 0;
}

.article-card.list .card-description {
  -webkit-line-clamp: 1;
  margin-bottom: 0;
  flex: 1;
}

.article-card.list .card-footer {
  flex-shrink: 0;
}

.article-card.list .card-tags {
  display: none;
}

@media (max-width: 767px) {
  .article-card.list {
    flex-direction: column;
    align-items: stretch;
  }

  .article-card.list .card-badge {
    margin: 20px 20px 0;
    align-self: flex-start;
  }

  .article-card.list .card-content {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .article-card.list .card-content h3 {
    min-width: 0;
  }

  .article-card.list .card-description {
    -webkit-line-clamp: 2;
  }

  .article-card.list .card-tags {
    display: flex;
  }
}
</style>
