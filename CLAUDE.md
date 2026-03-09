# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start Vite dev server (http://localhost:5173, HMR enabled)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No linter, formatter, or test runner is configured.

## Architecture

Vue 3 SPA (Composition API with `<script setup>`, plain JavaScript, no TypeScript) built with Vite. The app renders a fixed header + icon sidebar shell around routed page content.

**Routing:** `src/router/index.js` defines three routes — `/` (HomePage), `/storytelling` (StorytellingPage), `/dataset/:id` (DatasetPage). Uses `createWebHistory` (HTML5 history mode).

**Layout:** `App.vue` wraps `<router-view>` in `AppLayout`, which provides the fixed header (`AppHeader`), collapsible sidebar (`AppSidebar`), and a scrim overlay for mobile. Sidebar state is local to `AppLayout`.

**Pages** (`src/pages/`) compose domain-specific components from `src/components/{home,dataset,storytelling}/`.

## Styling

- Design tokens (colors, spacing, radii, shadows) live in `src/assets/styles/variables.css` as CSS custom properties. Use these variables — don't hardcode values.
- Global resets, shared `.card`, `.btn-primary`, `.btn-secondary`, and `.tag` classes are in `src/assets/styles/global.css`.
- Component styles use `<style scoped>`. The Civora palette centers on teals/blues (`--color-darkest` through `--color-teal`).
- Fonts (Sofia Sans, Inter) are loaded via Google Fonts in `index.html`.
- Responsive breakpoints: 767px (mobile) and 1023px (tablet). On mobile the sidebar collapses and the hamburger menu appears.
