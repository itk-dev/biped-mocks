<template>
  <section class="onboarding">
    <div class="onboarding-header">
      <div class="onboarding-icon"><Hand :size="28" :stroke-width="1.5" /></div>
      <h2>Welcome to BIPED Civora</h2>
      <p class="subtitle">Let us show you around! This quick tour will help you discover the platform's key features in just a few steps.</p>
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
        <div class="step-number" :class="{ active: i === 0 }">{{ i + 1 }}</div>
        <h4>{{ step.title }}</h4>
        <p>{{ step.description }}</p>
        <span class="step-link">{{ step.linkText }} →</span>
      </component>
    </div>
  </section>
</template>

<script setup>
import { Hand } from 'lucide-vue-next'

const steps = [
  {
    title: 'Explore the Digital Twin',
    description: 'Navigate the 3D virtual model of Aarhus and discover solar energy data across the city.',
    linkText: 'View Solar in the Twin',
    href: '#',
  },
  {
    title: 'Browse the Data Catalog',
    description: 'Search and access open datasets, including solar irradiance and photovoltaic performance data.',
    linkText: 'Explore Solar Data',
    to: '/dataset/brabrand-solar',
  },
  {
    title: 'View Dashboards',
    description: 'Interactive overviews of key solar energy metrics and district performance indicators.',
    linkText: 'See Dashboards',
    to: '/storytelling',
  },
  {
    title: 'Find your use case',
    description: 'Discover how BIPED solar data supports research, planning, and community energy projects.',
    linkText: 'Get Started',
    href: '#',
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
  background: var(--color-border-faintest);
  color: var(--color-text-muted);
}

.step-number.active {
  background: var(--color-teal);
  color: var(--color-white);
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
