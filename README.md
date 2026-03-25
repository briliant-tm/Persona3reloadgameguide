# 🎭 LZ Corporation Ltd — Persona 3 Reload Complete Guide

> **Simplifying connectivity. Secure. Scalable. Modern.**

A production-ready, interactive web template for building modern game guides. Built with **Next.js App Router**, React, TypeScript, and Tailwind CSS. Features advanced rendering techniques (SSR, SSG, CSR), API integration, state management, performance optimization, and comprehensive documentation.

Originally created as a guide for Persona 3 Reload—now available as an open-source foundation for your own game guide website.

---

## ⚖️ IMPORTANT — License & Deployment Policy

**This repository is provided AS-IS for educational and personal use only.**

### ❌ You CANNOT
- Deploy and publicly host this entire codebase or modified versions without explicit written permission
- Claim ownership of the original design, architecture, or game content
- Redistribute or resell any part of this project
- Use this for commercial purposes without approval

### ✅ You CAN
- Fork and use this as a **template** for your own original projects
- Use the code patterns and architecture for learning
- Create your own custom game guides using this structure
- Modify the code for personal/educational purposes

### 🔗 Official Live Site
The **official, maintained website** is available at:
- **Production URL:** [https://lzcorporation-p3r.vercel.app](https://lzcorporation-p3r.vercel.app)

## Donate
[Saweria](https://saweria.co/AviL)

This is the authoritative source for the Persona 3 Reload game guide.

---

## 🚀 What's Included

### ✨ Core Features
- 📖 **9 Pre-built Pages**: Story, Combat, Classroom, Social Links, Tartarus, Fusion, Elizabeth Quests, Calculator, and more
- 🎨 **Modern UI**: Dark/light mode with smooth animations, responsive design, Radix UI components
- ⚡ **High Performance**: Next.js App Router, advanced caching, lazy loading, memoization, optimized rendering techniques (SSR, SSG, CSR)
- 🔍 **Search & Filter**: Built-in persona search, type filtering, arcana categorization
- 🛡️ **Flexible Rendering**: Strategically uses SSR, SSG, and CSR for optimal performance and SEO

### 🔧 Advanced Architecture
- **API Integration**: Complete dummyjson.com integration with fallback to static data
- **State Management**: Zustand store with automatic caching (1-hour TTL)
- **Error Handling**: Error boundaries, graceful degradation, retry logic
- **Performance**: Memoization utilities, debounce/throttle, intersection observer lazy loading
- **Type Safety**: Full TypeScript with proper interfaces for all data structures
- **Next.js App Router**: Leverages React Server Components and Client Components for efficient rendering.

---

## 🏗️ Architecture Overview

### Next.js App Router - Rendering Strategies

This project strategically uses Next.js App Router's rendering capabilities:

-   **Static Site Generation (SSG)**: Pages with static content are pre-rendered at build time for maximum performance and SEO.
    -   `/floors`
    -   `/social-links` (list page)
    -   `/social-links/detail/[arcana]` (dynamic routes, pre-rendered)
    -   `/classroom`
    -   `/story`
-   **Server-Side Rendering (SSR)**: Pages requiring fresh data on each request are rendered on the server.
    -   `/elizabeth` (currently static data, but structured for dynamic SSR)
    -   `/fusion` (initial data fetch)
-   **Client-Side Rendering (CSR)**: Highly interactive pages or components are rendered and managed client-side.
    -   `/calculator`
    -   `/combat`
    -   Interactive parts within SSR/SSG pages (extracted into Client Components like `FloorsClient`, `SocialLinksClient`, etc.)

---

### 1. **API Service Layer** (`src/lib/services/api.ts`)
Handles external data fetching with automatic retry logic and error recovery:
- Fetches from dummyjson.com (configurable to any API)
- Retries 3 times with exponential backoff
- 10-second timeout per request
- Smart data mapping from API to local schema

### 2. **Zustand Store** (`src/lib/store/personaStore.ts`)
Central state management with automatic caching:
- Manages personas, loading state, errors
- Automatic 1-hour localStorage cache with TTL
- Graceful fallback on API failure
- Built-in selectors for filtering and searching

### 3. **Cache Utility** (`src/lib/utils/cache.ts`)
localStorage caching with automatic expiration:
- TTL-based cache invalidation
- JSON serialization/deserialization
- Prefix-based organization

### 4. **Performance Utilities** (`src/lib/utils/memoize.ts`)
Optimization helpers for expensive operations:
- Memoization with LRU cache
- Debounce for input handling (300ms)
- Throttle for scroll/resize events (300ms)
- Pre-built filters and search functions

### 5. **Components**
- **LazyPersonaCard** (`src/components/LazyPersonaCard.tsx`): Intersection Observer-based lazy loading
- **ErrorBoundary** (`src/components/ErrorBoundary.tsx`): Error handling + UI
- **ThemeProvider** (`src/components/ThemeProvider.tsx`): Dark/light mode support (Client Component)

### 6. **Custom Hooks** (`src/lib/hooks/useHybridPersonaData.ts`)
Simplified API integration with automatic fallback:
```typescript
const { personas, loading, error, fromAPI, fetchPersonas } = useHybridPersonaData();
```

---

## 📂 Project Structure

```
src/
├── app/                                    # Next.js App Router pages
│   ├── layout.tsx                          # Root layout (Client Component wrapper for ThemeProvider)
│   ├── page.tsx                            # Homepage (Client Component)
│   ├── calculator/                         # Calculator page (Client Component)
│   │   └── page.tsx
│   ├── combat/                             # Combat mechanics & Theurgy (Client Component)
│   │   └── page.tsx
│   ├── classroom/                          # Q&A education system (Server Component, SSG)
│   │   ├── page.tsx
│   │   └── ClassroomClient.tsx             # Client Component for interactivity
│   ├── elizabeth/                          # Elizabeth quest requests (Server Component, SSR-ready)
│   │   ├── page.tsx
│   │   └── ElizabethClient.tsx             # Client Component for interactivity
│   ├── floors/                             # Tartarus floor progression (Server Component, SSG)
│   │   ├── page.tsx
│   │   └── FloorsClient.tsx                # Client Component for interactivity
│   ├── fusion/                             # Persona fusion guide (Server Component, Hybrid SSG/CSR)
│   │   ├── page.tsx
│   │   └── FusionClient.tsx                # Client Component for interactivity & API fetches
│   ├── social-links/                       # 21 social link guides (Server Component, SSG)
│   │   ├── page.tsx
│   │   ├── SocialLinksClient.tsx           # Client Component for interactivity
│   │   └── detail/                         # Dynamic social link routes (Server Component, SSG with generateStaticParams)
│   │       ├── [arcana]/
│   │       │   ├── page.tsx
│   │       │   └── SocialLinkDetailClient.tsx # Client Component for interactivity
│   ├── story/                              # 15 story milestones (Server Component, SSG)
│   │   ├── page.tsx
│   │   └── StoryClient.tsx                 # Client Component for interactivity
│
├── components/                             # Reusable React components
│   ├── Card.tsx                            # Content card with animation
│   ├── ErrorBoundary.tsx                   # Error handling + UI
│   ├── Footer.tsx                          # Footer with links
│   ├── Hero.tsx                            # Hero section (Client Component)
│   ├── Navigation.tsx                      # Header navigation (Client Component)
│   ├── LazyPersonaCard.tsx                 # Lazy loading wrapper
│   ├── ThemeProvider.tsx                   # Dark/light mode (Client Component)
│   ├── SectionTitle.tsx                    # Section headers (Client Component)
│   └── ui/                                 # Radix UI component library (40+ components)
│
├── lib/
│   ├── data/                               # Static game data
│   │   ├── personas.ts                     # 65 persona compendium
│   │   ├── party.ts                        # 10 party members with Theurgies
│   │   ├── combat.ts                       # 9 element types
│   │   ├── classroom.ts                    # Q&A questions
│   │   ├── elizabeth.ts                    # 36 Elizabeth requests
│   │   ├── fusion.ts                       # Fusion mechanics
│   │   ├── social-links.ts                 # 21 social links
│   │   └── story.ts                        # Story milestones & types
│   │
│   ├── services/                           # External service layers
│   │   └── api.ts                          # dummyjson.com API client
│   │
│   ├── store/                              # Zustand state management
│   │   └── personaStore.ts                 # Persona data store + cache
│   │
│   ├── hooks/                              # Custom React hooks
│   │   └── useHybridPersonaData.ts         # Combined API + static data
│   │
│   ├── utils/                              # Utility functions
│   │   ├── cache.ts                        # localStorage caching
│   │   └── memoize.ts                      # Performance utilities
│   │
│   └── types/                              # TypeScript interfaces
│       └── api.ts                          # API type definitions
│
├── styles/
│   └── globals.css                         # Global styles + Tailwind
│
├── next-env.d.ts                           # Next.js TypeScript environment declarations
└── tsconfig.json                           # TypeScript configuration
```

---

## 🎯 Key Features Explained

### **Advanced Rendering Strategies (SSR, SSG, CSR)**
Next.js App Router allows fine-grained control over where and when your components are rendered:

-   **Server Components (Default)**: Rendered entirely on the server, ideal for static content or data fetching. They send only HTML and CSS to the browser, significantly reducing client-side JavaScript. Used for SSG and initial SSR renders.
-   **Client Components (`"use client"`)**: Opt-in to client-side interactivity. They allow the use of hooks, event listeners, and browser APIs. Used for dynamic UI, forms, and animations.
-   **Static Site Generation (SSG)**: Pre-renders pages at build time. Fast loading, great for SEO.
-   **Server-Side Rendering (SSR)**: Renders pages on the server for each request. Ensures fresh data and good SEO for dynamic content.
-   **Client-Side Rendering (CSR)**: Pages fully rendered in the browser. Best for highly interactive, user-specific UIs.

### **Hybrid Data Approach**
```typescript
// Automatic fallback to static data if API fails
const personas = apiData.length > 0 ? apiData : STATIC_DATA;
```
This pattern supports initial static data from Server Components, with client-side re-fetching and fallback logic for dynamic data.

### **Automatic Caching**
- Fetches data on mount
- Caches in localStorage for 1 hour
- Skips API call if cache is valid
- Gracefully degrades on API failure

### **Performance Optimizations**
| Feature | Benefit |
|---------|---------|
| **Lazy Loading** | Only render visible cards |
| **Memoization** | Skip expensive re-computations |
| **Debounce** | Reduce API calls during search |
| **Code Splitting** | Smaller initial bundles (Next.js automatically) |
| **Static Generation** | Pre-rendered HTML at build time |
| **Server Components** | Reduce client-side JavaScript load |

### **Error Resilience**
- 3 automatic retries on API failure
- Exponential backoff (1s, 2s, 4s)
- User-friendly error messages
- Retry buttons in UI

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18.3, TypeScript 5 |
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS, Radix UI (40+ components) |
| **State** | Zustand |
| **Animations** | Motion (Framer Motion fork) |
| **Routing** | Next.js File-System Router |
| **Charts** | Recharts |
| **Deployment** | Vercel (optimized for Next.js, edge-cached) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or latest LTS)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd Persona3reloadgameguide

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

The app will be available at `http://localhost:3000`

---

## 📖 API Integration Guide

See [API_INTEGRATION_GUIDE.md](./API_INTEGRATION_GUIDE.md) for complete documentation on:
- Using the Zustand store
- Fetching data from external APIs
- Caching strategies
- Error handling
- Performance optimization
- Adding API integration to new pages

---

## 🎨 Customization

### Add Your Own Data
1. Edit files in `src/lib/data/`
2. Update TypeScript interfaces in `src/lib/types/`
3. Modify page content in `src/app/`

### Change the API Source
Edit `src/lib/services/api.ts`:
```typescript
const API_BASE = 'your-api-endpoint.com'; // Change API URL
```

### Customize Theme
Edit `src/components/ThemeProvider.tsx`:
- Change color scheme
- Modify dark/light mode colors
- Adjust animation speeds

### Add New Pages
1. Create folder in `src/app/<page-name>`
2. Add `page.tsx` and potentially `layout.tsx`, `loading.tsx`, `error.tsx` etc.
3. If interactivity is needed, create a `ClientComponent.tsx` with `"use client";` and import it into `page.tsx`.

---

## 📊 Build & Deployment

### Build Output
Next.js will provide detailed build output in your console after `npm run build`, indicating which pages are SSG, SSR, or Client Components.

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Configure `vercel.json` (already included and optimized for Next.js)
4. Deploy with one click

### Deploy Anywhere
After `npm run build`, the `.next/` folder contains the optimized production build. This can be deployed to various hosts:
- Netlify (Next.js build preset)
- AWS Amplify (Next.js support)
- DigitalOcean App Platform
- Any custom Node.js server setup

---

## 🔐 Security & Privacy

- ✅ Uses Next.js rendering strategies for optimal security and privacy control
- ✅ Client Components only run necessary interactive code in the browser
- ✅ No backend server *required* for SSG/CSR pages
- ✅ No user tracking or analytics by default
- ✅ No cookies or local storage tracking by default
- ✅ No data collection by default
- ✅ HTTPS-ready

---

## 📝 Documentation

-   **Main Docs**: `API_INTEGRATION_GUIDE.md`
-   **Rendering Techniques**: `RENDERING_TECHNIQUES.md` (internal reference)
-   **Tracking Tags**: `TRACKING_TAGS_REFERENCE.md` (internal reference)

---

## 🎮 Original Content Attribution

This template is based on Persona 3 Reload game content. Game data, mechanics, and artwork are properties of Atlus and SEGA.

Use this template to create guides for:
- ✅ Your own games
- ✅ Other anime/manga series
- ✅ Educational content
- ✅ Community wikis
- ✅ Fan projects (with proper attribution)

---

## 📄 License & Terms

**Copyright © 2026 LZ Corporation Ltd. All Rights Reserved.**

This project is **NOT** open source for deployment. Unauthorized public deployment, hosting, or redistribution of this codebase is strictly prohibited.

### Permitted Uses
- Learning and education
- Personal projects using this as a template
- Creating your own original game guides
- Code review and analysis

### Prohibited Uses
- ❌ Deploying this repo to any public hosting without permission
- ❌ Hosting competing versions of this site
- ❌ Claiming ownership of the original work
- ❌ Commercial use without explicit licensing agreement
- ❌ Redistributing or including in other products

**Violations will result in legal action.**

### For Developers
If you want to create your own game guide using this architecture:
1. Start fresh with your own data
2. Modify the branding and styling
3. Create original content
4. Deploy confidently—your own projects are yours

---

## 🎮 Game Content Attribution

Game content, mechanics, artwork, and data are properties of **Atlus and SEGA**.

Persona 3 Reload is © Atlus. All Rights Reserved. This guide is for educational and fan use only.

---

**Made with ❤️ — Protect your projects**
