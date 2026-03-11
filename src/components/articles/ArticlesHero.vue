<template>
  <section class="articles-hero">
    <div class="hero-content">
      <h1>Articles</h1>
      <p class="lead">Browse data stories, datasets, guides, and more from the BIPED platform.</p>
    </div>
  </section>
</template>

<style scoped>
.articles-hero {
  background: linear-gradient(135deg, var(--color-surface-dark) 0%, var(--color-darkest) 40%, var(--color-green) 100%);
  padding: 48px 64px;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.articles-hero::after {
  content: '';
  position: absolute;
  right: -40px;
  bottom: -40px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.06), transparent 70%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.articles-hero h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.2;
}

.lead {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  max-width: 500px;
}

@media (max-width: 767px) {
  .articles-hero {
    padding: 32px 24px;
  }

  .articles-hero h1 {
    font-size: 28px;
  }
}
</style>
