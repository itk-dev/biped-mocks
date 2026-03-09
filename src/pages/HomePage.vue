<template>
  <div class="home-page">
    <HeroSection />
    <OnboardingSteps />
    <FeatureTeasers />
    <section class="features">
      <FeatureCard
        icon="Map"
        title="Digital Twin"
        description="A virtual image of the city of Aarhus, connecting relevant data for Positive Energy Districts"
        link-text="Go to digital twin"
        variant="twin"
      />
      <FeatureCard
        icon="BarChart3"
        title="Data Catalog"
        description="The data catalog is a freely accessible, searchable collection of data used for BIPED"
        link-text="Go to data catalog"
        variant="catalog"
        to="/dataset/brabrand-solar"
      />
      <FeatureCard
        icon="TrendingUp"
        title="Dashboards"
        description="Dashboards are interactive overviews of important data and key figures"
        link-text="Explore dashboards"
        variant="dash"
        to="/storytelling"
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
  .features {
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 16px;
  }
}
</style>
