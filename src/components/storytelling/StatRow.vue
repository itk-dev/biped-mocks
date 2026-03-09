<template>
  <div class="stat-row">
    <div v-for="(stat, i) in stats" :key="i" class="stat-card">
      <div class="stat-value" v-html="stat.value"></div>
      <div class="stat-label">{{ stat.label }}</div>
      <div v-if="stat.change" class="stat-change">{{ stat.change }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: Array,
})
</script>

<style scoped>
.stat-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 32px 0;
}

.stat-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-teal);
  margin-bottom: 4px;
}

.stat-value :deep(span) {
  font-size: 20px;
}

.stat-label {
  font-size: 13px;
  color: var(--color-text-light);
}

.stat-change {
  font-size: 12px;
  color: var(--color-teal);
  margin-top: 4px;
}

@media (max-width: 1023px) {
  .stat-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .stat-row {
    grid-template-columns: 1fr;
  }
}
</style>
