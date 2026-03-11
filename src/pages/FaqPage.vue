<template>
  <div class="faq-page">
    <div class="faq-content">
      <AppBreadcrumb :crumbs="[{ label: 'Articles', to: '/articles' }]" current="FAQ" />

      <div class="article-label"><span class="label-qmark">?</span> Guide</div>
      <h1>Frequently Asked Questions</h1>
      <p class="intro">Find answers to common questions about the BIPED platform, its data, and how to get involved.</p>

      <div class="toggle-row">
        <button class="toggle-btn" @click="toggleAll">
          <component :is="allExpanded ? ChevronUp : ChevronDown" :size="14" :stroke-width="2" />
          {{ allExpanded ? 'Collapse all' : 'Expand all' }}
        </button>
      </div>

      <section class="faq-section">
        <h2>About BIPED</h2>
        <details
          v-for="(item, i) in aboutBiped"
          :key="'about-'+i"
          :open="openItems.has('about-'+i)"
          @toggle="onToggle($event, 'about-'+i)"
        >
          <summary>{{ item.q }}</summary>
          <div class="answer">{{ item.a }}</div>
        </details>
      </section>

      <section class="faq-section">
        <h2>Using the Platform</h2>
        <details
          v-for="(item, i) in usingPlatform"
          :key="'using-'+i"
          :open="openItems.has('using-'+i)"
          @toggle="onToggle($event, 'using-'+i)"
        >
          <summary>{{ item.q }}</summary>
          <div class="answer">{{ item.a }}</div>
        </details>
      </section>

      <section class="faq-section">
        <h2>Technical</h2>
        <details
          v-for="(item, i) in technical"
          :key="'tech-'+i"
          :open="openItems.has('tech-'+i)"
          @toggle="onToggle($event, 'tech-'+i)"
        >
          <summary>{{ item.q }}</summary>
          <div class="answer">{{ item.a }}</div>
        </details>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import AppBreadcrumb from '../components/shared/AppBreadcrumb.vue'

const openItems = ref(new Set())

const allKeys = []

const aboutBiped = [
  {
    q: 'What is BIPED?',
    a: 'BIPED (Building Information for Positive Energy Districts) is a European research project that connects open data, digital twins, and community engagement to accelerate the transition toward Positive Energy Districts. The platform provides tools for exploring urban energy data, 3D building models, and sustainability indicators.',
  },
  {
    q: 'What is a Positive Energy District?',
    a: 'A Positive Energy District (PED) is an urban area that generates more renewable energy than it consumes annually, while ensuring a high quality of life and affordable energy for all residents. PEDs integrate energy efficiency, renewable production, and smart grid management at the neighborhood scale.',
  },
  {
    q: 'Who is behind the BIPED project?',
    a: 'BIPED is a consortium of European research institutions, municipalities, and technology partners. The Brabrand pilot in Aarhus, Denmark, is led by Aarhus Municipality in collaboration with the Alexandra Institute, local housing associations, and energy utilities.',
  },
]

const usingPlatform = [
  {
    q: 'How do I explore the data catalog?',
    a: 'Navigate to the Articles section and open the Brabrand Solar dataset. From there you can view metadata, download files, and join the discussion in the comments section. The data catalog includes solar irradiance measurements, building geometry, and energy consumption records.',
  },
  {
    q: 'Can I use the data for my own research?',
    a: 'Yes. All datasets in the BIPED catalog are published under open data licenses. You can download, analyze, and redistribute the data for research, education, and non-commercial purposes. Please check the individual dataset license for specific terms.',
  },
  {
    q: 'How do I access the digital twin?',
    a: 'The digital twin is accessible through the Sol over Brabrand article page, which embeds an interactive 3D viewer. You can navigate the model, inspect individual buildings, and view solar potential estimates. A standalone link to the full-screen twin is also available from the sidebar.',
  },
]

const technical = [
  {
    q: 'What data formats are supported?',
    a: 'The platform works with CityGML for 3D building models, GeoJSON for spatial data, and CSV/JSON for tabular datasets. The digital twin uses the VC Map framework to render 3D Tiles and Cesium terrain layers in the browser.',
  },
  {
    q: 'How often is the data updated?',
    a: 'Dataset update frequency varies. Solar irradiance data is updated monthly, building geometry is refreshed quarterly from GeoDanmark, and energy consumption records are updated annually. Check the "Updated" field on each dataset page for the latest timestamp.',
  },
  {
    q: 'Is there an API available?',
    a: 'The BIPED platform currently provides data through downloadable files and an embedded map viewer. A RESTful API for programmatic access to datasets and building-level indicators is planned for a future release. Stay tuned to the changelog for updates.',
  },
]

aboutBiped.forEach((_, i) => allKeys.push('about-' + i))
usingPlatform.forEach((_, i) => allKeys.push('using-' + i))
technical.forEach((_, i) => allKeys.push('tech-' + i))

const allExpanded = computed(() => openItems.value.size === allKeys.length)

function toggleAll() {
  if (allExpanded.value) {
    openItems.value = new Set()
  } else {
    openItems.value = new Set(allKeys)
  }
}

function onToggle(event, key) {
  const next = new Set(openItems.value)
  if (event.target.open) {
    next.add(key)
  } else {
    next.delete(key)
  }
  openItems.value = next
}
</script>

<style scoped>
.faq-content {
  max-width: 740px;
  margin: 0 auto;
  padding: 32px 64px 64px;
}

.article-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-accent-blue-bg);
  color: var(--color-darkest);
  padding: 4px 14px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.label-qmark {
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

h1 {
  font-size: 36px;
  color: var(--color-darkest);
  margin-bottom: 12px;
  line-height: 1.2;
}

.intro {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 24px;
}

.toggle-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: 1px solid var(--color-teal);
  color: var(--color-teal);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}

.toggle-btn:hover {
  background: var(--color-teal);
  color: var(--color-white);
}

.faq-section {
  margin-bottom: 40px;
}

.faq-section h2 {
  font-size: 20px;
  color: var(--color-darkest);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border-lighter);
}

details {
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  margin-bottom: 8px;
  background: var(--color-white);
  transition: border-color 0.15s;
}

details[open] {
  border-color: var(--color-teal);
}

summary {
  padding: 16px 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-darkest);
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: '+';
  font-size: 18px;
  color: var(--color-teal);
  font-weight: 400;
  flex-shrink: 0;
  margin-left: 16px;
}

details[open] summary::after {
  content: '−';
}

.answer {
  padding: 0 20px 16px;
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.7;
}

@media (max-width: 767px) {
  .faq-content {
    padding: 24px;
  }

  h1 {
    font-size: 28px;
  }
}
</style>
