<template>
  <div class="home-page">
    <HeroSection />
    <OnboardingSteps />
    <div class="section-intro">
      <h2>Articles</h2>
      <p>Explore our latest articles</p>
      <router-link to="/articles" class="section-link">View all articles →</router-link>
    </div>
    <FeatureTeasers />
    <div class="section-intro">
      <h2>Explore</h2>
      <p>Explore our data foundation for this platform</p>
    </div>
    <section class="features">
      <FeatureCard
        icon="Map"
        title="Digital Twin"
        description="A virtual image of the city of Aarhus, connecting relevant data for Positive Energy Districts"
        link-text="Go to digital twin"
        variant="twin"
        to="/digital-twin"
      />
      <FeatureCard
        icon="BarChart3"
        title="Data Catalog"
        description="The data catalog is a freely accessible, searchable collection of data used for BIPED"
        link-text="Go to data catalog"
        variant="catalog"
        to="/articles/brabrand-solar"
      />
      <FeatureCard
        icon="TrendingUp"
        title="Dashboards"
        description="Dashboards are interactive overviews of important data and key figures"
        link-text="Explore dashboards"
        variant="dash"
        to="/articles/storytelling"
      />
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import FeatureCard from '../components/home/FeatureCard.vue'
import OnboardingSteps from '../components/home/OnboardingSteps.vue'
import FeatureTeasers from '../components/home/FeatureTeasers.vue'
</script>

<style scoped>
.section-intro {
  text-align: center;
  padding: 48px 64px 0;
}

.section-intro h2 {
  font-size: 24px;
  color: var(--color-darkest);
  margin-bottom: 8px;
}

.section-intro p {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 8px;
}

.section-link {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-teal);
  transition: color 0.15s;
}

.section-link:hover {
  color: var(--color-mid);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 48px 64px;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .section-intro {
    padding: 32px 24px 0;
  }

  .features {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 16px;
  }
}
</style>
