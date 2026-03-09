<template>
  <div class="story-nav">
    <button class="nav-btn">← Previous: The Vision</button>
    <span class="nav-position">2 of 5</span>
    <button class="nav-btn primary">Next: Solar Potential →</button>
  </div>
</template>

<style scoped>
.story-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  margin-top: 32px;
  border-top: 1px solid var(--color-border-lighter);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 1px solid var(--color-border-light);
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 13px;
  color: var(--color-darkest);
  cursor: pointer;
  transition: all 0.15s;
}

.nav-btn:hover {
  background: var(--color-bg-hover);
}

.nav-btn.primary {
  background: var(--color-teal);
  color: var(--color-white);
  border-color: var(--color-teal);
  font-weight: 600;
}

.nav-btn.primary:hover {
  background: var(--color-mid);
}

.nav-position {
  font-size: 13px;
  color: var(--color-text-muted);
}

@media (max-width: 767px) {
  .nav-btn {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
