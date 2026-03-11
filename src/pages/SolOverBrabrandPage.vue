<template>
  <div class="sol-page">
    <div class="sol-content">
      <AppBreadcrumb :crumbs="[{ label: 'Articles', to: '/articles' }]" current="Sol over Brabrand" />

      <div class="article-label"><Sun :size="14" :stroke-width="1.5" /> Article</div>
      <h1>Sol over Brabrand</h1>
      <div class="article-meta">
        <span><Calendar :size="14" :stroke-width="1.5" /> March 2026</span>
        <span><User :size="14" :stroke-width="1.5" /> BIPED Consortium</span>
      </div>

      <section class="prose">
        <h2>Introduction</h2>
        <p>Sol over Brabrand is a community-driven initiative that brings together residents, researchers, and city planners in Aarhus to accelerate the transition toward a Positive Energy District. By combining open data, citizen engagement, and advanced 3D modeling, the project aims to demonstrate how a neighborhood can produce more renewable energy than it consumes.</p>
        <p>The initiative operates at the intersection of urban planning and digital innovation. Through workshops, public datasets, and interactive tools, Sol over Brabrand empowers citizens to understand their district's energy profile and participate in shaping its sustainable future.</p>
      </section>

      <section class="prose">
        <h2>The Digital Twin</h2>
        <p>At the heart of the project is a digital twin — a detailed 3D replica of the Brabrand district that integrates building geometry, solar irradiance data, and energy consumption records. The interactive model below lets you explore rooftops, view estimated photovoltaic potential, and understand how sunlight interacts with the built environment throughout the year.</p>
        <div class="iframe-wrapper">
          <iframe
            src="https://vcmap.bi-ped.eu/?state=eyJhY3RpdmVNYXAiOiJvbE1hcCIsImFsbE1hcHMiOnsib2xNYXAiOnsiYWN0aXZlTGF5ZXJzIjpbXSwiZXhjbHVzaXZlR3JvdXBzIjpbXSwibGF5ZXJzIjpbXX0sImNlc2l1bU1hcCI6eyJhY3RpdmVMYXllcnMiOltdLCJleGNsdXNpdmVHcm91cHMiOltdLCJsYXllcnMiOltdfSwib2JsaXF1ZU1hcCI6eyJhY3RpdmVMYXllcnMiOltdLCJleGNsdXNpdmVHcm91cHMiOltdLCJsYXllcnMiOltdfX0sImxheWVycyI6W10sInZpZXdwb2ludHMiOltdfQ=="
            title="Digital Twin of Brabrand"
            class="twin-iframe"
            allow="fullscreen"
          ></iframe>
        </div>
      </section>

      <section class="prose">
        <h2>Community Impact</h2>
        <p>Sol over Brabrand has engaged over 400 residents through public workshops, data literacy sessions, and co-design events. By making energy data accessible and understandable, the project has shifted the conversation from abstract sustainability goals to tangible, neighborhood-level action.</p>
        <p>Local schools have integrated the digital twin into their curriculum, teaching students about renewable energy, urban planning, and data analysis. Homeowner associations use the solar potential maps to coordinate rooftop PV installations, reducing costs through group procurement.</p>
      </section>

      <section class="prose">
        <h2>Looking Forward</h2>
        <p>The next phase of Sol over Brabrand focuses on expanding the digital twin with real-time energy monitoring, integrating EV charging data, and connecting with Aarhus Municipality's climate action plan. The goal is to create a replicable model that other districts across Denmark and Europe can adopt.</p>
        <p>As the BIPED project continues to evolve, Sol over Brabrand remains a proof point for how open data and community engagement can accelerate the transition to Positive Energy Districts.</p>
      </section>

      <CommentsSection />
    </div>
  </div>
</template>

<script setup>
import { Sun, Calendar, User } from 'lucide-vue-next'
import AppBreadcrumb from '../components/shared/AppBreadcrumb.vue'
import CommentsSection from '../components/dataset/CommentsSection.vue'
</script>

<style scoped>
.sol-content {
  max-width: 840px;
  margin: 0 auto;
  padding: 32px 64px 64px;
}

.article-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-accent-orange-bg);
  color: var(--color-accent-orange);
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

.article-meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 40px;
}

.article-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.prose {
  margin-bottom: 40px;
}

.prose h2 {
  font-size: 22px;
  color: var(--color-darkest);
  margin-bottom: 16px;
}

.prose p {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: 16px;
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin: 24px 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border-lighter);
}

.twin-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 767px) {
  .sol-content {
    padding: 24px;
  }

  h1 {
    font-size: 28px;
  }

  .article-meta {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
