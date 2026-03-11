<template>
  <section class="teasers">
    <router-link to="/articles/storytelling" class="teaser-card">
      <div class="teaser-preview storytelling-preview">
        <div class="preview-label"><BookOpen :size="14" :stroke-width="1.5" /> Data Story</div>
        <div class="preview-title">Aarhus on the Road to Positive Energy</div>
      </div>
      <div class="teaser-body">
        <h3>Data Storytelling</h3>
        <p>Explore how Brabrand is transforming its energy profile through smart building design, solar optimization, and community engagement — told through data.</p>
        <span class="teaser-link">Read the story →</span>
      </div>
    </router-link>
    <router-link to="/articles/brabrand-solar" class="teaser-card">
      <div class="teaser-preview dataset-preview">
        <div class="preview-tags">
          <span class="mini-tag">Energy</span>
          <span class="mini-tag">ZIP</span>
          <span class="mini-tag">Open Data</span>
        </div>
        <div class="preview-title">Brabrand 3D city model with solar data</div>
      </div>
      <div class="teaser-body">
        <h3>Dataset Commenting</h3>
        <p>Join the discussion on datasets. Ask questions, share insights, and collaborate with researchers and city planners directly on data pages.</p>
        <span class="teaser-link">View dataset →</span>
      </div>
    </router-link>
  </section>
</template>

<script setup>
import { BookOpen } from 'lucide-vue-next'
</script>

<style scoped>
.teasers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 48px 64px;
}

.teaser-card {
  display: block;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  color: inherit;
  text-decoration: none;
}

.teaser-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.teaser-preview {
  padding: 24px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.storytelling-preview {
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, var(--color-darkest) 40%, var(--color-green) 100%);
  color: var(--color-white);
}

.dataset-preview {
  background: linear-gradient(135deg, #d4e8d0, #c8dce8, #e8dcc8);
  color: var(--color-darkest);
}

.preview-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: 0.8;
}

.preview-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
}

.preview-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.mini-tag {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.7);
}

.teaser-body {
  padding: 24px;
}

.teaser-body h3 {
  font-size: 18px;
  color: var(--color-darkest);
  margin-bottom: 8px;
}

.teaser-body p {
  font-size: 13px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 16px;
}

.teaser-link {
  font-size: 13px;
  color: var(--color-teal);
  font-weight: 600;
  transition: color 0.15s;
}

.teaser-link:hover {
  color: var(--color-mid);
}

@media (max-width: 1023px) {
  .teasers {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .teasers {
    padding: 24px;
    gap: 24px;
  }
}
</style>
