# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Mockup banner displayed on all pages to distinguish from the real application
- `robots.txt` and `noindex` meta tag to prevent search engine indexing
- GitHub Actions workflow to auto-deploy to GitHub Pages on push to `main`
- Registration page (`/register`) with standalone auth layout (no sidebar/nav shell)
- Registration form with standard fields (name, email, password) and custom profile fields (category, role, organisation)
- Standalone route meta support — routes with `meta.standalone` bypass the app shell

### Changed

- Set Vite `base` to `/biped-mocks/` for GitHub Pages subdirectory deployment
- Switch Vue Router from history mode to hash mode for GitHub Pages compatibility
