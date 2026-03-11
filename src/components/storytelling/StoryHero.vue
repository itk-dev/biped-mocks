<template>
  <section class="story-hero">
    <!-- Animated data-viz SVG background -->
    <svg class="hero-viz" viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
      <!-- Grid lines (full width) -->
      <line v-for="y in 8" :key="'h'+y" x1="0" :y1="y * 50" x2="800" :y2="y * 50" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      <line v-for="x in 16" :key="'v'+x" :x1="x * 50" y1="0" :x2="x * 50" y2="400" stroke="rgba(255,255,255,0.04)" stroke-width="1" />

      <!-- Paths for line animations (right half) -->
      <defs>
        <path id="line1" d="M400,340 L460,310 520,270 580,220 640,160 700,110 760,60 800,30" />
        <path id="line2" d="M400,120 L460,135 520,150 580,165 640,180 700,195 760,210 800,220" />
      </defs>

      <!-- Line 1 — rising production (right half) -->
      <polyline
        points="400,340 460,310 520,270 580,220 640,160 700,110 760,60 800,30"
        fill="none" stroke="rgba(14,138,110,0.5)" stroke-width="2"
        stroke-dasharray="800" stroke-dashoffset="800"
      >
        <animate attributeName="stroke-dashoffset" from="800" to="0" dur="3s" fill="freeze" />
      </polyline>

      <!-- Line 2 — declining consumption (right half) -->
      <polyline
        points="400,120 460,135 520,150 580,165 640,180 700,195 760,210 800,220"
        fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"
        stroke-dasharray="800" stroke-dashoffset="800"
      >
        <animate attributeName="stroke-dashoffset" from="800" to="0" dur="3s" begin="0.5s" fill="freeze" />
      </polyline>

      <!-- Traveling dot on line 1 -->
      <circle r="5" fill="rgba(14,138,110,0.9)">
        <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
          <mpath href="#line1" />
        </animateMotion>
      </circle>

      <!-- Traveling dot on line 2 -->
      <circle r="4" fill="rgba(255,255,255,0.5)">
        <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s">
          <mpath href="#line2" />
        </animateMotion>
      </circle>

      <!-- Second traveling dot on line 1 (offset) -->
      <circle r="3" fill="rgba(14,138,110,0.6)">
        <animateMotion dur="4s" repeatCount="indefinite" begin="4s">
          <mpath href="#line1" />
        </animateMotion>
      </circle>

      <!-- Bar chart silhouettes (far right) -->
      <rect x="660" y="280" width="18" height="0" fill="rgba(255,255,255,0.08)" rx="2">
        <animate attributeName="height" from="0" to="100" dur="1.5s" begin="1s" fill="freeze" />
        <animate attributeName="y" from="380" to="280" dur="1.5s" begin="1s" fill="freeze" />
      </rect>
      <rect x="686" y="300" width="18" height="0" fill="rgba(255,255,255,0.06)" rx="2">
        <animate attributeName="height" from="0" to="80" dur="1.5s" begin="1.2s" fill="freeze" />
        <animate attributeName="y" from="380" to="300" dur="1.5s" begin="1.2s" fill="freeze" />
      </rect>
      <rect x="712" y="260" width="18" height="0" fill="rgba(255,255,255,0.1)" rx="2">
        <animate attributeName="height" from="0" to="120" dur="1.5s" begin="1.4s" fill="freeze" />
        <animate attributeName="y" from="380" to="260" dur="1.5s" begin="1.4s" fill="freeze" />
      </rect>
      <rect x="738" y="240" width="18" height="0" fill="rgba(14,138,110,0.2)" rx="2">
        <animate attributeName="height" from="0" to="140" dur="1.5s" begin="1.6s" fill="freeze" />
        <animate attributeName="y" from="380" to="240" dur="1.5s" begin="1.6s" fill="freeze" />
      </rect>
      <rect x="764" y="220" width="18" height="0" fill="rgba(14,138,110,0.25)" rx="2">
        <animate attributeName="height" from="0" to="160" dur="1.5s" begin="1.8s" fill="freeze" />
        <animate attributeName="y" from="380" to="220" dur="1.5s" begin="1.8s" fill="freeze" />
      </rect>
    </svg>

    <div class="story-label"><BookOpen :size="14" :stroke-width="1.5" /> Data Story</div>
    <h1>Aarhus on the Road to Positive Energy Districts</h1>
    <p class="lead">How Brabrand is transforming its energy profile through smart building design, solar optimization, and community engagement — told through data.</p>
    <div class="story-meta">
      <span><Calendar :size="14" :stroke-width="1.5" /> Published: February 2026</span>
      <span><User :size="14" :stroke-width="1.5" /> BIPED Consortium</span>
      <span><Clock :size="14" :stroke-width="1.5" /> 8 min read</span>
      <router-link to="/articles/brabrand-solar" class="datasets-link"><BarChart3 :size="14" :stroke-width="1.5" /> 6 datasets referenced</router-link>
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

.hero-viz {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.9;
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
  max-width: 700px;
}

.lead {
  position: relative;
  z-index: 1;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 28px;
}

.story-meta {
  position: relative;
  z-index: 1;
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
