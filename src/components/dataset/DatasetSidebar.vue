<template>
  <div class="right-sidebar">
    <!-- Metadata -->
    <div class="card">
      <h3><Info :size="18" :stroke-width="1.5" /> Metadata</h3>
      <div v-for="item in metadata" :key="item.label" class="info-row">
        <span class="info-label">{{ item.label }}</span>
        <span class="info-value">{{ item.value }}</span>
      </div>
    </div>

    <!-- Related -->
    <div class="card">
      <h3><Link :size="18" :stroke-width="1.5" /> Related Datasets</h3>
      <div class="related-links">
        <a v-for="link in relatedDatasets" :key="link" href="#">{{ link }} →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Info, Link } from 'lucide-vue-next'

const metadata = [
  { label: 'Publisher', value: 'Virtual City Systems' },
  { label: 'Catalogue', value: 'BIPED' },
  { label: 'Category', value: 'Energy' },
  { label: 'Licence', value: 'Open Licence' },
  { label: 'Created', value: '21.02.2025' },
  { label: 'Last modified', value: '05.05.2025' },
  { label: 'Formats', value: 'ZIP, JSON' },
]

const relatedDatasets = [
  'Brabrand 3D city model',
  'Traffic model',
  'GeoDanmark Buildings Aarhus',
]
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border-row);
}

.info-label {
  font-size: 12px;
  color: var(--color-text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 13px;
  color: var(--color-text-body);
  text-align: right;
}

.related-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.related-links a {
  font-size: 13px;
  color: var(--color-green);
  transition: color 0.15s;
}

.related-links a:hover {
  text-decoration: underline;
}
</style>
