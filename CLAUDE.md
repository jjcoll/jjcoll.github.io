# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React portfolio website built with Vite, TypeScript, and Tailwind CSS, integrated with Sanity CMS for content management. The project consists of:

- **Frontend**: Modern React app with React Router for navigation
- **CMS**: Sanity Studio for content management (in `/sanity` directory)
- **Deployment**: GitHub Pages with automated CI/CD

## Architecture

### Frontend Structure
- **Entry Point**: `src/main.tsx` → `src/router.tsx`
- **Routing**: React Router with layout wrapper (`RootLayout`)
- **Pages**: Main portfolio page, individual project pages, 404 page
- **Components**: Modular UI components with shadcn/ui patterns
- **Styling**: Tailwind CSS with component-based organization
- **Content**: Sanity CMS integration via `src/lib/sanity.ts`

### Content Management
- **Sanity Project ID**: `divxsuit` (production dataset)
- **Schema**: Project content type with portable text support
- **Images**: Handled via Sanity's image URL builder
- **API**: GROQ queries for fetching projects

## Development Commands

### Frontend Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Sanity CMS Development
```bash
# Navigate to CMS directory
cd sanity

# Start Sanity Studio
npm run dev

# Build Sanity Studio
npm run build

# Deploy Sanity Studio
npm run deploy
```

## Key Configuration

### Import Aliases
- `@/`: Points to `src/` directory (configured in `vite.config.ts`)

### Deployment
- **Target**: GitHub Pages
- **Build Output**: `dist/` directory
- **Workflow**: `.github/workflows/deploy.yml` triggers on main branch pushes
- **Base Path**: Root (`/`) for user/org GitHub Pages

### Content Types
- **Project**: Main content type with title, slug, images, descriptions, technologies, and URLs
- **Portable Text**: Rich text content with React rendering support

## Important Notes

- No test suite is currently configured
- Sanity environment variables are hardcoded (not using secrets)
- GitHub Pages deployment requires `.nojekyll` file for proper asset loading
- Uses React 19 and modern ESM build configuration