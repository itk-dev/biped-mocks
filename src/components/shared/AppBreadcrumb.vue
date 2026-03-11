<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <template v-for="(crumb, i) in crumbs" :key="i">
      <router-link :to="crumb.to" class="breadcrumb-link">{{ crumb.label }}</router-link>
      <span class="breadcrumb-sep"> › </span>
    </template>
    <span class="breadcrumb-current">{{ current }}</span>
  </nav>
</template>

<script setup>
defineProps({
  crumbs: {
    type: Array,
    required: true,
  },
  current: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.breadcrumb {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.breadcrumb-link {
  color: var(--color-teal);
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-sep {
  color: var(--color-text-muted);
}

.breadcrumb-current {
  color: var(--color-text-muted);
}
</style>
