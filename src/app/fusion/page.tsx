/**
 * ============================================================
 * RENDERING TECHNIQUE: Hybrid (SSG + CSR with API)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is a Server Component that leverages a hybrid rendering
 * approach: initial Static Site Generation (SSG) for fast loading,
 * combined with Client-Side Rendering (CSR) for dynamic API data
 * fetching and interactivity.
 *
 * 1.  **Build Time (SSG):** At `next build`, this Server Component
 *     pre-renders the initial HTML with the statically imported
 *     `PERSONAS` data. The `SectionTitle` is also rendered here.
 *     This provides a fast initial load, even without JavaScript.
 * 2.  **Deployment:** The generated HTML, CSS, and minimal
 *     JavaScript are deployed and served from a CDN.
 * 3.  **Browser (CSR):** The browser receives the pre-rendered HTML.
 *     The `FusionClient` component then "hydrates" and takes over.
 *     It uses client-side state (`useState`, `useMemo`) for search/filtering
 *     and `useEffect` to optionally fetch fresh Persona data from
 *     a dummyjson.com API (or any other external API).
 *
 * Why Hybrid?
 *   - **Optimal User Experience:** Provides instant content display
 *     (SSG) while allowing for dynamic, up-to-date data (CSR with API)
 *     and rich interactivity.
 *   - **Performance & SEO:** Benefits from the speed and SEO advantages
 *     of static content for the initial load.
 *   - **Flexible Data:** Can serve as a robust fallback to static data
 *     if API calls fail, ensuring a resilient user experience.
 *   - **Separation of Concerns:** Initial static data is handled by the
 *     Server Component, while complex API interactions and client-side
 *     UI logic are encapsulated in `FusionClient.tsx`.
 * ============================================================
 */

import FusionClient from "./FusionClient";
import { PERSONAS } from "../../lib/data/personas";
import { SectionTitle } from "../../components/SectionTitle";

export default function FusionPage() {
    return (
        <>
            <div className="relative z-10">
                <SectionTitle
                    title="Fusion Guide"
                    subtitle="Search and filter Personas to find the perfect fusion combination."
                />
            </div>
            <FusionClient staticPersonas={PERSONAS} />
        </>
    );
}