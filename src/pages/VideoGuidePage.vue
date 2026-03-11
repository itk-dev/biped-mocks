<template>
  <div class="video-page">
    <div class="video-content">
      <AppBreadcrumb :crumbs="[{ label: 'Articles', to: '/articles' }]" current="Video Guide" />

      <div class="article-label"><Video :size="14" :stroke-width="1.5" /> Guide</div>
      <h1>Video Guide</h1>
      <p class="intro">Watch video walkthroughs of the BIPED platform to learn about the digital twin, data catalog, and how to get started.</p>

      <div class="video-grid">
        <div v-for="video in videos" :key="video.title" class="video-block">
          <div class="video-placeholder">
            <div class="play-icon">
              <Play :size="36" :stroke-width="1.5" />
            </div>
            <div class="video-overlay-title">{{ video.title }}</div>
          </div>
          <div class="video-info">
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
            <span class="video-duration"><Clock :size="13" :stroke-width="1.5" /> {{ video.duration }}</span>
          </div>
        </div>
      </div>

      <section class="tips-section">
        <h2>Quick Tips</h2>
        <ul>
          <li>Use the sidebar to navigate between the Digital Twin, Data Catalog, and Articles sections.</li>
          <li>In the data catalog, click on a dataset to view its metadata, download files, and join the discussion.</li>
          <li>The digital twin supports fullscreen mode — click the expand icon in the top-right corner of the viewer.</li>
          <li>All data on BIPED is open and free to use for research and education. Check individual dataset licenses for details.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Video, Play, Clock } from 'lucide-vue-next'
import AppBreadcrumb from '../components/shared/AppBreadcrumb.vue'

const videos = [
  {
    title: 'Platform Overview',
    description: 'A general introduction to the BIPED Civora platform, its goals, and how to navigate the main sections.',
    duration: '4:30',
  },
  {
    title: 'Digital Twin Walkthrough',
    description: 'Learn how to navigate the 3D digital twin of Brabrand, inspect buildings, and view solar potential data.',
    duration: '6:15',
  },
  {
    title: 'Data Catalog Tutorial',
    description: 'How to search for datasets, view metadata, download files, and participate in dataset discussions.',
    duration: '3:45',
  },
]
</script>

<style scoped>
.video-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 64px 64px;
}

.article-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-accent-blue-bg);
  color: var(--color-darkest);
  padding: 4px 14px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

h1 {
  font-size: 36px;
  color: var(--color-darkest);
  margin-bottom: 12px;
  line-height: 1.2;
}

.intro {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 40px;
}

.video-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}

.video-block {
  background: var(--color-white);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.video-placeholder {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, var(--color-darkest) 60%, var(--color-green) 100%);
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
}

.video-overlay-title {
  position: absolute;
  bottom: 20px;
  left: 24px;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-white);
}

.video-info {
  padding: 20px 24px;
}

.video-info h3 {
  font-size: 17px;
  color: var(--color-darkest);
  margin-bottom: 6px;
}

.video-info p {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 8px;
}

.video-duration {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--color-text-muted);
}

.tips-section {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
}

.tips-section h2 {
  font-size: 18px;
  color: var(--color-darkest);
  margin-bottom: 16px;
}

.tips-section ul {
  list-style: none;
}

.tips-section li {
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 8px;
}

.tips-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-teal);
}

@media (max-width: 767px) {
  .video-content {
    padding: 24px;
  }

  h1 {
    font-size: 28px;
  }
}
</style>
