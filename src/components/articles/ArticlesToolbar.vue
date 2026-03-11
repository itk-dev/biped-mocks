<template>
  <div class="toolbar">
    <div class="toolbar-left">
      <div class="search-wrapper">
        <Search :size="16" :stroke-width="1.5" class="search-icon" />
        <input
          type="text"
          class="search-input"
          placeholder="Search articles..."
          :value="search"
          @input="$emit('update:search', $event.target.value)"
        />
      </div>
    </div>
    <div class="toolbar-right">
      <select
        class="sort-select"
        :value="sort"
        @change="$emit('update:sort', $event.target.value)"
      >
        <option value="date-newest">Newest first</option>
        <option value="date-oldest">Oldest first</option>
        <option value="title-az">Title A–Z</option>
        <option value="title-za">Title Z–A</option>
      </select>
      <div class="view-toggle">
        <button
          class="toggle-btn"
          :class="{ active: view === 'cards' }"
          @click="$emit('update:view', 'cards')"
          aria-label="Cards view"
        >
          <LayoutGrid :size="16" :stroke-width="1.5" />
        </button>
        <button
          class="toggle-btn"
          :class="{ active: view === 'list' }"
          @click="$emit('update:view', 'list')"
          aria-label="List view"
        >
          <List :size="16" :stroke-width="1.5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search, LayoutGrid, List } from 'lucide-vue-next'

defineProps({
  search: String,
  sort: String,
  view: String,
})

defineEmits(['update:search', 'update:sort', 'update:view'])
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0;
}

.toolbar-left {
  flex: 1;
  max-width: 360px;
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 10px 12px 10px 38px;
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-family: var(--font-primary);
  color: var(--color-darkest);
  background: var(--color-white);
  transition: border-color 0.15s;
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-teal);
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sort-select {
  padding: 10px 12px;
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-family: var(--font-primary);
  color: var(--color-text);
  background: var(--color-white);
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: var(--color-teal);
}

.view-toggle {
  display: flex;
  border: 1px solid var(--color-border-lighter);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  background: var(--color-white);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.toggle-btn:first-child {
  border-right: 1px solid var(--color-border-lighter);
}

.toggle-btn.active {
  background: var(--color-bg-hover);
  color: var(--color-darkest);
}

.toggle-btn:hover:not(.active) {
  background: var(--color-bg-hover);
}

@media (max-width: 767px) {
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .toolbar-left {
    max-width: none;
  }

  .toolbar-right {
    justify-content: space-between;
  }
}
</style>
