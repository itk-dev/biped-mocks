# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

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

- Replaced tabbed chapter navigation with scrollable page and sticky vertical TOC sidebar on the storytelling page
- TOC highlights current section on scroll via IntersectionObserver and supports click-to-scroll
- TOC sidebar hidden at tablet breakpoint (≤1023px) for single-column layout
- Updated onboarding subtitle to reference user interests instead of "quick tour"

### Fixed

- Registration page header now accounts for the fixed mock banner (no longer overlaps)
- Fixed StoryProgress sticky offset to account for the mockup banner height
- Set Vite `base` to `/biped-mocks/` for GitHub Pages subdirectory deployment
- Switch Vue Router from history mode to hash mode for GitHub Pages compatibility
