# 🎭 LZ Corporation Ltd — Persona 3 Reload Complete Guide

> **Simplifying connectivity. Secure. Scalable. Modern.**

A production-ready, interactive web template for building modern game guides. Built with React, Vite, TypeScript, and Tailwind CSS. Includes API integration, state management, performance optimization, and comprehensive documentation.

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

This is the authoritative source for the Persona 3 Reload game guide.

---

## 🚀 What's Included

### ✨ Core Features
- 📖 **9 Pre-built Pages**: Story, Combat, Classroom, Social Links, Tartarus, Fusion, Elizabeth Quests, Calculator, and more
- 🎨 **Modern UI**: Dark/light mode with smooth animations, responsive design, Radix UI components
- ⚡ **High Performance**: Vite + React SWC, edge-cached static pages, lazy loading, memoization
- 🔍 **Search & Filter**: Built-in persona search, type filtering, arcana categorization
- 🛡️ **Client-Side Only**: No login, no tracking, no ads—fully static and privacy-focused

### 🔧 Advanced Architecture
- **API Integration**: Complete dummyjson.com integration with fallback to static data
- **State Management**: Zustand store with automatic caching (1-hour TTL)
- **Error Handling**: Error boundaries, graceful degradation, retry logic
- **Performance**: Memoization utilities, debounce/throttle, intersection observer lazy loading
- **Type Safety**: Full TypeScript with proper interfaces for all data structures

---

## 🏗️ Architecture Overview

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
- **ErrorBoundary** (`src/components/ErrorBoundary.tsx`): Error handling with fallback UI
- **ThemeProvider** (`src/components/ThemeProvider.tsx`): Dark/light mode support

### 6. **Custom Hooks** (`src/lib/hooks/useHybridPersonaData.ts`)
Simplified API integration with automatic fallback:
```typescript
const { personas, loading, error, fromAPI, fetchPersonas } = useHybridPersonaData();
```

---

## 📂 Project Structure

```
src/
├── app/                          # Pages (static + interactive)
│   ├── layout.tsx               # Root layout with theme
│   ├── page.tsx                 # Homepage
│   ├── calculator/              # Calculator page (fusion, Theurgy)
│   ├── combat/                  # Combat mechanics & Theurgy
│   ├── classroom/               # Q&A education system
│   ├── elizabeth/               # Elizabeth quest requests
│   ├── floors/                  # Tartarus floor progression
│   ├── fusion/                  # Persona fusion guide (API INTEGRATED)
│   ├── social-links/            # 21 social link guides
│   │   └── detail/              # Dynamic social link routes
│   ├── story/                   # 15 story milestones
│   └── routes.tsx               # React Router configuration
│
├── components/                  # Reusable React components
│   ├── Card.tsx                 # Content card with animation
│   ├── ErrorBoundary.tsx        # Error handling + UI
│   ├── Footer.tsx               # Footer with links
│   ├── Hero.tsx                 # Hero section
│   ├── Navigation.tsx           # Header navigation
│   ├── LazyPersonaCard.tsx      # Lazy loading wrapper
│   ├── ThemeProvider.tsx        # Dark/light mode
│   ├── SectionTitle.tsx         # Section headers
│   └── ui/                      # Radix UI component library (40+ components)
│
├── lib/
│   ├── data/                    # Static game data
│   │   ├── personas.ts          # 65 persona compendium
│   │   ├── party.ts             # 10 party members with Theurgies
│   │   ├── combat.ts            # 9 element types
│   │   ├── classroom.ts         # Q&A questions
│   │   ├── elizabeth.ts         # 36 Elizabeth requests
│   │   ├── fusion.ts            # Fusion mechanics
│   │   ├── social-links.ts      # 21 social links
│   │   └── story.ts             # Story milestones
│   │
│   ├── services/                # External service layers
│   │   └── api.ts               # dummyjson.com API client
│   │
│   ├── store/                   # Zustand state management
│   │   └── personaStore.ts      # Persona data store + cache
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useHybridPersonaData.ts  # Combined API + static data
│   │
│   ├── utils/                   # Utility functions
│   │   ├── cache.ts             # localStorage caching
│   │   └── memoize.ts           # Performance utilities
│   │
│   └── types/                   # TypeScript interfaces
│       └── api.ts               # API type definitions
│
├── styles/
│   ├── globals.css              # Global styles + Tailwind
│   └── theme variables          # Dark mode colors
│
├── App.tsx                      # Root app component
├── main.tsx                     # Entry point
├── routes.tsx                   # Route definitions
└── index.css                    # CSS setup
```

---

## 🎯 Key Features Explained

### **Hybrid Data Approach**
```typescript
// Automatic fallback to static data if API fails
const personas = apiData.length > 0 ? apiData : STATIC_DATA;
```

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
| **Code Splitting** | Smaller initial bundles (Vite) |
| **Static Generation** | Pre-rendered HTML at build time |

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
| **Build** | Vite 6.3.5 with @vitejs/plugin-react-swc |
| **Styling** | Tailwind CSS, Radix UI (40+ components) |
| **State** | Zustand |
| **Animations** | Motion (Framer Motion fork) |
| **Routing** | React Router v7 |
| **Charts** | Recharts |
| **Deployment** | Vercel (edge-cached static) |

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
npm run preview
```

The app will be available at `http://localhost:5173`

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
2. Add `page.tsx` file
3. Update `src/routes.tsx`

---

## 📊 Build & Deployment

### Build Output
```
✓ 2054 modules transformed
✓ ~607 KB main bundle (180 KB gzipped)
✓ Static HTML generation
✓ Build time: ~2.8s
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Configure `vercel.json` (already included)
4. Deploy with one click

### Deploy Anywhere
The project is fully static after build—serve `dist/` folder from any static host:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Any CDN

---

## 🔐 Security & Privacy

- ✅ 100% client-side execution
- ✅ No backend server required
- ✅ No user tracking or analytics
- ✅ No cookies or local storage tracking
- ✅ No data collection
- ✅ HTTPS-ready

---

## 📝 Documentation

- **Main Docs**: `API_INTEGRATION_GUIDE.md`
- **Rendering Techniques**: `RENDERING_TECHNIQUES.md` (internal reference)
- **Tracking Tags**: `TRACKING_TAGS_REFERENCE.md` (internal reference)

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
