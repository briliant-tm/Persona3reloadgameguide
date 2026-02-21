"use client";
/**
 * ============================================================
 * RENDERING TECHNIQUE: Client-Side Rendering (CSR)
 * FRAMEWORK: Next.js App Router
 * ============================================================
 *
 * This page is designated as a Client Component in Next.js
 * through the `"use client";` directive.
 *
 * 1.  **Initial Load:** The server sends a minimal HTML shell.
 * 2.  **Hydration:** React and the component's JavaScript are
 *     downloaded, and the component is fully rendered in the
 *     browser, "hydrating" the static shell into an
 *     interactive application.
 * 3.  **Interactivity:** All calculations, state updates (e.g.,
 *     selecting arcanas), and UI changes are handled entirely
 *     on the client-side using React hooks like `useState` and
 *     `useMemo`.
 *
 * Why CSR?
 *   - **High Interactivity:** The Fusion Calculator is a stateful
 *     application with numerous user interactions that are best
 *     handled in the browser.
 *   - **No Dynamic Data:** The core data for fusion is static and
 *     can be bundled with the client-side JavaScript. There's no
 *     need to fetch data from a server on each request.
 * ============================================================
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus, ArrowRight, Search, Shuffle, RotateCcw, Sparkles, Target,
  ChevronDown, ChevronUp, Shield, Zap, Info, Wand2
} from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { ARCANA_LIST, getFusionResult, findFusionPairs, type Arcana } from "../../lib/data/fusion";
import { PERSONAS } from "../../lib/data/personas";
import { useTheme } from "../../components/ThemeProvider";

const ARCANA_NUMERALS: Record<string, string> = {
  Fool: "0", Magician: "I", Priestess: "II", Empress: "III", Emperor: "IV",
  Hierophant: "V", Lovers: "VI", Chariot: "VII", Justice: "VIII", Hermit: "IX",
  Fortune: "X", Strength: "XI", "Hanged Man": "XII", Death: "XIII", Temperance: "XIV",
  Devil: "XV", Tower: "XVI", Star: "XVII", Moon: "XVIII", Sun: "XIX", Judgement: "XX",
};

const ARCANA_GRADIENTS: Record<string, string> = {
  Fool: "from-gray-400 to-gray-600",
  Magician: "from-red-400 to-red-600",
  Priestess: "from-indigo-400 to-indigo-600",
  Empress: "from-emerald-400 to-emerald-600",
  Emperor: "from-amber-400 to-amber-600",
  Hierophant: "from-yellow-500 to-yellow-700",
  Lovers: "from-pink-400 to-pink-600",
  Chariot: "from-orange-400 to-orange-600",
  Justice: "from-blue-400 to-blue-600",
  Hermit: "from-slate-400 to-slate-600",
  Fortune: "from-violet-400 to-violet-600",
  Strength: "from-rose-400 to-rose-600",
  "Hanged Man": "from-cyan-400 to-cyan-600",
  Death: "from-gray-600 to-gray-900",
  Temperance: "from-lime-400 to-lime-600",
  Devil: "from-purple-500 to-purple-800",
  Tower: "from-red-600 to-red-900",
  Star: "from-yellow-300 to-yellow-500",
  Moon: "from-blue-300 to-blue-500",
  Sun: "from-orange-300 to-orange-500",
  Judgement: "from-sky-400 to-sky-600",
};

// ============================================================
// ARCANA SELECTOR COMPONENT
// ============================================================
function ArcanaSelector({
  label,
  selected,
  onSelect,
  theme,
}: {
  label: string;
  selected: Arcana | null;
  onSelect: (a: Arcana) => void;
  theme: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 min-w-[200px]">
      <span className={`text-xs uppercase font-bold tracking-widest block mb-2 ${
        theme === "dark" ? "text-gray-500" : "text-gray-400"
      }`}>{label}</span>

      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
          selected
            ? (theme === "dark"
              ? "border-[#51eefc]/50 bg-[#0f2438]"
              : "border-[#1269cc] bg-white shadow-md")
            : (theme === "dark"
              ? "border-[#1269cc]/30 bg-[#0f2438] hover:border-[#1269cc]/50"
              : "border-gray-200 bg-white hover:border-gray-300")
        }`}
      >
        {selected ? (
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${ARCANA_GRADIENTS[selected]} flex items-center justify-center shadow`}>
              <span className="text-white font-black text-xs">{ARCANA_NUMERALS[selected]}</span>
            </div>
            <span className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{selected}</span>
          </div>
        ) : (
          <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Select Arcana...</span>
        )}
        {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-2 rounded-lg border overflow-hidden ${
              theme === "dark" ? "bg-[#0a1929] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-lg"
            }`}
          >
            <div className="max-h-64 overflow-y-auto p-2 grid grid-cols-3 gap-1.5">
              {ARCANA_LIST.map(a => (
                <button
                  key={a}
                  onClick={() => { onSelect(a); setOpen(false); }}
                  className={`flex items-center gap-2 p-2 rounded text-left text-sm transition-all cursor-pointer ${
                    selected === a
                      ? (theme === "dark" ? "bg-[#1269cc]/30 text-[#51eefc]" : "bg-blue-50 text-[#1269cc]")
                      : (theme === "dark" ? "text-gray-300 hover:bg-[#1269cc]/10" : "text-gray-700 hover:bg-gray-50")
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${ARCANA_GRADIENTS[a]} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-black text-[8px]">{ARCANA_NUMERALS[a]}</span>
                  </div>
                  <span className="font-medium truncate">{a}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// PERSONA MINI CARD
// ============================================================
function PersonaMiniCard({ persona, theme }: { persona: typeof PERSONAS[0]; theme: string }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className={`p-3 rounded-lg border transition-all cursor-pointer ${
        showDetail
          ? (theme === "dark" ? "border-[#51eefc]/50 bg-[#1269cc]/10" : "border-[#1269cc] bg-blue-50")
          : (theme === "dark" ? "border-[#1269cc]/20 bg-[#0a1929]/50 hover:border-[#1269cc]/40" : "border-gray-100 bg-gray-50 hover:border-gray-300")
      }`}
      onClick={() => setShowDetail(!showDetail)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs border-2 ${
            theme === "dark" ? "border-[#1269cc] bg-[#0a1929] text-white" : "border-[#1269cc] bg-white text-[#1269cc]"
          }`}>
            {persona.level}
          </div>
          <div>
            <span className={`font-bold text-sm block ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{persona.name}</span>
            <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{persona.type}</span>
          </div>
        </div>
        <ChevronDown size={14} className={`transition-transform ${showDetail ? "rotate-180" : ""} ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`} />
      </div>

      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 pt-2 border-t border-dashed space-y-1.5" style={{
              borderColor: theme === "dark" ? "rgba(18,105,204,0.2)" : "rgba(0,0,0,0.1)"
            }}>
              {/* Weakness */}
              <div className="flex items-center gap-2 text-xs">
                <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Weak:</span>
                {persona.weak.length > 0 ? persona.weak.map(w => (
                  <span key={w} className="text-red-400 font-bold uppercase bg-red-900/20 px-1.5 py-0.5 rounded">{w}</span>
                )) : (
                  <span className="text-green-400 font-bold uppercase bg-green-900/20 px-1.5 py-0.5 rounded">None</span>
                )}
              </div>
              {/* Null */}
              {persona.null && persona.null.length > 0 && (
                <div className="flex items-center gap-2 text-xs flex-wrap">
                  <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Null:</span>
                  {persona.null.map(n => (
                    <span key={n} className="text-blue-400 font-bold uppercase bg-blue-900/20 px-1.5 py-0.5 rounded">{n}</span>
                  ))}
                </div>
              )}
              {/* Skills */}
              {persona.skills && persona.skills.length > 0 && (
                <div className="flex items-center gap-1.5 text-xs flex-wrap mt-1">
                  <Sparkles size={10} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                  {persona.skills.map(s => (
                    <span key={s} className={`px-1.5 py-0.5 rounded border ${
                      theme === "dark" ? "border-[#1269cc]/30 text-gray-300 bg-[#1269cc]/10" : "border-gray-200 text-gray-600 bg-white"
                    }`}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function CalculatorPage() {
  const { theme } = useTheme();
  const [arcanaA, setArcanaA] = useState<Arcana | null>(null);
  const [arcanaB, setArcanaB] = useState<Arcana | null>(null);
  const [activeTab, setActiveTab] = useState<"calculator" | "reverse" | "mc-theurgy">("calculator");
  const [reverseTarget, setReverseTarget] = useState<Arcana | null>(null);

  // Forward fusion result
  const fusionResult = useMemo(() => {
    if (!arcanaA || !arcanaB) return null;
    return getFusionResult(arcanaA, arcanaB);
  }, [arcanaA, arcanaB]);

  const resultPersonas = useMemo(() => {
    if (!fusionResult) return [];
    return PERSONAS.filter(p => p.arcana === fusionResult).sort((a, b) => a.level - b.level);
  }, [fusionResult]);

  // Reverse lookup
  const reversePairs = useMemo(() => {
    if (!reverseTarget) return [];
    return findFusionPairs(reverseTarget);
  }, [reverseTarget]);

  const reversePersonas = useMemo(() => {
    if (!reverseTarget) return [];
    return PERSONAS.filter(p => p.arcana === reverseTarget).sort((a, b) => a.level - b.level);
  }, [reverseTarget]);

  const tabs = [
    { id: "calculator" as const, label: "Fusion Calculator", icon: <Zap size={16} /> },
    { id: "reverse" as const, label: "Reverse Lookup", icon: <Target size={16} /> },
    { id: "mc-theurgy" as const, label: "MC Theurgy Guide", icon: <Wand2 size={16} /> },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${
      theme === "dark" ? "bg-[#0a1929]" : "bg-gray-50"
    }`}>
      <SectionTitle
        title="Fusion Calculator"
        subtitle="Combine two arcanas to find the resulting Persona, or reverse-search to find what creates your target."
      />

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? (theme === "dark" ? "bg-[#51eefc] text-[#0a1929] shadow-[0_0_15px_rgba(81,238,252,0.4)]" : "bg-[#1269cc] text-white shadow-lg")
                : (theme === "dark" ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30 hover:border-[#51eefc]/30" : "bg-white text-gray-600 border border-gray-200 hover:border-[#1269cc]/30")
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ==================== FORWARD CALCULATOR ==================== */}
        {activeTab === "calculator" && (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Fusion inputs */}
            <Card className="!p-6 rounded-lg">
              <div className="flex flex-col lg:flex-row items-stretch gap-4">
                <ArcanaSelector label="First Persona's Arcana" selected={arcanaA} onSelect={setArcanaA} theme={theme} />

                <div className="flex items-center justify-center lg:pt-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-50 text-[#1269cc]"
                  }`}>
                    <Plus size={24} />
                  </div>
                </div>

                <ArcanaSelector label="Second Persona's Arcana" selected={arcanaB} onSelect={setArcanaB} theme={theme} />

                <div className="flex items-center justify-center lg:pt-6">
                  <ArrowRight size={24} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                </div>

                {/* Result display */}
                <div className="flex-1 min-w-[200px]">
                  <span className={`text-xs uppercase font-bold tracking-widest block mb-2 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>Result Arcana</span>
                  <div className={`p-4 rounded-lg border min-h-[60px] flex items-center ${
                    fusionResult
                      ? (theme === "dark" ? "border-[#51eefc]/50 bg-[#1269cc]/15" : "border-[#1269cc] bg-blue-50 shadow-md")
                      : (theme === "dark" ? "border-[#1269cc]/20 bg-[#0a1929]/50" : "border-gray-200 bg-gray-50")
                  }`}>
                    {fusionResult ? (
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${ARCANA_GRADIENTS[fusionResult]} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-black text-sm">{ARCANA_NUMERALS[fusionResult]}</span>
                        </div>
                        <span className={`text-xl font-bold ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{fusionResult}</span>
                      </div>
                    ) : arcanaA && arcanaB && arcanaA === arcanaB ? (
                      <span className={`text-sm italic ${theme === "dark" ? "text-red-400" : "text-red-500"}`}>Same arcana — cannot fuse</span>
                    ) : (
                      <span className={theme === "dark" ? "text-gray-600" : "text-gray-400"}>Select both arcanas</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Reset */}
              {(arcanaA || arcanaB) && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => { setArcanaA(null); setArcanaB(null); }}
                    className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded cursor-pointer transition-colors ${
                      theme === "dark" ? "text-gray-500 hover:text-[#51eefc] hover:bg-[#1269cc]/10" : "text-gray-400 hover:text-[#1269cc] hover:bg-blue-50"
                    }`}
                  >
                    <RotateCcw size={12} /> Reset
                  </button>
                </div>
              )}
            </Card>

            {/* Available Personas in result arcana */}
            {fusionResult && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                  <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Available {fusionResult} Personas
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    theme === "dark" ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500"
                  }`}>{resultPersonas.length}</span>
                </div>

                {resultPersonas.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {resultPersonas.map(p => (
                      <PersonaMiniCard key={p.id} persona={p} theme={theme} />
                    ))}
                  </div>
                ) : (
                  <p className={`text-sm italic ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    No Personas catalogued for the {fusionResult} arcana yet.
                  </p>
                )}
              </motion.div>
            )}

            {/* Info panel */}
            <div className={`p-5 rounded-lg border ${
              theme === "dark" ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Info size={16} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                <h4 className={`font-bold text-sm ${theme === "dark" ? "text-white" : "text-gray-900"}`}>How Fusion Works</h4>
              </div>
              <div className={`text-sm space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                <p>• Select two different Arcanas above. The fusion table determines which Arcana the result belongs to.</p>
                <p>• The result Persona's <strong>level</strong> is based on the average level of the two ingredient Personas, rounded down to the nearest Persona available in the result Arcana.</p>
                <p>• Skills are inherited semi-randomly from the ingredients. Plan your inheritance by saving before fusing.</p>
                <p>• Maxing a Social Link of the result Arcana gives a <strong>bonus EXP</strong> to the fused Persona, potentially granting extra levels and skills.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================== REVERSE LOOKUP ==================== */}
        {activeTab === "reverse" && (
          <motion.div
            key="reverse"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            <Card className="!p-6 rounded-lg">
              <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Select a target Arcana to see every fusion pair that produces it, plus all available Personas in that arcana.
              </p>

              <div className="max-w-sm">
                <ArcanaSelector label="Target Arcana" selected={reverseTarget} onSelect={setReverseTarget} theme={theme} />
              </div>

              {reverseTarget && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setReverseTarget(null)}
                    className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded cursor-pointer transition-colors ${
                      theme === "dark" ? "text-gray-500 hover:text-[#51eefc] hover:bg-[#1269cc]/10" : "text-gray-400 hover:text-[#1269cc] hover:bg-blue-50"
                    }`}
                  >
                    <RotateCcw size={12} /> Reset
                  </button>
                </div>
              )}
            </Card>

            {reverseTarget && (
              <>
                {/* Fusion pairs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Shuffle size={16} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Fusion Pairs → {reverseTarget}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      theme === "dark" ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500"
                    }`}>{reversePairs.length} combinations</span>
                  </div>

                  {reversePairs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {reversePairs.map(([a, b], idx) => (
                        <motion.div
                          key={`${a}+${b}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: Math.min(idx * 0.03, 0.3), duration: 0.3 }}
                          className={`flex items-center gap-3 p-3 rounded-lg border ${
                            theme === "dark" ? "border-[#1269cc]/20 bg-[#0f2438]" : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${ARCANA_GRADIENTS[a]} flex items-center justify-center`}>
                              <span className="text-white font-black text-[8px]">{ARCANA_NUMERALS[a]}</span>
                            </div>
                            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{a}</span>
                          </div>
                          <Plus size={14} className={theme === "dark" ? "text-gray-600" : "text-gray-300"} />
                          <div className="flex items-center gap-1.5">
                            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${ARCANA_GRADIENTS[b]} flex items-center justify-center`}>
                              <span className="text-white font-black text-[8px]">{ARCANA_NUMERALS[b]}</span>
                            </div>
                            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{b}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className={`text-sm italic ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      No standard 2-way fusion produces {reverseTarget}. It may require a special fusion recipe.
                    </p>
                  )}
                </motion.div>

                {/* Personas in target arcana */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={16} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                    <h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {reverseTarget} Personas
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      theme === "dark" ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-100 text-gray-500"
                    }`}>{reversePersonas.length}</span>
                  </div>

                  {reversePersonas.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {reversePersonas.map(p => (
                        <PersonaMiniCard key={p.id} persona={p} theme={theme} />
                      ))}
                    </div>
                  ) : (
                    <p className={`text-sm italic ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                      No Personas catalogued for {reverseTarget} yet.
                    </p>
                  )}
                </motion.div>
              </>
            )}
          </motion.div>
        )}
        {/* ==================== MC THEURGY GUIDE ==================== */}
        {activeTab === "mc-theurgy" && (
          <motion.div
            key="mc-theurgy"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            <Card className="!p-6 rounded-lg">
              <div className="flex items-start gap-3 mb-6">
                <Info size={20} className={theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"} />
                <div>
                  <h3 className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Protagonist Theurgy Unlock Guide
                  </h3>
                  <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    To unlock each Theurgy skill for the protagonist, fuse and equip the required Persona pair in your party.
                  </p>
                </div>
              </div>

              {/* Theurgy Table */}
              <div className={`overflow-x-auto rounded-lg border ${theme === "dark" ? "border-[#1269cc]/30 bg-[#0f2438]" : "border-gray-200 bg-white"}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className={theme === "dark" ? "bg-[#1269cc]/15 border-b border-[#1269cc]/30" : "bg-blue-50 border-b border-gray-200"}>
                      <th className={`px-4 py-3 text-left font-bold ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>Theurgy Skill</th>
                      <th className={`px-4 py-3 text-left font-bold ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>Required Personas</th>
                      <th className={`px-4 py-3 text-left font-bold ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { skill: "Cadenza", personas: "Orpheus + Apsaras", desc: "Restores 50% HP to all allies, increases accuracy and evasion." },
                      { skill: "Jack Brothers", personas: "Jack Frost + Pyro Jack", desc: "Medium Almighty damage to all enemies, high chance to inflict Down." },
                      { skill: "King and I", personas: "Black Frost + King Frost", desc: "Heavy Ice damage to all enemies, medium chance to inflict Freeze." },
                      { skill: "Best Friends", personas: "Forneus + Decarabia", desc: "Buff: Next physical/magical attack by one ally deals double damage." },
                      { skill: "Scarlet Havoc", personas: "Siegfried + Mithras", desc: "Severe Slash damage to all enemies, ignores all resistances." },
                      { skill: "Trickster", personas: "Susano-o + Loki", desc: "Massive Almighty damage to all enemies, chance random ailment." },
                      { skill: "Armageddon", personas: "Helel + Satan", desc: "Ultimate Almighty damage to all enemies, reduces MC's HP/SP to 1." },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? (theme === "dark" ? "bg-[#0a1929]/50" : "bg-gray-50") : ""}>
                        <td className={`px-4 py-3 font-bold whitespace-nowrap ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{row.skill}</td>
                        <td className={`px-4 py-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{row.personas}</td>
                        <td className={`px-4 py-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Instructions Card */}
            <Card className="!p-6 rounded-lg">
              <h3 className={`font-bold text-lg mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                How to Unlock
              </h3>
              <ol className={`space-y-3 mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex gap-3">
                  <span className={`font-bold px-2.5 py-0.5 rounded text-sm ${theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-50 text-[#1269cc]"}`}>1</span>
                  <span>Fuse the required Persona pair in the Velvet Room.</span>
                </li>
                <li className="flex gap-3">
                  <span className={`font-bold px-2.5 py-0.5 rounded text-sm ${theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-50 text-[#1269cc]"}`}>2</span>
                  <span>Equip <strong>both</strong> Personas in your party.</span>
                </li>
                <li className="flex gap-3">
                  <span className={`font-bold px-2.5 py-0.5 rounded text-sm ${theme === "dark" ? "bg-[#1269cc]/20 text-[#51eefc]" : "bg-blue-50 text-[#1269cc]"}`}>3</span>
                  <span>The Theurgy skill will appear in battle when requirements are met.</span>
                </li>
              </ol>

              {/* Important Note */}
              <div className={`p-4 rounded-lg border-l-4 ${theme === "dark" ? "border-[#51eefc] bg-[#0f2438]" : "border-[#1269cc] bg-blue-50"}`}>
                <p className={`font-bold text-sm mb-2 ${theme === "dark" ? "text-[#51eefc]" : "text-[#1269cc]"}`}>💡 Important</p>
                <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Once a Theurgy skill is unlocked, it remains available for future battles even if the required Personas are replaced, fused with other Personas, or no longer in your party. The skill is permanently learned by the protagonist.
                </p>
              </div>
            </Card>
          </motion.div>
        )}      </AnimatePresence>
    </div>
  );
}