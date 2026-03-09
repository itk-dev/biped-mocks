<template>
  <div class="viz-container">
    <!-- Bar chart -->
    <div class="viz-card">
      <div class="viz-title">Energy consumption by building type (GWh/year)</div>
      <div class="bar-chart">
        <div v-for="(bar, i) in bars" :key="i" class="bar-group">
          <div class="bar" :class="bar.color" :style="{ height: bar.height + 'px' }"></div>
          <div class="bar-label">{{ bar.label }}</div>
        </div>
      </div>
    </div>
    <!-- Donut chart -->
    <div class="viz-card">
      <div class="viz-title">Energy source distribution</div>
      <div class="donut-container">
        <div class="donut"></div>
        <div class="donut-legend">
          <div v-for="(item, i) in legend" :key="i" class="legend-item">
            <div class="legend-dot" :style="{ background: item.color }"></div>
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bars = [
  { label: 'Residential', height: 140, color: 'green' },
  { label: 'Commercial', height: 95, color: 'blue' },
  { label: 'Public', height: 55, color: 'orange' },
  { label: 'Industrial', height: 35, color: 'green' },
  { label: 'Other', height: 20, color: 'blue' },
]

const legend = [
  { label: 'District heating (42%)', color: '#0e8a6e' },
  { label: 'Electricity grid (29%)', color: '#002d3d' },
  { label: 'Natural gas (17%)', color: '#d4880e' },
  { label: 'Renewables (12%)', color: '#e0e6ed' },
]
</script>

<style scoped>
.viz-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.viz-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-lg);
  padding: 24px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.viz-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-darkest);
  margin-bottom: 16px;
}

/* Bar chart */
.bar-chart {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding-top: 16px;
}

.bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.bar {
  width: 100%;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s;
  min-height: 8px;
}

.bar.green {
  background: linear-gradient(to top, #0e8a6e, #4dc9a0);
}

.bar.blue {
  background: linear-gradient(to top, #002d3d, #5a9dc0);
}

.bar.orange {
  background: linear-gradient(to top, #d4880e, #f0c060);
}

.bar-label {
  font-size: 10px;
  color: var(--color-text-muted);
}

/* Donut chart */
.donut-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.donut {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    #0e8a6e 0% 42%,
    #002d3d 42% 71%,
    #d4880e 71% 88%,
    #e0e6ed 88% 100%
  );
  flex-shrink: 0;
}

.donut::after {
  content: '';
  position: absolute;
  inset: 30px;
  background: var(--color-bg-card);
  border-radius: 50%;
}

.donut-legend {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--color-text);
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .viz-container {
    grid-template-columns: 1fr;
  }

  .donut-container {
    flex-direction: column;
  }
}
</style>
