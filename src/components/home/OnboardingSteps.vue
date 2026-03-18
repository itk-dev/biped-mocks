<template>
  <section class="onboarding">
    <div class="onboarding-header">
      <div class="onboarding-icon"><Hand :size="28" :stroke-width="1.5" :class="{ waving }" /></div>
      <h2>Welcome to BIPED Civora</h2>
      <p class="subtitle">Let us show you around! Based on your interests, these steps will help you discover the platform's key features.</p>
    </div>
    <div class="steps">
      <component
        v-for="(step, i) in steps"
        :key="i"
        :is="step.to ? 'router-link' : 'a'"
        :to="step.to || undefined"
        :href="step.to ? undefined : step.href"
        class="step-card"
      >
        <div class="step-number">
          <component :is="step.icon" :size="18" :stroke-width="1.5" />
        </div>
        <h4>{{ step.title }}</h4>
        <p>{{ step.description }}</p>
        <span class="step-link">{{ step.linkText }} →</span>
      </component>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Hand, Globe, Database, LayoutDashboard, Video } from 'lucide-vue-next'

const waving = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    waving.value = true
  })
})

const steps = [
  {
    title: 'Explore the Digital Twin',
    description: 'Navigate the 3D virtual model of Aarhus and discover solar energy data across the city.',
    linkText: 'View Solar in the Twin',
    to: '/digital-twin',
    icon: Globe,
  },
  {
    title: 'Browse the Data Catalog',
    description: 'Search and access open datasets, including solar irradiance and photovoltaic performance data.',
    linkText: 'Explore Solar Data',
    to: '/articles/brabrand-solar',
    icon: Database,
  },
  {
    title: 'View Dashboards',
    description: 'Interactive overviews of key solar energy metrics and district performance indicators.',
    linkText: 'See Dashboards',
    to: '/articles/storytelling',
    icon: LayoutDashboard,
  },
  {
    title: 'Watch the Video Guide',
    description: 'Video walkthroughs of the BIPED platform, the digital twin, and the data catalog.',
    linkText: 'Watch Videos',
    to: '/articles/video-guide',
    icon: Video,
  },
]
</script>

<style scoped>
.onboarding {
  padding: 48px 64px;
  background: var(--color-white);
}

.onboarding-header {
  text-align: center;
  margin-bottom: 36px;
}

.onboarding-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-green), var(--color-darkest));
  border-radius: var(--radius-xl);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
}

.onboarding-icon .waving {
  transform-origin: 70% 80%;
  animation: wave 0.6s ease-in-out;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  45% { transform: rotate(10deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
}

.onboarding-header h2 {
  font-size: 24px;
  color: var(--color-darkest);
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.step-card {
  display: block;
  text-align: center;
  padding: 24px 16px;
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-lg);
  transition: border-color 0.15s, box-shadow 0.15s;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.step-card:hover {
  border-color: var(--color-teal);
  box-shadow: 0 2px 12px rgba(0, 104, 122, 0.1);
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  margin: 0 auto 12px;
  background: var(--color-teal);
  color: var(--color-white);
  border: 1px solid var(--color-teal);
  transition: transform 0.4s ease, background 0.4s ease, color 0.4s ease;
}

.step-card:hover .step-number {
  animation: flip-invert 0.4s ease forwards;
  background: var(--color-white);
  color: var(--color-teal);
}

@keyframes flip-invert {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(180deg); }
}

.step-card h4 {
  font-size: 14px;
  color: var(--color-darkest);
  margin-bottom: 6px;
}

.step-card p {
  font-size: 12px;
  color: var(--color-text-light);
  line-height: 1.5;
}

.step-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
  font-size: 12px;
  color: var(--color-teal);
  font-weight: 600;
  transition: color 0.15s;
}

.step-link:hover {
  color: var(--color-mid);
}

@media (max-width: 1023px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .onboarding {
    padding: 32px 24px;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
