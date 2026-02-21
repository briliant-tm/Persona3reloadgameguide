/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is a Server Component that utilizes Static Site
 * Generation (SSG). It pre-renders the page content, including
 * all static social link data, into HTML at build time.
 * This approach optimizes for fast initial loads and SEO.
 *
 * 1.  **Build Time:** During `next build`, this Server Component
 *     fetches `SOCIAL_LINKS`, `MONTHLY_GUIDE`, and `PRIORITY_TIERS`
 *     data. The HTML is generated, incorporating this data.
 * 2.  **Deployment:** The pre-rendered HTML, CSS, and minimal
 *     JavaScript are deployed and served from a CDN.
 * 3.  **Browser:** The browser receives the full HTML. Client-side
 *     interactivity (like search, filtering, and tab switching)
 *     is then "hydrated" and handled by the `SocialLinksClient`
 *     component.
 *
 * Why SSG?
 *   - **Static Content:** The social link data, monthly guides,
 *     and priority tiers are static game content that does not
 *     change per user or require frequent updates.
 *   - **Performance & SEO:** Delivering pre-built HTML from a
 *     CDN is highly performant and beneficial for search engine
 *     crawlers.
 *   - **Separation of Concerns:** Data fetching and initial content
 *     rendering are managed by the Server Component (`page.tsx`),
 *     while complex client-side logic is encapsulated in
 *     `SocialLinksClient.tsx`.
 * ============================================================
 */

import SocialLinksClient from "./SocialLinksClient";
import {
    SOCIAL_LINKS, MONTHLY_GUIDE, PRIORITY_TIERS
} from "../../lib/data/social-links";

export default function SocialLinksPage() {
    return (
        <SocialLinksClient
            socialLinks={SOCIAL_LINKS}
            monthlyGuide={MONTHLY_GUIDE}
            priorityTiers={PRIORITY_TIERS}
        />
    );
}