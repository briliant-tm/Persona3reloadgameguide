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
 *     fetches `EXTRA_BLOCKS` data and renders the HTML.
 * 2.  **Deployment:** The generated HTML, CSS, and minimal
 *     JavaScript are deployed and served from a CDN.
 * 3.  **Browser:** The browser receives the full HTML. Any
 *     interactive elements (animations, theme toggles) are
 *     "hydrated" by the `FloorsClient` component on the client-side.
 *
 * Why SSG?
 *   - **Static Content:** The Tartarus floor data is immutable
 *     game content that doesn't change frequently.
 *   - **Performance & SEO:** Pre-rendering at build time results
 *     in very fast loading times and is optimal for search engines.
 *   - **Separation of Concerns:** Data fetching and initial HTML
 *     generation occur on the server (in this `page.tsx`), while
 *     client-side interactivity is encapsulated in `FloorsClient.tsx`.
 * ============================================================
 */

import { SectionTitle } from "../../components/SectionTitle";
import FloorsClient from "./FloorsClient";

const EXTRA_BLOCKS = [
  {
    id: "tziah",
    name: "TZIAH",
    floors: "Floors 119-163",
    atmosphere: "Golden Desert",
    image: "https://images.unsplash.com/photo-1700837586652-2a827b0aa7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxnb2xkZW4lMjBkZXNlcnQlMjB0ZW1wbGUlMjBydWluc3xlbnwxfHx8fDE3NzE2NDY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    guardian: "Lovers",
    strategy: "Enemies begin using multi-target instant kill skills (Hama/Mudo). Equip Personas that null Light and Dark or bring Homunculi.",
    threats: [
      { name: "Order Giant", weakness: "ELEC WEAK", color: "bg-yellow-400" },
      { name: "Killing Hand", weakness: "FIRE WEAK", color: "bg-red-500" },
    ],
    personas: ["Nigi Mitama", "Fortuna", "King Frost", "Mothman"],
    accentColor: "bg-amber-500/10 border-amber-500/30 text-amber-500",
  },
  {
    id: "harabah",
    name: "HARABAH",
    floors: "Floors 164-214",
    atmosphere: "Industrial Steel",
    image: "https://images.unsplash.com/photo-1769527819266-3eef8d75ffe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXJrJTIwY29ycmlkb3IlMjBpbmR1c3RyaWFsJTIwcGlwZXN8ZW58MXx8fHwxNzcxNjQ2NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    guardian: "Hanged Man",
    strategy: "Many enemies resist physical attacks. Heavy magic investment is essential. Some Shadows can summon reinforcements — target them first.",
    threats: [
      { name: "Phantom Mage", weakness: "WIND WEAK", color: "bg-green-500" },
      { name: "Iron Dice", weakness: "ELEC WEAK", color: "bg-yellow-400" },
    ],
    personas: ["Cu Chulainn", "Daisoujou", "Nebiros", "Scathach"],
    accentColor: "bg-gray-500/10 border-gray-500/30 text-gray-400",
  },
  {
    id: "adamah",
    name: "ADAMAH",
    floors: "Floors 215-263",
    atmosphere: "Cosmic Void",
    image: "https://images.unsplash.com/photo-1761232007928-258c9bd98d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb3NtaWMlMjB2b2lkJTIwZGFyayUyMHNwYWNlfGVufDF8fHx8MTc3MTY0NjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    guardian: "Nyx Avatar",
    strategy: "The final block before Nyx. Enemies here have few weaknesses and high stats. Bring your strongest Personas and stock up on Soma.",
    threats: [
      { name: "Judgment Sword", weakness: "NO WEAKNESS", color: "bg-gray-500" },
      { name: "Stasis Giant", weakness: "LIGHT WEAK", color: "bg-yellow-100 text-yellow-800" },
    ],
    personas: ["Thanatos", "Messiah", "Helel", "Beelzebub"],
    accentColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  },
];

export default function FloorsPage() {
  return (
    <FloorsClient extraBlocks={EXTRA_BLOCKS} />
  );
}