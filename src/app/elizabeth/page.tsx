/**
 * ============================================================
 * RENDERING TECHNIQUE: Server-Side Rendering (SSR)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is a Server Component that uses Server-Side Rendering (SSR).
 * It fetches the necessary data on the server for each request and
 * delivers a fully-formed HTML page to the client. This ensures the
 * content is always up-to-date and provides good SEO.
 *
 * 1.  **Data Fetching (Server Component):** For each request, this
 *     Server Component fetches `ELIZABETH_REQUESTS` and related
 *     configuration data. While currently using static imports, if
 *     this data were from a dynamic API, a `fetch` call with
 *     `cache: 'no-store'` or `revalidate: 0` would be used here.
 *     The `SectionTitle` is also rendered directly in this Server
 *     Component.
 * 2.  **HTML Generation:** The server renders the initial HTML content
 *     with the fetched data and sends it to the browser.
 * 3.  **Browser:** The browser receives the HTML. Client-side
 *     interactivity (search, filters, expand/collapse toggles,
 *     and theme changes) are "hydrated" and managed by the
 *     `ElizabethClient` component on the client-side.
 *
 * Why SSR?
 *   - **Dynamic Potential:** While the data is currently static,
 *     the structure allows for easy transition to dynamic API
 *     fetching, ensuring content freshness.
 *   - **SEO & Initial Load:** Provides excellent SEO and a fast
 *     initial contentful paint as the HTML is pre-built on the
 *     server.
 *   - **Separation of Concerns:** Data fetching and initial HTML
 *     generation occur on the server (in this `page.tsx`), while
 *     complex client-side logic is encapsulated in `ElizabethClient.tsx`.
 * ============================================================
 */

import ElizabethClient from "./ElizabethClient";
import {
    ELIZABETH_REQUESTS, DIFFICULTY_COLORS,
    type ElizabethRequest
} from "../../lib/data/elizabeth";
import { SectionTitle } from "../../components/SectionTitle";
import { List, Ghost, Gem, Skull, CheckCircle, Star } from "lucide-react";


const CATEGORY_CONFIG = {
    all: { icon: <List size={16} />, gradient: "from-blue-400 to-blue-600", label: "All" },
    persona: { icon: <Ghost size={16} />, gradient: "from-purple-400 to-purple-600", label: "Persona" },
    item: { icon: <Gem size={16} />, gradient: "from-emerald-400 to-emerald-600", label: "Item" },
    shadow: { icon: <Skull size={16} />, gradient: "from-red-400 to-red-600", label: "Shadow" },
    task: { icon: <CheckCircle size={16} />, gradient: "from-amber-400 to-amber-600", label: "Task" },
    special: { icon: <Star size={16} />, gradient: "from-pink-400 to-pink-600", label: "Special" },
};

export default function ElizabethPage() {
    return (
        <>
            <div className="relative z-10">
                <SectionTitle
                    title="Elizabeth's Requests"
                    subtitle="Complete quests from the Velvet Room attendant to earn rare rewards, items, and powerful equipment."
                />
            </div>
            <ElizabethClient
                elizabethRequests={ELIZABETH_REQUESTS}
                difficultyColors={DIFFICULTY_COLORS}
                categoryConfig={CATEGORY_CONFIG}
            />
        </>
    );
}