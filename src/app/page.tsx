/**
 * ============================================================
 * RENDERING TECHNIQUE: Client-Side Rendering (CSR)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page uses Client-Side Rendering (CSR) because it imports
 * the `Hero` component, which is a client component that
 * contains interactive elements and animations.
 *
 * 1.  **Initial Load:** The server sends a minimal HTML shell.
 * 2.  **Hydration:** React and the `Hero` component's JavaScript
 *     are downloaded, making the page fully interactive.
 * 3.  **Interactivity:** All animations and client-side logic
 *     within the `Hero` component execute in the browser.
 *
 * Why CSR here?
 *   - **Animations and Interactivity:** The `Hero` component
 *     features motion animations and interactive elements best
 *     handled client-side.
 *   - **Simplified Data:** This page itself doesn't require
 *     dynamic data fetching, but its interactive child component
 *     necessitates CSR.
 * ============================================================
 */
'use client'; // Hero component uses Motion animations (client-side interactivity)

import React from "react";
import { Hero } from "../components/Hero";

export default function Home() {
  return <Hero />;
}