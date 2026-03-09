<template>
  <header class="header">
    <div class="header-left">
      <button class="hamburger" @click="$emit('toggle-sidebar')" aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <router-link to="/" class="header-brand">
        <img
          class="header-logo"
          src="https://bi-ped.civora.org/config/bip/assets/images/bip-logo.png"
          alt="BIPED"
        />
        <span class="header-title">BIPED</span>
      </router-link>
    </div>
    <div class="header-right">
      <a class="info-btn" href="#">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span class="info-text">Find out more</span>
      </a>
      <router-link class="login-btn" to="/register">
        <span class="login-text">Login</span>
        <ArrowRight size="16" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  height: var(--header-height);
  padding: 0 32px;
  border-bottom: 1px solid var(--color-border);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: var(--color-darkest);
  cursor: pointer;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-logo {
  height: 40px;
  object-fit: contain;
}

.header-title {
  font-size: 16px;
  color: var(--color-darkest);
  font-weight: 500;
}

.header-title::before {
  content: "|";
  font-weight: 600;
  font-size: 18px;
  padding-right: 8px;
  color: var(--color-border);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-md);
  background: var(--color-teal);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 500;
}

.info-btn:hover {
  background: var(--color-mid);
}

.login-btn {
  font-size: 14px;
  color: var(--color-darkest);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

@media (max-width: 767px) {
  .hamburger {
    display: flex;
  }

  .info-text,
  .login-text {
    display: none;
  }

  .header {
    padding: 0 16px;
  }
}
</style>
