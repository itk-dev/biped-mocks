<template>
  <section :id="id" class="story-section" :class="{ alt: alt }">
    <span v-if="label" class="section-label">{{ label }}</span>
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="narrative" class="narrative">{{ narrative }}</p>
    <slot />
  </section>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  title: String,
  narrative: String,
  alt: Boolean,
})
</script>

<style scoped>
.story-section {
  padding: 64px 40px 64px 120px;
  scroll-margin-top: calc(var(--banner-height) + var(--header-height) + 20px);
}

.story-section.alt {
  background: var(--color-white);
}

.section-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: var(--color-teal);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
}

.story-section h2 {
  font-size: 28px;
  color: var(--color-darkest);
  margin-bottom: 16px;
  font-weight: 700;
}

.narrative {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 32px;
}

@media (max-width: 1023px) {
  .story-section {
    padding: 64px 120px;
  }
}

@media (max-width: 767px) {
  .story-section {
    padding: 32px 24px;
  }

  .story-section h2 {
    font-size: 22px;
  }
}
</style>
