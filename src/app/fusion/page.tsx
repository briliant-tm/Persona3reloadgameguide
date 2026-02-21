/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * TRACKER TAG: [SSG-005-FUSION]
 * INTERACTIVE: Client-Side Rendering (CSR) for search/filter
 * ============================================================
 *
 * This page uses Static Rendering (SSG) via `force-static`.
 * The Persona compendium (65 entries across 18 arcanas) is
 * statically imported from `lib/data/personas.ts`.
 *
 * Configuration:
 *   export const dynamic = 'force-static'
 *
 * Why SSG here?
 *   The Persona database is fixed game content — every entry
 *   (name, level, affinities, skills) is immutable between
 *   deployments. Pre-rendering at build time:
 *   - Generates the full grid of Persona cards as static HTML
 *   - Client-side JS hydrates for search/filter interactivity
 *   - No server round-trip needed at request time
 * ============================================================
 */
'use client'; // Required: useState, useMemo (client-side hooks for search/filter)

// Next.js Route Segment Config — forces static generation at build time
export const dynamic = 'force-static';

import React, { useState, useMemo } from "react";
import { Search, Shield, Sparkles } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { PERSONAS } from "../../lib/data/personas";
import { useTheme } from "../../components/ThemeProvider";

export default function FusionPage() {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  
  const filteredPersonas = useMemo(() => 
    PERSONAS.filter(p => 
      (filter === "All" || p.arcana === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    ),
    [filter, search]
  );

  const arcanas = useMemo(() => 
    ["All", ...new Set(PERSONAS.map(p => p.arcana))],
    []
  );

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <SectionTitle title="Fusion Guide" subtitle="Search and filter Personas to find the perfect fusion combination." />
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Persona..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full border rounded-none py-3 pl-10 pr-4 focus:outline-none transition-colors ${
              theme === 'dark' 
                ? "bg-[#0f2438] border-[#1269cc]/50 text-white focus:border-[#51eefc]" 
                : "bg-white border-gray-300 text-gray-900 focus:border-[#1269cc]"
            }`}
          />
        </div>
        
        <div className={`flex gap-2 overflow-x-auto pb-3 md:pb-0 rounded-lg px-2 ${
          theme === 'dark' ? "bg-[#0f2438]/50 scrollbar-thin scrollbar-thumb-[#1269cc]/50 scrollbar-track-[#0a1929]/30" : "bg-gray-100 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        }`} style={{
          scrollbarWidth: 'thin',
          scrollbarColor: theme === 'dark' ? 'rgba(18, 105, 204, 0.5) rgba(10, 25, 41, 0.3)' : 'rgb(209, 213, 219) rgb(245, 245, 245)'
        }}>
          {arcanas.map(a => (
            <button
              key={a}
              onClick={() => setFilter(a)}
              className={`px-4 py-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all rounded ${
                filter === a 
                  ? (theme === 'dark' ? "bg-[#51eefc] text-[#0a1929] shadow-[0_0_10px_rgba(81,238,252,0.3)]" : "bg-[#1269cc] text-white shadow-md")
                  : (theme === 'dark' ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30 hover:text-[#51eefc] hover:bg-[#1269cc]/10" : "bg-white text-gray-600 border border-gray-300 hover:text-[#1269cc] hover:bg-blue-50")
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <p className={`text-sm mb-4 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>
        Showing {filteredPersonas.length} of {PERSONAS.length} Personas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonas.map((persona, idx) => (
          <Card key={persona.id} delay={Math.min(idx * 0.05, 0.5)}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{persona.arcana}</span>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}>{persona.name}</h3>
              </div>
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
                theme === 'dark' ? "border-[#1269cc] bg-[#0a1929] text-white" : "border-[#1269cc] bg-white text-[#1269cc]"
              }`}>
                {persona.level}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className={`flex items-center justify-between p-2 rounded ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                <span className="text-gray-400 text-sm">Affinity</span>
                <span className={`font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{persona.type}</span>
              </div>

              <div className={`flex items-center justify-between p-2 rounded border-l-2 border-red-500 ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                <span className="text-gray-400 text-sm">Weakness</span>
                <div className="flex gap-1 flex-wrap justify-end">
                  {persona.weak.length > 0 ? persona.weak.map(w => (
                    <span key={w} className="text-red-400 text-xs font-bold uppercase bg-red-900/20 px-1.5 py-0.5 rounded">{w}</span>
                  )) : (
                    <span className="text-green-400 text-xs font-bold uppercase bg-green-900/20 px-1.5 py-0.5 rounded">None</span>
                  )}
                </div>
              </div>

              {persona.null && persona.null.length > 0 && (
                <div className={`flex items-center justify-between p-2 rounded border-l-2 border-blue-500 ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Shield size={12} /> Null
                  </span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {persona.null.map(n => (
                      <span key={n} className="text-blue-400 text-xs font-bold uppercase bg-blue-900/20 px-1.5 py-0.5 rounded">{n}</span>
                    ))}
                  </div>
                </div>
              )}

              {persona.skills && persona.skills.length > 0 && (
                <div className={`p-2 rounded ${theme === 'dark' ? "bg-[#0a1929]/50" : "bg-gray-100"}`}>
                  <span className="text-gray-400 text-sm flex items-center gap-1 mb-2">
                    <Sparkles size={12} /> Key Skills
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {persona.skills.map(s => (
                      <span key={s} className={`text-xs px-1.5 py-0.5 rounded border ${
                        theme === 'dark' 
                          ? "border-[#1269cc]/30 text-gray-300 bg-[#1269cc]/10" 
                          : "border-gray-200 text-gray-700 bg-white"
                      }`}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredPersonas.length === 0 && (
        <div className={`text-center py-20 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>
          <Search size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg">No Personas found matching your search.</p>
          <button
            onClick={() => { setSearch(""); setFilter("All"); }}
            className={`mt-4 px-4 py-2 rounded transition-colors ${
              theme === 'dark' ? "bg-[#1269cc]/20 text-[#51eefc] hover:bg-[#1269cc]/30" : "bg-blue-50 text-[#1269cc] hover:bg-blue-100"
            }`}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};