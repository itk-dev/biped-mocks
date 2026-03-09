<template>
  <div class="dataset-page">
    <DatasetHeader
      title="Brabrand 3D city model with solar data"
      publisher="Virtual City Systems"
      :tags="tags"
      updated="05.05.2025"
      downloads="142"
      views="1,203"
      :comment-count="3"
    />

    <div class="content-grid">
      <DatasetDetails />
      <DatasetSidebar />
      <CommentsSection />
    </div>
  </div>
</template>

<script setup>
import DatasetHeader from '../components/dataset/DatasetHeader.vue'
import DatasetDetails from '../components/dataset/DatasetDetails.vue'
import DatasetSidebar from '../components/dataset/DatasetSidebar.vue'
import CommentsSection from '../components/dataset/CommentsSection.vue'

const tags = [
  { label: 'Energy', variant: 'energy' },
  { label: 'ZIP', variant: 'zip' },
  { label: 'Open Data', variant: 'open' },
]
</script>

<style scoped>
.dataset-page {
  padding: 32px 48px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
}

@media (max-width: 1023px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .dataset-page {
    padding: 24px 16px;
  }
}
</style>
