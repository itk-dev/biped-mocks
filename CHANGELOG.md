# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Plain question mark icon in the FAQ page badge (replacing circle icon)
- Expand all / Collapse all toggle buttons on the FAQ page
- Discussion section (CommentsSection) on the Sol over Brabrand article page
- Digital Twin page (`/digital-twin`) with VC Map iframe embed, fullscreen toggle, and usage instructions with FAQ link
- Digital Twin route, sidebar navigation link with active state, and homepage feature card link
- Section introduction headers on the homepage above Articles teasers and Explore feature cards

### Fixed

- Improved text contrast for `--color-text-light` (`#6a8a9e` → `#587a8d`) to meet WCAG AA 4.5:1 ratio

### Changed

- Removed "NEW FEATURE" badge and green border from Discussion section; constrained to content column width on the dataset page
- Header: made Login the primary (filled) button and "Find out more" a subtle text link
- Articles list page (`/articles`) with search, sort, and cards/list view toggle
- Sol over Brabrand article page with digital twin iframe embed
- FAQ article page with accordion sections
- Video Guide article page with styled placeholder video blocks
- Reusable breadcrumb component (`AppBreadcrumb`)
- Composable (`useArticles`) with static articles array, search, and sort helpers
- Animated SVG data visualization in the storytelling hero section with traveling dots along lines (right-aligned to avoid text overlap)
- Mock energy balance forecast line graph in Chapter 1 showing production vs. consumption through 2032
- Interactive SVG heatmap in Chapter 2 with inline labels inside bubbles, glow effect, and external title/legend
- Navigable story chapters with 5 tabs of mock content on the storytelling page
- Prev/next navigation between story chapters with dynamic step names
- "6 datasets referenced" link in the story hero pointing to the dataset page
- "3 comments" link in the dataset header that smooth-scrolls to the discussion section
- OpenStreetMap iframe embed replacing the map placeholder on the dataset page
- Lucide icons on onboarding step cards (Globe, Database, LayoutDashboard, Lightbulb)
- Mockup disclaimer in README
- Mockup banner displayed as a fixed bar above the header on all pages
- `robots.txt` and `noindex` meta tag to prevent search engine indexing
- GitHub Actions workflow to auto-deploy to GitHub Pages on push to `main`
- Registration page (`/register`) with standalone auth layout (no sidebar/nav shell)
- Registration form with standard fields (name, email, password) and custom profile fields (category, role, organisation)
- Standalone route meta support — routes with `meta.standalone` bypass the app shell

### Changed

- Storytelling and Dataset pages nested under `/articles/` with breadcrumb navigation
- Sidebar navigation — replaced Data Catalog and Dashboards icons with single Articles icon
- Homepage onboarding step 4 changed from "Find your use case" to "Video Guide" link
- All internal links updated to use `/articles/...` paths
- Replaced tabbed chapter navigation with scrollable page and sticky vertical TOC sidebar on the storytelling page
- TOC highlights current section on scroll via IntersectionObserver and supports click-to-scroll
- TOC sidebar hidden at tablet breakpoint (≤1023px) for single-column layout
- Updated onboarding subtitle to reference user interests instead of "quick tour"

### Fixed

- Registration page header now accounts for the fixed mock banner (no longer overlaps)
- Fixed StoryProgress sticky offset to account for the mockup banner height
- Set Vite `base` to `/biped-mocks/` for GitHub Pages subdirectory deployment
- Switch Vue Router from history mode to hash mode for GitHub Pages compatibility
