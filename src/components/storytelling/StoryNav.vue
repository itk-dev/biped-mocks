<template>
  <div class="story-nav">
    <button v-if="activeIndex > 0" class="nav-btn" @click="emit('navigate', activeIndex - 1)">
      ← Previous: {{ steps[activeIndex - 1] }}
    </button>
    <span v-else></span>
    <span class="nav-position">{{ activeIndex + 1 }} of {{ steps.length }}</span>
    <button
      v-if="activeIndex < steps.length - 1"
      class="nav-btn primary"
      @click="emit('navigate', activeIndex + 1)"
    >
      Next: {{ steps[activeIndex + 1] }} →
    </button>
    <span v-else></span>
  </div>
</template>

<script setup>
defineProps({
  activeIndex: { type: Number, required: true },
  steps: { type: Array, required: true },
})

const emit = defineEmits(['navigate'])
</script>

<style scoped>
.story-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-top: 32px;
  border-top: 1px solid var(--color-border-lighter);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 1px solid var(--color-border-light);
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--color-darkest);
  cursor: pointer;
  transition: all 0.15s;
}

.nav-btn:hover {
  background: var(--color-bg-hover);
}

.nav-btn.primary {
  background: var(--color-teal);
  color: var(--color-white);
  border-color: var(--color-teal);
  font-weight: 600;
}

.nav-btn.primary:hover {
  background: var(--color-mid);
}

.nav-position {
  font-size: 13px;
  color: var(--color-text-muted);
}

@media (max-width: 767px) {
  .nav-btn {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
