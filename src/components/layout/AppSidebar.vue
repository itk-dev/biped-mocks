<template>
  <nav class="sidebar" :class="{ open }">
    <router-link to="/" class="sidebar-icon" :class="{ active: $route.name === 'home' }" aria-label="Home">
      <svg viewBox="0 0 32 32" fill="none"><path d="M7.7 13.6V24a3 3 0 003 3H16M7.7 13.6L15 6.3a1.4 1.4 0 012 0L23.3 12.7M7.7 13.6L5.3 16M24.3 13.6V24a3 3 0 01-3 3H16M24.3 13.6L26.7 16M24.3 13.6l-1-1M23.3 12.7V8M16 27V20" :stroke="$route.name === 'home' ? '#002d3d' : '#667F93'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
    <div class="sidebar-icon" aria-label="Digital Twin">
      <svg viewBox="0 0 32 32" fill="none"><path d="M16 7.7v2.6M16 14.7v2.6M16 21.7v2.6" stroke="#667F93" stroke-width="2" stroke-linecap="round"/><path d="M26.7 9.3L20 16l6.7 6.7V9.3Z" stroke="#667F93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.3 9.3L12 16l-6.7 6.7V9.3Z" stroke="#667F93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <router-link to="/dataset/brabrand-solar" class="sidebar-icon" :class="{ active: $route.name === 'dataset' }" aria-label="Data Catalog">
      <svg viewBox="0 0 32 32" fill="none"><path d="M5.3 10.7L16 5.3 26.7 10.7 16 16 5.3 10.7Z" :stroke="$route.name === 'dataset' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.3 16L16 21.3 26.7 16" :stroke="$route.name === 'dataset' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.3 21.3L16 26.7 26.7 21.3" :stroke="$route.name === 'dataset' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
    <router-link to="/storytelling" class="sidebar-icon" :class="{ active: $route.name === 'storytelling' }" aria-label="Dashboards">
      <svg viewBox="0 0 32 32" fill="none"><path d="M5.3 12v12a2.7 2.7 0 002.7 2.7h5.3M5.3 12V8a2.7 2.7 0 012.7-2.7h16a2.7 2.7 0 012.7 2.7v4M5.3 12h8M26.7 12v12a2.7 2.7 0 01-2.7 2.7H13.3M26.7 12h-13.3M13.3 12v14.7" :stroke="$route.name === 'storytelling' ? '#002d3d' : '#667F93'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </router-link>
    <div class="sidebar-icon" aria-label="Organisation Sites">
      <svg viewBox="0 0 27 27" fill="none"><path d="M24.4 21.5h-1.6V10.2a2.4 2.4 0 00-2.4-2.4h-5.7V3.7a2.4 2.4 0 00-1.2-2.1 2.4 2.4 0 00-2.4.3L4.1 7.7a2.4 2.4 0 00-1.1 2v11.8H1.7a.8.8 0 000 1.6h22.7a.8.8 0 000-1.6zm-3.2-11.3v11.3h-6.5V10.2h6.5zM5 9.1l8.1-5.4v17.8H5V9.1z" fill="#667F93"/></svg>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  open: Boolean,
})
defineEmits(['close'])
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
