<template>
  <div class="insight-callout">
    <div class="label"><Lightbulb :size="14" :stroke-width="1.5" /> Key Insight</div>
    <p><slot /></p>
  </div>
</template>

<script setup>
import { Lightbulb } from 'lucide-vue-next'
</script>

<style scoped>
.insight-callout {
  background: linear-gradient(135deg, #e8f8f0, #e0f0ff);
  border-left: 4px solid var(--color-green);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: 24px 32px;
  margin: 24px 0;
}

.label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: var(--color-teal);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.insight-callout p {
  font-size: 16px;
  color: var(--color-darkest);
  font-weight: 500;
  line-height: 1.5;
}
</style>
