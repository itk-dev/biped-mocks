<template>
  <MockBanner />
  <AppLayout v-if="!isStandalone">
    <router-view />
  </AppLayout>
  <router-view v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import MockBanner from './components/MockBanner.vue'

const route = useRoute()
const isStandalone = computed(() => route.meta.standalone)
</script>
