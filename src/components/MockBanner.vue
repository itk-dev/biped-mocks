<template>
  <div class="mock-banner">
    This is a mockup — not the real application
  </div>
</template>

<style scoped>
.mock-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--banner-height);
  background-color: var(--color-accent-orange-bg);
  color: var(--color-accent-orange);
  text-align: center;
  font-family: var(--font-primary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: var(--banner-height);
  z-index: 1000;
}
</style>
