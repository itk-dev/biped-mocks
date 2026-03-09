<template>
  <div class="dataset-details">
    <!-- Description -->
    <div class="card">
      <h3><FileText :size="18" :stroke-width="1.5" /> Description</h3>
      <p>This dataset contains a 3D city model of the Brabrand district in Aarhus enriched with solar irradiance data. The model enables analysis of solar energy potential for individual buildings and rooftops, supporting planning for photovoltaic installations and energy optimization strategies within the Positive Energy District framework.</p>
    </div>

    <!-- Map -->
    <div class="card">
      <h3><Map :size="18" :stroke-width="1.5" /> Spatial Coverage</h3>
      <div class="map-container">
        <iframe
          class="map-iframe"
          src="https://www.openstreetmap.org/export/embed.html?bbox=10.09%2C56.14%2C10.17%2C56.17&layer=mapnik&marker=56.155%2C10.13"
          loading="lazy"
          title="Map showing Brabrand, Aarhus"
        ></iframe>
      </div>
    </div>

    <!-- Distributions -->
    <div class="card">
      <h3><Package :size="18" :stroke-width="1.5" /> Distributions</h3>
      <table class="dist-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Format</th>
            <th>Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dist in distributions" :key="dist.name">
            <td>{{ dist.name }}</td>
            <td><span class="format-badge" :class="dist.formatClass">{{ dist.format }}</span></td>
            <td>{{ dist.size }}</td>
            <td><button class="download-btn"><ArrowDown :size="14" :stroke-width="1.5" /> Download</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { FileText, Map, Package, ArrowDown } from 'lucide-vue-next'

const distributions = [
  { name: 'brabrand-solar-3d-model.zip', format: 'ZIP', formatClass: 'zip', size: '245 MB' },
  { name: 'solar-irradiance-metadata.json', format: 'JSON', formatClass: 'json', size: '12 KB' },
]
</script>

<style scoped>
.dataset-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.map-container {
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 180px;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.dist-table {
  width: 100%;
  border-collapse: collapse;
}

.dist-table th {
  text-align: left;
  font-size: 12px;
  color: var(--color-text-muted);
  font-weight: 600;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border-faintest);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dist-table td {
  padding: 12px 0;
  font-size: 13px;
  color: var(--color-text-body);
  border-bottom: 1px solid var(--color-border-row);
}

.format-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.format-badge.zip {
  background: var(--color-accent-blue-bg);
  color: var(--color-text-dark);
}

.format-badge.json {
  background: var(--color-accent-green-bg);
  color: var(--color-dark);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--color-teal);
  color: var(--color-white);
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.download-btn:hover {
  background: var(--color-mid);
}
</style>
