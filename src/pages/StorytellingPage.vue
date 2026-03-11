<template>
  <div class="storytelling-page">
    <StoryHero />

    <div class="story-body">
      <div class="story-chapters">
        <!-- Chapter 1 — The Vision -->
        <StorySection
          id="chapter-1"
          label="Chapter 1"
          title="Brabrand's Positive Energy District Vision"
          narrative="Brabrand is at the forefront of Europe's Positive Energy District movement. The vision: a district that produces more renewable energy than it consumes, while improving quality of life for all residents."
        >
          <StatRow :stats="ch1Stats" />

          <!-- Energy forecast line graph -->
          <div class="forecast-chart">
            <h3 class="chart-title">Energy Balance Forecast</h3>
            <p class="chart-subtitle">Projected renewable energy production vs. consumption (GWh/year)</p>
            <svg viewBox="0 0 700 320" class="line-chart" role="img" aria-label="Line chart showing energy production overtaking consumption by 2032">
              <!-- Grid -->
              <line x1="60" y1="20" x2="680" y2="20" stroke="var(--color-border-faintest)" stroke-width="1" stroke-dasharray="4 4" />
              <line x1="60" y1="20" x2="60" y2="260" stroke="var(--color-border-lighter)" stroke-width="1" />
              <line x1="60" y1="260" x2="680" y2="260" stroke="var(--color-border-lighter)" stroke-width="1" />
              <line v-for="n in 4" :key="'gy'+n" x1="60" :y1="260 - n * 48" x2="680" :y2="260 - n * 48" stroke="var(--color-border-faintest)" stroke-width="1" stroke-dasharray="4 4" />

              <!-- Y-axis labels -->
              <text x="50" y="264" text-anchor="end" class="axis-label">0</text>
              <text x="50" y="216" text-anchor="end" class="axis-label">50</text>
              <text x="50" y="168" text-anchor="end" class="axis-label">100</text>
              <text x="50" y="120" text-anchor="end" class="axis-label">150</text>
              <text x="50" y="72" text-anchor="end" class="axis-label">200</text>

              <!-- X-axis labels (2020–2032) -->
              <text v-for="(year, i) in forecastYears" :key="'x'+i" :x="60 + i * (620 / 12)" y="280" text-anchor="middle" class="axis-label">{{ year }}</text>

              <!-- Consumption line (slowly declining) -->
              <polyline
                :points="consumptionPolyline"
                fill="none" stroke="var(--color-text-muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              />
              <!-- Consumption area -->
              <polygon
                :points="consumptionPolyline + ' 680,260 60,260'"
                fill="var(--color-text-muted)" opacity="0.06"
              />

              <!-- Production line (growing steadily) -->
              <polyline
                :points="productionPolyline"
                fill="none" stroke="var(--color-teal)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              />
              <!-- Production area -->
              <polygon
                :points="productionPolyline + ' 680,260 60,260'"
                fill="var(--color-teal)" opacity="0.08"
              />

              <!-- Crossover marker at 2031 -->
              <circle :cx="crossoverX" :cy="crossoverY" r="5" fill="var(--color-white)" stroke="var(--color-teal)" stroke-width="2.5" />
              <line :x1="crossoverX" :y1="crossoverY" :x2="crossoverX" y2="260" stroke="var(--color-teal)" stroke-width="1" stroke-dasharray="4 3" opacity="0.4" />
              <text :x="crossoverX" y="298" text-anchor="middle" class="crossover-label">Positive energy</text>

              <!-- Data points — production -->
              <circle v-for="(pt, i) in productionPoints" :key="'pp'+i" :cx="pt.x" :cy="pt.y" r="3.5" fill="var(--color-teal)" />
              <!-- Data points — consumption -->
              <circle v-for="(pt, i) in consumptionPoints" :key="'cp'+i" :cx="pt.x" :cy="pt.y" r="3.5" fill="var(--color-text-muted)" />

              <!-- Legend -->
              <line x1="60" y1="310" x2="78" y2="310" stroke="var(--color-teal)" stroke-width="2.5" stroke-linecap="round" />
              <text x="84" y="314" class="legend-label">Renewable production</text>
              <line x1="250" y1="310" x2="268" y2="310" stroke="var(--color-text-muted)" stroke-width="2.5" stroke-linecap="round" />
              <text x="274" y="314" class="legend-label">Energy consumption</text>
            </svg>
          </div>

          <InsightCallout>
            A Positive Energy District (PED) is an urban area that generates more renewable energy than it consumes annually, while ensuring high quality of life and affordable energy for all residents. Brabrand aims to become Denmark's first fully realized PED by 2032.
          </InsightCallout>
        </StorySection>

        <!-- Chapter 2 — Energy Baseline -->
        <StorySection
          id="chapter-2"
          label="Chapter 2"
          title="Understanding Brabrand's Energy Baseline"
          narrative="Before planning a Positive Energy District, we need to understand how energy is currently consumed. Using building data from GeoDanmark and energy consumption records, we mapped the district's energy profile across residential, commercial, and public buildings."
          alt
        >
          <StatRow :stats="ch2Stats" />
          <VizContainer />
          <InsightCallout>
            Residential buildings account for 42% of energy consumption but only 12% of the district's solar capacity. This gap represents the largest opportunity for PED transformation.
          </InsightCallout>

          <p class="narrative">The data reveals a clear pattern: older residential blocks built between 1960-1980 consume 2.3x more energy per square meter than newer buildings. Retrofitting these structures is central to achieving positive energy balance.</p>

          <!-- Interactive heatmap -->
          <div class="heatmap-wrapper">
            <div class="heatmap-header">
              <h3 class="chart-title">Brabrand</h3>
              <p class="chart-subtitle">Energy consumption heatmap — kWh/m² per building</p>
            </div>
            <div class="map-viz">
              <svg viewBox="0 0 800 380" class="heatmap-svg" role="img" aria-label="Interactive energy consumption heatmap of Brabrand">
                <!-- Background grid -->
                <defs>
                  <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect width="800" height="380" fill="url(#grid)" />

                <!-- Heatmap zones with inline labels -->
                <g v-for="(zone, i) in heatZones" :key="'zone'+i" class="heatmap-zone" @mouseenter="activeZone = i" @mouseleave="activeZone = null">
                  <!-- Outer glow ring -->
                  <circle :cx="zone.x" :cy="zone.y" :r="zone.r + 6" :fill="zone.color" :opacity="activeZone === i ? 0.2 : 0.1" />
                  <!-- Main circle -->
                  <circle :cx="zone.x" :cy="zone.y" :r="zone.r" :fill="zone.color" :opacity="activeZone === i ? 0.85 : 0.65" class="zone-circle" filter="url(#glow)" />
                  <!-- Border ring on hover -->
                  <circle :cx="zone.x" :cy="zone.y" :r="zone.r + 2" fill="none" stroke="white" stroke-width="1.5" :opacity="activeZone === i ? 0.5 : 0" class="zone-ring" />

                  <!-- Label inside bubble -->
                  <text :x="zone.x" :y="zone.y - 6" text-anchor="middle" fill="white" :font-size="zone.r > 40 ? 11 : 9" font-weight="600" class="zone-label">{{ zone.label }}</text>
                  <text :x="zone.x" :y="zone.y + 8" text-anchor="middle" fill="rgba(255,255,255,0.85)" :font-size="zone.r > 40 ? 10 : 8" class="zone-label">{{ zone.kwh }}</text>
                  <text v-if="zone.r > 35" :x="zone.x" :y="zone.y + 20" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="8" class="zone-label">{{ zone.buildings }}</text>
                </g>
              </svg>
            </div>
            <div class="heatmap-legend">
              <span class="heatmap-legend-item"><span class="legend-dot legend-dot--low"></span> Low (&lt;100 kWh/m²)</span>
              <span class="heatmap-legend-item"><span class="legend-dot legend-dot--mid"></span> Medium (100–160 kWh/m²)</span>
              <span class="heatmap-legend-item"><span class="legend-dot legend-dot--high"></span> High (&gt;160 kWh/m²)</span>
            </div>
          </div>

          <!-- Data source -->
          <div class="data-source">
            <span class="source-label">Data Source</span>
            <a href="#">GeoDanmark Buildings Aarhus →</a>
            <a href="#">INSPIRE Buildings →</a>
            <a href="#">Brabrand 3D city model →</a>
          </div>
        </StorySection>

        <!-- Chapter 3 — Solar Potential -->
        <StorySection
          id="chapter-3"
          label="Chapter 3"
          title="Mapping Solar Energy Across Every Rooftop"
          narrative="Using 3D city model data and solar irradiance simulations, we analyzed the photovoltaic potential of every rooftop in Brabrand. The results reveal significant untapped capacity for distributed solar generation."
        >
          <StatRow :stats="ch3Stats" />
          <InsightCallout>
            With only 8% of suitable rooftop area currently utilized for solar PV, Brabrand has an estimated 89 MW of untapped photovoltaic potential — enough to meet 60% of the district's annual electricity demand from rooftop solar alone.
          </InsightCallout>
        </StorySection>

        <!-- Chapter 4 — Traffic & Mobility -->
        <StorySection
          id="chapter-4"
          label="Chapter 4"
          title="Sustainable Mobility Patterns in Brabrand"
          narrative="Transportation is a critical piece of the energy puzzle. By analyzing commuter data and mobility infrastructure, we mapped how Brabrand residents move — and where sustainable transport can reduce the district's carbon footprint."
          alt
        >
          <StatRow :stats="ch4Stats" />
          <InsightCallout>
            Brabrand's 34% cycling commute share is well above the national average, but EV charging infrastructure lags behind demand. Expanding the 12 public charging points to 50 could reduce transport emissions by an additional 22%.
          </InsightCallout>
        </StorySection>

        <!-- Chapter 5 — The Path Forward -->
        <StorySection
          id="chapter-5"
          label="Chapter 5"
          title="From Data to Action"
          narrative="The data tells a clear story: Brabrand has the resources, the infrastructure, and the community engagement to become a Positive Energy District. Here's the roadmap from insight to implementation."
        >
          <StoryTimeline />
          <InsightCallout>
            By combining rooftop solar expansion, deep energy renovation of 1960–1980 residential buildings, and sustainable mobility investments, Brabrand can achieve positive energy balance by Q4 2026 — producing 105% of its annual energy consumption from local renewable sources.
          </InsightCallout>
        </StorySection>
      </div>

      <StoryProgress :active-index="activeIndex" :section-ids="sectionIds" />
    </div>

    <StoryCta />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import StoryHero from '../components/storytelling/StoryHero.vue'
import StoryProgress from '../components/storytelling/StoryProgress.vue'
import StorySection from '../components/storytelling/StorySection.vue'
import StatRow from '../components/storytelling/StatRow.vue'
import VizContainer from '../components/storytelling/VizContainer.vue'
import InsightCallout from '../components/storytelling/InsightCallout.vue'
import StoryTimeline from '../components/storytelling/StoryTimeline.vue'
import StoryCta from '../components/storytelling/StoryCta.vue'

const sectionIds = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5']
const activeIndex = ref(0)
const activeZone = ref(null)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id)
          if (index !== -1) {
            activeIndex.value = index
          }
        }
      }
    },
    { rootMargin: '-100px 0px -60% 0px' }
  )

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

const forecastYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032]

// 13 points, x from 60 to 680, step ≈ 51.67
const stepX = 620 / 12

// Consumption: starts ~187 GWh, declines ~3% per year
const consumptionValues = [187, 181, 176, 171, 166, 161, 157, 153, 149, 145, 141, 137, 134]
// Production: starts ~25 GWh, grows to overtake consumption at 2031
const productionValues = [25, 33, 42, 53, 65, 78, 92, 104, 115, 124, 132, 138, 150]

// Map GWh to Y: 0 GWh → y=260, 200 GWh → y=68 (scale: 0.96 px per GWh)
function gwhToY(gwh) { return 260 - gwh * 0.96 }
function yearToX(i) { return Math.round(60 + i * stepX) }

const consumptionPoints = consumptionValues.map((v, i) => ({ x: yearToX(i), y: Math.round(gwhToY(v)) }))
const productionPoints = productionValues.map((v, i) => ({ x: yearToX(i), y: Math.round(gwhToY(v)) }))

const consumptionPolyline = consumptionPoints.map(p => `${p.x},${p.y}`).join(' ')
const productionPolyline = productionPoints.map(p => `${p.x},${p.y}`).join(' ')

// Crossover at 2031 (index 11)
const crossoverX = yearToX(11)
const crossoverY = Math.round(gwhToY(137))

const ch1Stats = [
  { value: '2032', label: 'Target year' },
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

const heatZones = [
  { x: 110, y: 110, r: 42, color: 'rgba(14,138,110,0.8)', label: 'Gellerup N.', kwh: '82 kWh/m²', buildings: '340 buildings' },
  { x: 290, y: 80, r: 56, color: 'rgba(212,136,14,0.8)', label: 'Brabrand Centre', kwh: '145 kWh/m²', buildings: '620 buildings' },
  { x: 460, y: 170, r: 68, color: 'rgba(212,50,14,0.8)', label: 'Gellerup South', kwh: '198 kWh/m²', buildings: '890 buildings' },
  { x: 600, y: 90, r: 48, color: 'rgba(14,138,110,0.8)', label: 'Aarhus Vest', kwh: '91 kWh/m²', buildings: '480 buildings' },
  { x: 180, y: 250, r: 60, color: 'rgba(212,136,14,0.8)', label: 'Toveshoj', kwh: '156 kWh/m²', buildings: '710 buildings' },
  { x: 510, y: 300, r: 44, color: 'rgba(14,138,110,0.8)', label: 'Hasle Ind.', kwh: '76 kWh/m²', buildings: '210 buildings' },
  { x: 680, y: 230, r: 52, color: 'rgba(26,77,110,0.8)', label: 'Lake Area', kwh: '112 kWh/m²', buildings: '390 buildings' },
  { x: 360, y: 320, r: 38, color: 'rgba(212,50,14,0.8)', label: 'Bispehavevej', kwh: '187 kWh/m²', buildings: '160 buildings' },
]
</script>

<style scoped>
.story-body {
  display: grid;
  grid-template-columns: 1fr 260px;
}

.forecast-chart {
  background: var(--color-white);
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  padding: 28px 24px 16px;
  margin-bottom: 32px;
}

.chart-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-darkest);
  margin-bottom: 4px;
}

.chart-subtitle {
  font-size: 13px;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.line-chart {
  width: 100%;
  height: auto;
  display: block;
}

.line-chart .axis-label {
  font-size: 11px;
  fill: var(--color-text-muted);
  font-family: var(--font-primary);
}

.line-chart .crossover-label {
  font-size: 10px;
  fill: var(--color-teal);
  font-weight: 600;
  font-family: var(--font-primary);
}

.line-chart .legend-label {
  font-size: 11px;
  fill: var(--color-text);
  font-family: var(--font-primary);
}

.narrative {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 32px;
}

.heatmap-wrapper {
  margin-bottom: 32px;
}

.heatmap-header {
  margin-bottom: 12px;
}

.map-viz {
  background: linear-gradient(135deg, #d0e4d0, #c0d4e0, #e0d4c0);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
}

.heatmap-svg {
  width: 100%;
  height: auto;
  display: block;
}

.heatmap-zone {
  cursor: pointer;
}

.zone-circle {
  transition: opacity 0.2s;
}

.zone-ring {
  transition: opacity 0.2s;
}

.zone-label {
  pointer-events: none;
}

.heatmap-legend {
  display: flex;
  gap: 20px;
  padding: 12px 0 0;
  font-size: 12px;
  color: var(--color-text-muted);
}

.heatmap-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-dot--low { background: rgba(14,138,110,0.7); }
.legend-dot--mid { background: rgba(212,136,14,0.7); }
.legend-dot--high { background: rgba(212,50,14,0.7); }

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

@media (max-width: 1023px) {
  .story-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .data-source {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
