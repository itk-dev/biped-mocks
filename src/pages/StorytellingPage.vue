<template>
  <div class="storytelling-page">
    <StoryHero />
    <StoryProgress v-model:active-index="activeIndex" />

    <div ref="chapterContent">
      <!-- Chapter 1 — The Vision -->
      <template v-if="activeIndex === 0">
        <StorySection
          label="Chapter 1"
          title="Brabrand's Positive Energy District Vision"
          narrative="Brabrand is at the forefront of Europe's Positive Energy District movement. The vision: a district that produces more renewable energy than it consumes, while improving quality of life for all residents."
        >
          <StatRow :stats="ch1Stats" />
          <InsightCallout>
            A Positive Energy District (PED) is an urban area that generates more renewable energy than it consumes annually, while ensuring high quality of life and affordable energy for all residents. Brabrand aims to become Denmark's first fully realized PED by 2026.
          </InsightCallout>
          <StoryNav :active-index="activeIndex" :steps="stepNames" @navigate="goTo" />
        </StorySection>
      </template>

      <!-- Chapter 2 — Energy Baseline (existing content) -->
      <template v-else-if="activeIndex === 1">
        <StorySection
          label="Chapter 2"
          title="Understanding Brabrand's Energy Baseline"
          narrative="Before planning a Positive Energy District, we need to understand how energy is currently consumed. Using building data from GeoDanmark and energy consumption records, we mapped the district's energy profile across residential, commercial, and public buildings."
        >
          <StatRow :stats="ch2Stats" />
          <VizContainer />
          <InsightCallout>
            Residential buildings account for 42% of energy consumption but only 12% of the district's solar capacity. This gap represents the largest opportunity for PED transformation.
          </InsightCallout>

          <p class="narrative">The data reveals a clear pattern: older residential blocks built between 1960-1980 consume 2.3x more energy per square meter than newer buildings. Retrofitting these structures is central to achieving positive energy balance.</p>

          <!-- Heatmap -->
          <div class="map-viz">
            <div class="heatmap-dots">
              <div v-for="(dot, i) in heatDots" :key="i" class="heat-dot" :style="dot"></div>
            </div>
            <div class="map-overlay">
              <div class="big-number">Brabrand</div>
              <div class="big-label">Energy consumption heatmap — kWh/m² per building</div>
            </div>
          </div>

          <!-- Data source -->
          <div class="data-source">
            <span class="source-label">Data Source</span>
            <a href="#">GeoDanmark Buildings Aarhus →</a>
            <a href="#">INSPIRE Buildings →</a>
            <a href="#">Brabrand 3D city model →</a>
          </div>

          <StoryNav :active-index="activeIndex" :steps="stepNames" @navigate="goTo" />
        </StorySection>
      </template>

      <!-- Chapter 3 — Solar Potential -->
      <template v-else-if="activeIndex === 2">
        <StorySection
          label="Chapter 3"
          title="Mapping Solar Energy Across Every Rooftop"
          narrative="Using 3D city model data and solar irradiance simulations, we analyzed the photovoltaic potential of every rooftop in Brabrand. The results reveal significant untapped capacity for distributed solar generation."
        >
          <StatRow :stats="ch3Stats" />
          <InsightCallout>
            With only 8% of suitable rooftop area currently utilized for solar PV, Brabrand has an estimated 89 MW of untapped photovoltaic potential — enough to meet 60% of the district's annual electricity demand from rooftop solar alone.
          </InsightCallout>
          <StoryNav :active-index="activeIndex" :steps="stepNames" @navigate="goTo" />
        </StorySection>
      </template>

      <!-- Chapter 4 — Traffic & Mobility -->
      <template v-else-if="activeIndex === 3">
        <StorySection
          label="Chapter 4"
          title="Sustainable Mobility Patterns in Brabrand"
          narrative="Transportation is a critical piece of the energy puzzle. By analyzing commuter data and mobility infrastructure, we mapped how Brabrand residents move — and where sustainable transport can reduce the district's carbon footprint."
        >
          <StatRow :stats="ch4Stats" />
          <InsightCallout>
            Brabrand's 34% cycling commute share is well above the national average, but EV charging infrastructure lags behind demand. Expanding the 12 public charging points to 50 could reduce transport emissions by an additional 22%.
          </InsightCallout>
          <StoryNav :active-index="activeIndex" :steps="stepNames" @navigate="goTo" />
        </StorySection>
      </template>

      <!-- Chapter 5 — The Path Forward -->
      <template v-else-if="activeIndex === 4">
        <StorySection
          label="Chapter 5"
          title="From Data to Action"
          narrative="The data tells a clear story: Brabrand has the resources, the infrastructure, and the community engagement to become a Positive Energy District. Here's the roadmap from insight to implementation."
        >
          <StoryTimeline />
          <InsightCallout>
            By combining rooftop solar expansion, deep energy renovation of 1960–1980 residential buildings, and sustainable mobility investments, Brabrand can achieve positive energy balance by Q4 2026 — producing 105% of its annual energy consumption from local renewable sources.
          </InsightCallout>
          <StoryNav :active-index="activeIndex" :steps="stepNames" @navigate="goTo" />
        </StorySection>
      </template>
    </div>

    <StoryCta />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import StoryHero from '../components/storytelling/StoryHero.vue'
import StoryProgress from '../components/storytelling/StoryProgress.vue'
import StorySection from '../components/storytelling/StorySection.vue'
import StatRow from '../components/storytelling/StatRow.vue'
import VizContainer from '../components/storytelling/VizContainer.vue'
import InsightCallout from '../components/storytelling/InsightCallout.vue'
import StoryTimeline from '../components/storytelling/StoryTimeline.vue'
import StoryNav from '../components/storytelling/StoryNav.vue'
import StoryCta from '../components/storytelling/StoryCta.vue'

const activeIndex = ref(0)

const stepNames = [
  'The Vision',
  'Energy Baseline',
  'Solar Potential',
  'Traffic & Mobility',
  'The Path Forward',
]

const chapterContent = ref(null)

function goTo(index) {
  activeIndex.value = index
  nextTick(() => {
    chapterContent.value?.scrollIntoView({ behavior: 'smooth' })
  })
}

const ch1Stats = [
  { value: '2026', label: 'Target year' },
  { value: '2.4<span>km²</span>', label: 'District area' },
  { value: '4,823', label: 'Buildings' },
  { value: '12,400', label: 'Community members' },
]

const ch2Stats = [
  { value: '4,823', label: 'Buildings analyzed' },
  { value: '187<span>GWh</span>', label: 'Annual energy consumption' },
  { value: '42%', label: 'Residential share' },
  { value: '-3.2%', label: 'Year-over-year change', change: '↓ Trending down' },
]

const ch3Stats = [
  { value: '1,847', label: 'Suitable rooftops' },
  { value: '89<span>MW</span>', label: 'PV potential' },
  { value: '1,050', label: 'kWh/m² avg. irradiance' },
  { value: '8%', label: 'Current utilization' },
]

const ch4Stats = [
  { value: '8,200', label: 'Daily commuters' },
  { value: '34%', label: 'Cycling share' },
  { value: '12', label: 'EV charging points' },
  { value: '14.2<span>kt</span>', label: 'Annual CO₂ from transport' },
]

const heatDots = [
  { left: '15%', top: '30%', width: '40px', height: '40px', background: 'rgba(14,138,110,0.4)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '35%', top: '20%', width: '60px', height: '60px', background: 'rgba(212,136,14,0.5)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '55%', top: '45%', width: '80px', height: '80px', background: 'rgba(212,50,14,0.4)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '70%', top: '25%', width: '50px', height: '50px', background: 'rgba(14,138,110,0.3)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '25%', top: '60%', width: '70px', height: '70px', background: 'rgba(212,136,14,0.4)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '60%', top: '65%', width: '45px', height: '45px', background: 'rgba(14,138,110,0.5)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '80%', top: '55%', width: '55px', height: '55px', background: 'rgba(26,77,110,0.4)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
  { left: '45%', top: '70%', width: '35px', height: '35px', background: 'rgba(212,50,14,0.3)', borderRadius: '50%', position: 'absolute', opacity: '0.5' },
]
</script>

<style scoped>
.narrative {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 32px;
}

.map-viz {
  background: linear-gradient(135deg, #d0e4d0, #c0d4e0, #e0d4c0);
  border-radius: var(--radius-md);
  min-height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.map-viz::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255, 255, 255, 0.25) 24px, rgba(255, 255, 255, 0.25) 25px),
    repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255, 255, 255, 0.25) 24px, rgba(255, 255, 255, 0.25) 25px);
}

.heatmap-dots {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.heat-dot {
  position: absolute;
  border-radius: 50%;
}

.map-overlay {
  position: relative;
  z-index: 2;
  text-align: center;
}

.big-number {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-darkest);
}

.big-label {
  font-size: 14px;
  color: var(--color-text-dark);
}

.data-source {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.source-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.data-source a {
  font-size: 13px;
  color: var(--color-green);
  font-weight: 600;
}

.data-source a:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .big-number {
    font-size: 32px;
  }

  .data-source {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
