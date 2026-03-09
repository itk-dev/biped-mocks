<template>
  <section class="story-hero">
    <div class="story-label"><BookOpen :size="14" :stroke-width="1.5" /> Data Story</div>
    <h1>Aarhus on the Road to Positive Energy Districts</h1>
    <p class="lead">How Brabrand is transforming its energy profile through smart building design, solar optimization, and community engagement — told through data.</p>
    <div class="story-meta">
      <span><Calendar :size="14" :stroke-width="1.5" /> Published: February 2026</span>
      <span><User :size="14" :stroke-width="1.5" /> BIPED Consortium</span>
      <span><Clock :size="14" :stroke-width="1.5" /> 8 min read</span>
      <router-link to="/dataset/brabrand-solar" class="datasets-link"><BarChart3 :size="14" :stroke-width="1.5" /> 6 datasets referenced</router-link>
    </div>
  </section>
</template>

<script setup>
import { BookOpen, Calendar, User, Clock, BarChart3 } from 'lucide-vue-next'
</script>

<style scoped>
.story-hero {
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, var(--color-darkest) 40%, var(--color-green) 100%);
  padding: 80px 120px;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.story-hero::after {
  content: '';
  position: absolute;
  right: -40px;
  bottom: -40px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%);
}

.story-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  backdrop-filter: blur(4px);
}

.story-hero h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
  max-width: 700px;
}

.lead {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 28px;
}

.story-meta {
  display: flex;
  gap: 24px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  flex-wrap: wrap;
}

.story-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.datasets-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.15s;
}

.datasets-link:hover {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: underline;
}

@media (max-width: 767px) {
  .story-hero {
    padding: 40px 24px;
  }

  .story-hero h1 {
    font-size: 28px;
  }

  .story-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
