<template>
  <section class="cta-section">
    <h2>Explore the data behind this story</h2>
    <p>All datasets referenced in this story are freely available in the BIPED Data Catalog. Dive deeper into the numbers.</p>
    <div class="cta-buttons">
      <router-link to="/dataset/brabrand-solar" class="btn-cta-primary">Open in Data Catalog</router-link>
      <button class="btn-cta-secondary">View in Digital Twin</button>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, var(--color-surface-dark), var(--color-darkest));
  color: var(--color-white);
  padding: 64px 120px;
  text-align: center;
}

.cta-section h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

.cta-section p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 28px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn-cta-primary {
  background: var(--color-teal);
  color: var(--color-white);
  border: none;
  padding: 14px 32px;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background 0.15s;
}

.btn-cta-primary:hover {
  background: var(--color-mid);
}

.btn-cta-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 14px 32px;
  border-radius: var(--radius-md);
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-cta-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 767px) {
  .cta-section {
    padding: 40px 24px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-section h2 {
    font-size: 22px;
  }
}
</style>
