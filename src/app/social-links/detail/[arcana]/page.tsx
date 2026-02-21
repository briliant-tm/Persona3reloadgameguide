/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is a Server Component that uses Static Site
 * Generation (SSG) with Dynamic Routes. Next.js pre-renders
 * a static HTML page for each Social Link at build time,
 * identified by its unique `arcana` slug.
 *
 * 1.  **`generateStaticParams`:** This function runs at build time
 *     to determine all possible `arcana` slugs, ensuring every
 *     detail page is pre-rendered.
 * 2.  **Data Fetching (Server Component):** The `SocialLinkDetailPage`
 *     component fetches the specific Social Link data (`SOCIAL_LINKS`)
 *     and related Personas (`PERSONAS`) based on the `arcana` param.
 *     This data fetching occurs once at build time for each page.
 * 3.  **Deployment:** The generated static HTML files are deployed
 *     and served from a CDN.
 * 4.  **Browser:** The browser receives the full HTML content.
 *     Interactive elements (like the expand/collapse toggles,
 *     animations, and theme changes) are "hydrated" and handled
 *     by the `SocialLinkDetailClient` component on the client-side.
 *
 * Why SSG with Dynamic Routes?
 *   - **Static Content:** Social Link details are immutable game
 *     content, making them ideal for pre-rendering.
 *   - **SEO & Performance:** Each detail page is fast, discoverable
 *     by search engines, and provides an excellent user experience.
 *   - **Scalability:** Handles a fixed number of dynamic routes
 *     efficiently by pre-building them all.
 *   - **Separation of Concerns:** Data fetching and initial content
 *     rendering happen on the server, while client-side interactivity
 *     is encapsulated in a Client Component.
 * ============================================================
 */

import Link from "next/link";
import { SocialLink, SOCIAL_LINKS } from "../../../../lib/data/social-links";
import { PERSONAS } from "../../../../lib/data/personas";
import SocialLinkDetailClient from "./SocialLinkDetailClient";

// Function to generate static params for all social links
export async function generateStaticParams() {
    return SOCIAL_LINKS.map((link: SocialLink) => ({
        arcana: link.arcana.toLowerCase().replace(/\s+/g, "-"),
    }));
}

export default function SocialLinkDetailPage({ params }: { params: { arcana: string } }) {
    const { arcana } = params;

    // Fetch social link data
    const link = SOCIAL_LINKS.find(
        (l: SocialLink) => l.arcana.toLowerCase().replace(/\s+/g, "-") === arcana
    );

    // If link not found, return a simple not found message (or handle with a dedicated not-found page)
    if (!link) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-2">Social Link Not Found</h2>
                <p className="mb-6">The arcana "{arcana}" doesn't match any Social Link.</p>
                <Link href="/social-links" className="flex items-center gap-2 px-5 py-3 rounded-lg font-bold">
                    Back to Social Links
                </Link>
            </div>
        );
    }

    // Related Personas for this arcana (fetched server-side at build time)
    const relatedPersonas = PERSONAS.filter((p) => p.arcana === link.arcana).sort(
        (a, b) => a.level - b.level
    );

    return (
        <SocialLinkDetailClient socialLink={link} relatedPersonas={relatedPersonas} />
    );
}