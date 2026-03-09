# BIPED Scaffold

> **This repository is for mockup purposes only.** It contains a static UI prototype and is not the real BIPED application. Do not use it as a reference for production functionality or data.

A Vue 3 single-page application for showcasing data about Positive Energy Districts in Aarhus, Denmark. Built with Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- npm (comes with Node.js)

## Getting started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The app will be available at `http://localhost:5173`. Changes to source files are reflected immediately via hot module replacement.

## Building for production

Create an optimized build:

```sh
npm run build
```

Output goes to the `dist/` directory. To preview the production build locally:

```sh
npm run preview
```

## Project structure

```
src/
  assets/styles/     CSS variables and global styles
  components/
    layout/          App shell (header, sidebar, layout)
    home/            Homepage components
    dataset/         Dataset detail and commenting components
    storytelling/    Data storytelling components
  pages/             Route-level page components
  router/            Vue Router configuration
  main.js            Application entry point
mockups/             HTML prototypes for planned features
```

## Development

### Adding a new page

1. Create a page component in `src/pages/`.
2. Add a route for it in `src/router/index.js`.

### Styling

The project uses plain CSS with custom properties defined in `src/assets/styles/variables.css`. Component styles are scoped within each `.vue` file's `<style scoped>` block.

### Tech stack

- [Vue 3](https://vuejs.org/) with Composition API
- [Vue Router 4](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
