<template>
  <div class="timeline-wrapper">
    <h3>Brabrand Energy Milestones</h3>
    <div class="timeline">
      <div v-for="(event, i) in events" :key="i" class="timeline-event">
        <div class="timeline-dot" :class="{ filled: event.filled }"></div>
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-title">{{ event.title }}</div>
        <div class="timeline-desc">{{ event.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const events = [
  {
    date: 'Q1 2024',
    title: 'Baseline data collection completed',
    description: 'All 4,823 buildings in the Brabrand PED area surveyed and energy profiles created.',
    filled: true,
  },
  {
    date: 'Q3 2024',
    title: 'Solar irradiance model integrated',
    description: '3D city model enriched with annual solar exposure data for every rooftop surface.',
    filled: true,
  },
  {
    date: 'Q1 2025',
    title: 'First retrofit program launched',
    description: '120 residential buildings enrolled in the deep energy renovation pilot program.',
    filled: false,
  },
  {
    date: 'Q4 2026 (target)',
    title: 'Positive energy balance achieved',
    description: 'District generates more renewable energy than it consumes on an annual basis.',
    filled: false,
  },
]
</script>

<style scoped>
.timeline-wrapper h3 {
  font-size: 18px;
  color: var(--color-darkest);
  margin-bottom: 20px;
}

.timeline {
  position: relative;
  padding-left: 32px;
  border-left: 2px solid var(--color-border-light);
  margin: 32px 0;
}

.timeline-event {
  position: relative;
  padding: 0 0 32px 24px;
}

.timeline-event:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -39px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--color-green);
  background: var(--color-white);
}

.timeline-dot.filled {
  background: var(--color-teal);
}

.timeline-date {
  font-size: 12px;
  color: var(--color-text-muted);
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-title {
  font-size: 15px;
  color: var(--color-darkest);
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-desc {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}
</style>
