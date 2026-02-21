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
 *     fetches `CLASSROOM_QUESTIONS` and `CLASSROOM_EXAMS` data
 *     and renders the HTML.
 * 2.  **Deployment:** The generated HTML, CSS, and minimal
 *     JavaScript are deployed and served from a CDN.
 * 3.  **Browser:** The browser receives the full HTML. Any
 *     interactive elements (like tab switching, theme toggles)
 *     are "hydrated" by the `ClassroomClient` component on the
 *     client-side.
 *
 * Why SSG?
 *   - **Static Content:** Classroom questions and exam data are
 *     immutable game content that doesn't change frequently.
 *   - **Performance & SEO:** Pre-rendering at build time results
 *     in very fast loading times and is optimal for search engines.
 *   - **Separation of Concerns:** Data fetching and initial HTML
 *     generation occur on the server (in this `page.tsx`), while
 *     client-side interactivity is encapsulated in `ClassroomClient.tsx`.
 * ============================================================
 */

import ClassroomClient from "./ClassroomClient";
import { CLASSROOM_QUESTIONS, CLASSROOM_EXAMS } from "../../lib/data/classroom";
import { SectionTitle } from "../../components/SectionTitle";

export default function ClassroomPage() {
  return (
    <>
      <div className="relative z-10">
        <SectionTitle title="Classroom Answers" subtitle="Ace your exams and pop quizzes to boost your Academics." />
      </div>
      <ClassroomClient classroomQuestions={CLASSROOM_QUESTIONS} classroomExams={CLASSROOM_EXAMS} />
    </>
  );
}