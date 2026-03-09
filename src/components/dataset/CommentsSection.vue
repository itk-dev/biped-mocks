<template>
  <div id="discussion" class="comments-section">
    <div class="comments-card">
      <div class="new-badge">NEW FEATURE</div>

      <div class="comments-header">
        <h3><MessageCircle :size="18" :stroke-width="1.5" /> Discussion <span class="comment-count">{{ comments.length }} comments</span></h3>
        <select class="sort-select">
          <option>Newest first</option>
          <option>Oldest first</option>
        </select>
      </div>

      <CommentCompose @submit="addComment" />

      <CommentThread v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import CommentCompose from './CommentCompose.vue'
import CommentThread from './CommentThread.vue'

const comments = ref([
  {
    id: 1,
    initials: 'ML',
    avatarColor: '#00687a',
    author: 'Maria Larsen',
    role: 'DTU Researcher',
    time: '2 days ago',
    text: "Has anyone validated the solar irradiance values against measured data? We're comparing this dataset with our on-site pyranometer readings from Brabrand and seeing roughly 5-8% deviation. Would be good to understand the simulation methodology used.",
    likes: 4,
    replies: [
      {
        initials: 'TK',
        avatarColor: '#b36b00',
        author: 'Thomas Krüger',
        role: 'VCS Engineer',
        time: '1 day ago',
        text: "The solar simulation uses a cumulative sky model based on TMY (Typical Meteorological Year) data. A 5-8% deviation from ground measurements is within expected range. We're planning to publish the methodology document in the next update.",
      },
    ],
  },
  {
    id: 2,
    initials: 'AS',
    avatarColor: '#6a3d9a',
    author: 'Anders Sørensen',
    role: 'Aarhus Kommune',
    time: '5 days ago',
    text: 'Great dataset! We used this for the preliminary PV installation feasibility study in the Brabrand PED area. Would it be possible to get the data extended to cover the neighboring Gellerup district as well?',
    likes: 7,
    replies: [],
  },
  {
    id: 3,
    initials: 'EN',
    avatarColor: '#4a8ab0',
    author: 'Emma Nielsen',
    role: null,
    time: '1 week ago',
    text: "Note: The coordinate reference system is ETRS89 / UTM zone 32N (EPSG:25832). Make sure to set this correctly when importing into your GIS tool — the metadata file doesn't specify it explicitly.",
    likes: 12,
    replies: [],
  },
])

let nextId = 4
function addComment(text) {
  comments.value.unshift({
    id: nextId++,
    initials: 'JP',
    avatarColor: '#1a4d6e',
    author: 'You',
    role: null,
    time: 'Just now',
    text,
    likes: 0,
    replies: [],
  })
}
</script>

<style scoped>
.comments-section {
  grid-column: 1 / -1;
}

.comments-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-card);
  border: 2px solid var(--color-green);
  position: relative;
}

.new-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: var(--color-teal);
  color: var(--color-white);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: var(--radius-lg);
  letter-spacing: 0.5px;
}

.comments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.comments-header h3 {
  font-size: 17px;
  color: var(--color-darkest);
  display: flex;
  align-items: center;
  gap: 8px;
}

.comment-count {
  background: var(--color-border-faintest);
  color: var(--color-text-dark);
  font-size: 12px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: var(--radius-lg);
}

.sort-select {
  font-size: 12px;
  color: var(--color-text-light);
  border: 1px solid var(--color-border-light);
  padding: 6px 12px;
  border-radius: 6px;
  background: var(--color-white);
  font-family: inherit;
}
</style>
