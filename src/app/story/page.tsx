/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is a Server Component that uses Static Site
 * Generation (SSG). The entire page, including its data, is
 * pre-rendered into HTML at build time. This ensures fast
 * initial page loads and excellent SEO.
 *
 * 1.  **Build Time:** At `next build`, this Server Component
 *     fetches `STORY_STEPS` data and renders the HTML.
 * 2.  **Deployment:** The generated HTML, CSS, and minimal
 *     JavaScript are deployed and served from a CDN.
 * 3.  **Browser:** The browser receives the full HTML. Any
 *     interactive elements (like the spoiler toggle, animations,
 *     and theme changes) are "hydrated" by the `StoryClient`
 *     component on the client-side.
 *
 * Why SSG?
 *   - **Static Content:** Story walkthrough data is immutable
 *     game content that doesn't change frequently.
 *   - **Performance & SEO:** Pre-rendering at build time results
 *     in very fast loading times and is optimal for search engines.
 *   - **Separation of Concerns:** Data fetching and initial HTML
 *     generation occur on the server (in this `page.tsx`), while
 *     client-side interactivity is encapsulated in `StoryClient.tsx`.
 * ============================================================
 */

import StoryClient from "./StoryClient";
import { STORY_STEPS } from "../../lib/data/story";

export default function StoryPage() {
  return (
    <StoryClient storySteps={STORY_STEPS} />
  );
}