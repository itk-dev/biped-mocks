<template>
  <div class="app-layout">
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <AppSidebar :open="sidebarOpen" @close="sidebarOpen = false" />
    <div v-if="sidebarOpen" class="sidebar-scrim" @click="sidebarOpen = false"></div>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'

const sidebarOpen = ref(false)
</script>

<style scoped>
.main-content {
  margin-left: var(--sidebar-width);
  padding-top: calc(var(--banner-height) + var(--header-height));
  min-height: 100vh;
}

.sidebar-scrim {
  display: none;
}

@media (max-width: 767px) {
  .main-content {
    margin-left: 0;
  }

  .sidebar-scrim {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(10, 30, 50, 0.55);
    z-index: 9;
  }
}
</style>
