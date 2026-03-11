import { ref } from 'vue'

const articles = ref([
  {
    id: 'storytelling',
    title: 'Aarhus on the Road to Positive Energy Districts',
    description: 'How Brabrand is transforming its energy profile through smart building design, solar optimization, and community engagement — told through data.',
    type: 'Data Story',
    tags: ['Energy', 'Solar', 'Brabrand'],
    date: '2026-02-15',
    icon: 'BookOpen',
  },
  {
    id: 'brabrand-solar',
    title: 'Brabrand 3D City Model with Solar Data',
    description: 'Search and access open datasets, including solar irradiance and photovoltaic performance data for the Brabrand district.',
    type: 'Dataset',
    tags: ['Energy', 'Open Data', 'ZIP'],
    date: '2026-01-20',
    icon: 'Database',
  },
  {
    id: 'sol-over-brabrand',
    title: 'Sol over Brabrand',
    description: 'Learn about the Sol over Brabrand organization and explore the digital twin of the Brabrand district in an interactive 3D environment.',
    type: 'Article',
    tags: ['Organization', 'Digital Twin', 'Community'],
    date: '2026-03-01',
    icon: 'Sun',
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about the BIPED platform, its data, and how to get involved with Positive Energy Districts.',
    type: 'Guide',
    tags: ['Help', 'Getting Started'],
    date: '2026-03-05',
    icon: 'HelpCircle',
  },
  {
    id: 'video-guide',
    title: 'Video Guide',
    description: 'Watch video walkthroughs of the BIPED platform, the digital twin, and the data catalog to get started quickly.',
    type: 'Guide',
    tags: ['Tutorial', 'Getting Started'],
    date: '2026-03-10',
    icon: 'Video',
  },
])

export function searchArticles(query) {
  const q = query.toLowerCase().trim()
  if (!q) return articles.value
  return articles.value.filter(
    (a) => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
  )
}

export function sortArticles(list, key) {
  const sorted = [...list]
  switch (key) {
    case 'date-newest':
      sorted.sort((a, b) => b.date.localeCompare(a.date))
      break
    case 'date-oldest':
      sorted.sort((a, b) => a.date.localeCompare(b.date))
      break
    case 'title-az':
      sorted.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'title-za':
      sorted.sort((a, b) => b.title.localeCompare(a.title))
      break
  }
  return sorted
}

export function useArticles() {
  return { articles, searchArticles, sortArticles }
}
