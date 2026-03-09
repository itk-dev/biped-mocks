<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-content">
      <h1>Building Intelligent Positive Energy Districts</h1>
      <p>Discover BIPED Civora – your access to data, insights and the digital twin for Positive Energy Districts in Aarhus</p>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../../assets/images/bip-lp-header-background-BuTpvNwq.png'
</script>

<style scoped>
.hero {
  background-color: var(--color-accent-teal-bg);
  background-size: cover;
  background-position: center right;
  padding: 48px 64px;
  min-height: 260px;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 40%;
}

.hero h1 {
  font-size: 32px;
  color: var(--color-darkest);
  margin-bottom: 12px;
  font-weight: 700;
}

.hero p {
  font-size: 15px;
  color: var(--color-text-dark);
  line-height: 1.5;
}

@media (max-width: 1023px) {
  .hero-content {
    max-width: 60%;
  }
}

@media (max-width: 767px) {
  .hero {
    padding: 32px 24px;
    min-height: auto;
  }

  .hero-content {
    max-width: 75%;
  }

  .hero h1 {
    font-size: 24px;
  }
}
</style>
