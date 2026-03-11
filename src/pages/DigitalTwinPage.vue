<template>
  <div class="twin-page">
    <div class="twin-content">
      <AppBreadcrumb :crumbs="[{ label: 'Home', to: '/' }]" current="Digital Twin" />

      <h1>Digital Twin</h1>
      <p class="description">Explore the interactive 3D model of the Brabrand district. The digital twin connects building geometry, solar irradiance data, and energy consumption records to help you understand the neighborhood's energy profile.</p>
      <p class="usage-hint">Use your mouse to pan and zoom the map. Click on buildings to inspect solar potential and energy data. Switch between 2D and 3D views using the map controls. Have questions? Check the <router-link to="/articles/faq">FAQ</router-link>.</p>

      <div ref="iframeWrapper" class="iframe-wrapper">
        <button class="fullscreen-btn" @click="toggleFullscreen" :title="isFullscreen ? 'Exit fullscreen' : 'View fullscreen'">
          <component :is="isFullscreen ? Minimize2 : Maximize2" :size="16" :stroke-width="2" />
          {{ isFullscreen ? 'Exit fullscreen' : 'Fullscreen' }}
        </button>
        <iframe
          src="https://vcmap.bi-ped.eu/"
          title="Digital Twin — VC Map"
          class="twin-iframe"
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Maximize2, Minimize2 } from 'lucide-vue-next'
import AppBreadcrumb from '../components/shared/AppBreadcrumb.vue'

const iframeWrapper = ref(null)
const isFullscreen = ref(false)

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    iframeWrapper.value?.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function onFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  document.addEventListener('fullscreenchange', onFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', onFullscreenChange)
})
</script>

<style scoped>
.twin-content {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 64px 64px;
}

h1 {
  font-size: 36px;
  color: var(--color-darkest);
  margin-bottom: 12px;
  line-height: 1.2;
}

.description {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 12px;
  max-width: 740px;
}

.usage-hint {
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 740px;
}

.usage-hint a {
  color: var(--color-teal);
  font-weight: 600;
}

.usage-hint a:hover {
  text-decoration: underline;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border-lighter);
}

.fullscreen-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-white);
  border: 1px solid var(--color-border-light);
  color: var(--color-darkest);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: inherit;
  box-shadow: var(--shadow-card);
  transition: background 0.15s, border-color 0.15s;
}

.fullscreen-btn:hover {
  background: var(--color-bg-hover);
  border-color: var(--color-teal);
}

.twin-iframe {
  display: block;
  width: 100%;
  min-height: calc(100vh - 300px);
  border: none;
}

@media (max-width: 767px) {
  .twin-content {
    padding: 24px;
  }

  h1 {
    font-size: 28px;
  }
}
</style>
