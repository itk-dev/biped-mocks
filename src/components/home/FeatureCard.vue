<template>
  <div class="feature-card">
    <div class="feature-icon" :class="variant">
      <component :is="iconComponents[icon]" :size="24" :stroke-width="1.5" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <component
      :is="to ? 'router-link' : 'a'"
      :to="to || undefined"
      :href="to ? undefined : '#'"
      class="feature-link"
    >
      {{ linkText }} →
    </component>
  </div>
</template>

<script setup>
import { Map, BarChart3, TrendingUp } from 'lucide-vue-next'

defineProps({
  icon: String,
  title: String,
  description: String,
  linkText: String,
  variant: String,
  to: { type: String, default: '' },
})

const iconComponents = { Map, BarChart3, TrendingUp }
</script>

<style scoped>
.feature-card {
  text-align: center;
  padding: 32px 24px;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s, transform 0.2s;
}

.feature-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon.twin {
  background: var(--color-accent-blue-bg);
  color: var(--color-darkest);
}

.feature-icon.catalog {
  background: var(--color-accent-green-bg);
  color: var(--color-dark);
}

.feature-icon.dash {
  background: var(--color-accent-teal-bg);
  color: var(--color-teal);
}

.feature-card h3 {
  font-size: 16px;
  color: var(--color-darkest);
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.5;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  font-size: 13px;
  color: var(--color-teal);
  font-weight: 600;
  transition: color 0.15s;
}

.feature-link:hover {
  color: var(--color-mid);
}
</style>
