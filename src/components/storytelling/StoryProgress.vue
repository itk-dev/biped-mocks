<template>
  <nav class="story-toc">
    <span class="toc-heading">Contents</span>
    <button
      v-for="(step, i) in steps"
      :key="i"
      class="toc-item"
      :class="{ active: i === activeIndex }"
      @click="scrollToSection(i)"
    >
      <span class="toc-num">{{ i + 1 }}</span>
      <span class="toc-text">{{ step }}</span>
    </button>
  </nav>
</template>

<script setup>
const props = defineProps({
  activeIndex: { type: Number, default: 0 },
  sectionIds: { type: Array, default: () => [] },
})

const steps = [
  'The Vision',
  'Energy Baseline',
  'Solar Potential',
  'Traffic & Mobility',
  'The Path Forward',
]

function scrollToSection(index) {
  const id = props.sectionIds[index]
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.story-toc {
  position: sticky;
  top: calc(var(--banner-height) + var(--header-height) + 32px);
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 64px 24px 0;
}

.toc-heading {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
}

.toc-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  font-size: 13px;
  color: var(--color-text-muted);
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.15s;
  border-left: 3px solid transparent;
  text-align: left;
}

.toc-item:hover {
  color: var(--color-darkest);
  background: var(--color-bg-card);
}

.toc-item.active {
  color: var(--color-teal);
  border-left-color: var(--color-teal);
  font-weight: 600;
}

.toc-num {
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

.toc-item.active .toc-num {
  background: var(--color-teal);
  color: var(--color-white);
}

@media (max-width: 1023px) {
  .story-toc {
    display: none;
  }
}
</style>
