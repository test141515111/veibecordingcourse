# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is the landing page for "バイブコーディングコース in #ユニコスクール" - an online course teaching "vibe coding" (pair programming with AI).

**Production URL**: https://veibecordingcourse-lilac.vercel.app/
**Repository**: Fork of https://github.com/masayasusuzuki/veibecordingcourse deployed to https://github.com/test141515111/veibecordingcourse

## Tech Stack
- **Framework**: Next.js 14.0.4 with App Router
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.0.0
- **Animation**: Framer Motion 12.23.0
- **Icons**: Lucide React
- **Fonts**: Noto Sans JP, Inter

## Essential Commands
```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Custom Slash Commands
- `/deploy-fork` - Sync with upstream repository and deploy to fork

## Architecture Overview
The project uses Next.js App Router with a component-based architecture:

- **App Router**: Located in `src/app/`, using `layout.tsx` for root layout and `page.tsx` for the home page
- **Components**: All UI components in `src/components/` follow a pattern of section-based components (HeroSection, AboutSection, etc.)
- **Styling**: Global styles in `src/styles/globals.css`, component-specific styles use Tailwind classes
- **Assets**: Images stored in `public/images/` with project-specific subdirectories

## Design System
Color scheme defined in tailwind.config.js:
- Primary: #FF7A00 (orange)
- Secondary: #00C3FF (neon cyan)
- Accent: #FF44E0 (neon pink)
- Cyber theme colors: #0A1017, #00E676, #00FF9C
- Neutral colors: #1A1A1A, #444444

Layout constants:
- Max container width: 1280px
- Section spacing: 120px margin

## Key Configuration Notes
- **Next.js**: Image optimization disabled (`unoptimized: true`)
- **TypeScript**: Strict mode enabled with path alias `@/*` → `./src/*`
- **Deployment**: Hosted on Vercel, automatically deployed from GitHub

## Component Pattern
All section components follow a similar structure:
1. Use Framer Motion for scroll animations
2. Implement responsive design with Tailwind
3. Export as default function components
4. Use semantic HTML elements

## Project Requirements (from README)
- **Target Users**: 20-35 years old beginners who want to create deliverables quickly using AI
- **Key Features**: 
  - One-page LP with sections: ABOUT, COURSE, SUPPORT, PRICE, VOICE, FAQ, CTA
  - Integration with Google Calendar and LINE API for booking
  - GA4 event tracking
- **Performance Requirements**: LCP ≤ 2.5s, PageSpeed 80+, WCAG 2.1 AA compliant

## Git Workflow
To sync with upstream and deploy:
```bash
git fetch upstream
git merge upstream/main
git push origin main
```