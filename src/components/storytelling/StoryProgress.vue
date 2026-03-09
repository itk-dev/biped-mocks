<template>
  <nav class="story-progress">
    <button
      v-for="(step, i) in steps"
      :key="i"
      class="progress-step"
      :class="{ active: i === activeIndex, completed: i < activeIndex }"
    >
      <span class="step-num">
        <Check v-if="i < activeIndex" :size="14" :stroke-width="1.5" />
        <template v-else>{{ i + 1 }}</template>
      </span>
      <span class="step-text">{{ step }}</span>
    </button>
  </nav>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

defineProps({
  activeIndex: { type: Number, default: 1 },
})

const steps = [
  'The Vision',
  'Energy Baseline',
  'Solar Potential',
  'Traffic & Mobility',
  'The Path Forward',
]
</script>

<style scoped>
.story-progress {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border-lighter);
  padding: 0 120px;
  display: flex;
  align-items: stretch;
  position: sticky;
  top: var(--header-height);
  z-index: 5;
}

.progress-step {
  flex: 1;
  padding: 16px 12px;
  text-align: center;
  font-size: 13px;
  color: var(--color-text-muted);
  border: none;
  border-bottom: 3px solid transparent;
  background: none;
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.progress-step:hover {
  color: var(--color-darkest);
  background: var(--color-bg-card);
}

.progress-step.active {
  color: var(--color-teal);
  border-bottom-color: var(--color-teal);
  font-weight: 600;
}

.progress-step.completed {
  color: var(--color-darkest);
  border-bottom-color: #c0d8c4;
}

.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  background: var(--color-border-faintest);
  color: var(--color-text-muted);
}

.progress-step.active .step-num {
  background: var(--color-teal);
  color: var(--color-white);
}

.progress-step.completed .step-num {
  background: #c0d8c4;
  color: var(--color-dark);
}

@media (max-width: 767px) {
  .story-progress {
    padding: 0 16px;
    overflow-x: auto;
  }

  .step-text {
    display: none;
  }

  .progress-step {
    min-width: 48px;
    padding: 12px 8px;
  }
}
</style>
