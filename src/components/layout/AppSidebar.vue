<template>
  <nav class="sidebar" :class="{ open }">
    <router-link to="/" class="sidebar-icon" :class="{ active: $route.name === 'home' }" aria-label="Home">
      <svg viewBox="0 0 32 32" fill="none"><path d="M7.7 13.6V24a3 3 0 003 3H16M7.7 13.6L15 6.3a1.4 1.4 0 012 0L23.3 12.7M7.7 13.6L5.3 16M24.3 13.6V24a3 3 0 01-3 3H16M24.3 13.6L26.7 16M24.3 13.6l-1-1M23.3 12.7V8M16 27V20" :stroke="$route.name === 'home' ? '#002d3d' : '#667F93'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
    <router-link to="/digital-twin" class="sidebar-icon" :class="{ active: $route.name === 'digital-twin' }" aria-label="Digital Twin">
      <svg viewBox="0 0 32 32" fill="none"><path d="M16 7.7v2.6M16 14.7v2.6M16 21.7v2.6" :stroke="$route.name === 'digital-twin' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round"/><path d="M26.7 9.3L20 16l6.7 6.7V9.3Z" :stroke="$route.name === 'digital-twin' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.3 9.3L12 16l-6.7 6.7V9.3Z" :stroke="$route.name === 'digital-twin' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
    <router-link to="/articles" class="sidebar-icon" :class="{ active: isArticlesActive }" aria-label="Articles">
      <svg viewBox="0 0 32 32" fill="none"><path d="M6 8h20M6 13h20M6 18h14M6 23h10" :stroke="isArticlesActive ? '#002d3d' : '#667F93'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  open: Boolean,
})
defineEmits(['close'])

const route = useRoute()
const isArticlesActive = computed(() => route.path.startsWith('/articles'))
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: calc(var(--banner-height) + var(--header-height));
  width: var(--sidebar-width);
  height: calc(100vh - var(--banner-height) - var(--header-height));
  background: var(--color-white);
  border-right: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 4px;
  z-index: 10;
}

.sidebar-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s;
}

.sidebar-icon svg {
  width: 32px;
  height: 32px;
}

.sidebar-icon:hover {
  background: var(--color-bg-hover);
}

.sidebar-icon.active {
  background: var(--color-bg-hover);
}

@media (max-width: 767px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    z-index: 10;
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
