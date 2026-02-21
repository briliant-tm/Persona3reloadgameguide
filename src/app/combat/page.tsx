/**
 * ============================================================
 * RENDERING TECHNIQUE: Static Site Generation (SSG)
 * ============================================================
 *
 * This page uses Static Rendering (SSG) via `force-static`.
 * The combat mechanics (elements, Theurgy, Shift, All-Out Attack)
 * are fixed game data that never changes at runtime.
 *
 * Configuration:
 *   export const dynamic = 'force-static'
 *
 * Why SSG here?
 *   All combat data (9 element types, party member Theurgies,
 *   shift/all-out mechanics) is statically imported from
 *   `lib/data/combat.ts` and `lib/data/party.ts`. Since game
 *   mechanics don't change between deploys, SSG is optimal:
 *   - Pre-rendered once at build time
 *   - Served instantly from CDN edge
 *   - Zero runtime server cost
 * ============================================================
 */
'use client'; // Required: useState, AnimatePresence (client-side hooks)

// Next.js Route Segment Config — forces static generation at build time
export const dynamic = 'force-static';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sword, Zap, Shield, Sparkles, ChevronDown, ChevronUp, Users } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ELEMENTS } from "../../lib/data/combat";
import { PARTY_MEMBERS } from "../../lib/data/party";
import { useTheme } from "../../components/ThemeProvider";

import image_21759f992f0d7304d758e12635af8d6d001286fa from 'figma:asset/21759f992f0d7304d758e12635af8d6d001286fa.png';
import image_14eda866ffb7e5990bcfba528d31bd88361f1865 from 'figma:asset/14eda866ffb7e5990bcfba528d31bd88361f1865.png';
import image_2b4ffce2d7c1faaaca2d9ef1198340d46e6258aa from 'figma:asset/2b4ffce2d7c1faaaca2d9ef1198340d46e6258aa.png';
import image_a7d9cc459eb57d733c0b77ca6609a1e8546920d8 from 'figma:asset/a7d9cc459eb57d733c0b77ca6609a1e8546920d8.png';
import image_9f58ec1c5dd7788c0dbb715bfb864ad7e4a775ae from 'figma:asset/9f58ec1c5dd7788c0dbb715bfb864ad7e4a775ae.png';

export default function CombatPage() {
  const { theme } = useTheme();
  const [combatTab, setCombatTab] = useState("affinity");
  const [selectedElement, setSelectedElement] = useState(ELEMENTS[3]);

  const tabs = [
    { id: "affinity", label: "Affinity & Weakness" },
    { id: "theurgy", label: "Theurgy" },
    { id: "shift", label: "Shift" },
    { id: "allout", label: "All-Out Attack" },
  ];

  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <SectionTitle title="Combat Mechanics" subtitle="Master the Dark Hour." />

      {/* Sub-navigation */}
      <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCombatTab(tab.id)}
            className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
              combatTab === tab.id
                ? (theme === 'dark' ? "bg-[#51eefc] text-[#0a1929] shadow-[0_0_15px_rgba(81,238,252,0.4)]" : "bg-[#1269cc] text-white shadow-lg")
                : (theme === 'dark' ? "bg-[#0f2438] text-gray-400 border border-[#1269cc]/30" : "bg-white text-gray-600 border border-gray-200")
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {combatTab === "affinity" && (
            <motion.div
              key="affinity"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Card className="h-full">
                <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>
                  <Sword className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} /> Elemental Chart
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {ELEMENTS.map(el => (
                    <button
                      key={el.name}
                      onClick={() => setSelectedElement(el)}
                      className={`flex flex-col items-center p-4 rounded border transition-all ${
                        selectedElement.name === el.name
                          ? (theme === 'dark' ? "border-[#51eefc] bg-[#1269cc]/20 shadow-[0_0_10px_#51eefc]" : "border-[#1269cc] bg-blue-50 ring-2 ring-[#1269cc]")
                          : (theme === 'dark' ? "bg-[#0a1929] border-[#1269cc]/20 hover:border-white" : "bg-white border-gray-200 hover:border-[#1269cc]")
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full ${el.color} mb-2 shadow-lg ring-2 ring-white/20 flex items-center justify-center text-white/90`}>
                        <el.icon size={20} strokeWidth={2.5} />
                      </div>
                      <span className={`font-bold text-sm ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{el.name}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="flex flex-col justify-center">
                 <div className="text-center mb-8">
                    <div className={`w-24 h-24 mx-auto rounded-full ${selectedElement.color} mb-6 shadow-[0_0_30px_currentColor] animate-pulse flex items-center justify-center text-white`}>
                       <selectedElement.icon size={48} strokeWidth={2} />
                    </div>
                    <h2 className={`text-4xl font-black mb-2 ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}>{selectedElement.name.toUpperCase()}</h2>
                    <p className={`text-lg ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>{selectedElement.desc}</p>
                 </div>
                 
                 <div className={`p-6 rounded-lg border ${theme === 'dark' ? "bg-[#0a1929] border-[#1269cc]/30" : "bg-gray-50 border-gray-200"}`}>
                    <h4 className={`text-sm uppercase font-bold mb-3 tracking-widest ${theme === 'dark' ? "text-gray-400" : "text-gray-500"}`}>COMBAT TIPS</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className={theme === 'dark' ? "text-gray-300" : "text-gray-700"}>
                          Usually strong against: <span className="font-bold">{selectedElement.weak === "None" ? "N/A" : selectedElement.weak}</span> types.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className={theme === 'dark' ? "text-gray-300" : "text-gray-700"}>
                          Striking a weakness grants "1 More".
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">!</span>
                        <span className={theme === 'dark' ? "text-gray-300" : "text-gray-700"}>
                          Be careful of enemies that reflect or absorb {selectedElement.name}.
                        </span>
                      </li>
                    </ul>
                 </div>
              </Card>
            </motion.div>
          )}

          {combatTab === "theurgy" && (
            <motion.div
              key="theurgy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero Banner */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src={image_21759f992f0d7304d758e12635af8d6d001286fa}
                  alt="Theurgy Concept"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
                <div className="absolute inset-0 flex items-end p-8">
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter transform -skew-x-12 origin-bottom-left" 
                      style={{ 
                        color: theme === 'dark' ? "white" : "#0a1929",
                        textShadow: theme === 'dark' ? "4px 4px 0px #1269cc" : "4px 4px 0px #51eefc" 
                      }}>
                    THEURGY
                  </h2>
                </div>
              </div>

              {/* Overview */}
              <div className={`p-6 rounded-lg border ${theme === 'dark' ? "bg-[#0f2438] border-[#1269cc]/30" : "bg-white border-gray-200 shadow-lg"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>Ultimate Skills</h3>
                    <p className={`leading-relaxed ${theme === 'dark' ? "text-gray-300" : "text-gray-700"}`}>
                      Theurgy is a powerful mechanic in Persona 3 Reload — each party member has unique ultimate attacks that ignore enemy resistances and deal massive damage or provide superior support effects.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${theme === 'dark' ? "bg-[#1269cc]/10 text-gray-300" : "bg-blue-50 text-gray-600"}`}>
                        <Zap size={14} className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} />
                        Fills via actions in battle
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${theme === 'dark' ? "bg-[#1269cc]/10 text-gray-300" : "bg-blue-50 text-gray-600"}`}>
                        <Sparkles size={14} className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} />
                        Each character has a unique trigger
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${theme === 'dark' ? "bg-[#1269cc]/10 text-gray-300" : "bg-blue-50 text-gray-600"}`}>
                        <Shield size={14} className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} />
                        Most bypass resistances
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${theme === 'dark' ? "bg-[#0a1929] border border-[#1269cc]/20" : "bg-gray-50 border border-gray-100"}`}>
                    <h4 className={`text-xs uppercase font-bold tracking-widest mb-2 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Party Members</h4>
                    <div className="flex items-center gap-2">
                      <Users size={16} className={theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"} />
                      <span className={`text-2xl font-black ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{PARTY_MEMBERS.length}</span>
                      <span className={`text-sm ${theme === 'dark' ? "text-gray-400" : "text-gray-500"}`}>playable characters</span>
                    </div>
                    <p className={`text-xs mt-2 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>
                      Click any card below to expand full details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Party Member Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PARTY_MEMBERS.map((member, idx) => (
                  <PartyMemberCard key={member.name} member={member} theme={theme} index={idx} />
                ))}
              </div>
            </motion.div>
          )}

          {combatTab === "shift" && (
            <motion.div
              key="shift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src={image_14eda866ffb7e5990bcfba528d31bd88361f1865}
                  alt="Shift Concept"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
                <div className="absolute inset-0 flex items-end p-8">
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter transform -skew-x-12 origin-bottom-left" 
                      style={{ 
                        color: theme === 'dark' ? "white" : "#0a1929",
                        textShadow: theme === 'dark' ? "4px 4px 0px #1269cc" : "4px 4px 0px #51eefc" 
                      }}>
                    SHIFT
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                   <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}>Pass the Baton</h3>
                   <p className={`mb-6 text-lg ${theme === 'dark' ? "text-gray-300" : "text-gray-700"}`}>
                     Formerly known as "Baton Pass" in P5, <strong>Shift</strong> allows you to pass your extra turn to another party member after striking an enemy's weakness.
                   </p>
                   
                   <div className="space-y-4">
                     <div className={`p-4 rounded border-l-4 border-green-400 ${theme === 'dark' ? "bg-[#0a1929] shadow-lg" : "bg-white shadow-sm"}`}>
                       <h4 className="font-bold text-green-400 mb-1">Boost Damage</h4>
                       <p className={`text-sm ${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>Each shift increases damage output and healing efficacy for the receiver.</p>
                     </div>
                     <div className={`p-4 rounded border-l-4 border-[#51eefc] ${theme === 'dark' ? "bg-[#0a1929] shadow-lg" : "bg-white shadow-sm"}`}>
                       <h4 className="font-bold text-[#51eefc] mb-1">Tactical Advantage</h4>
                       <p className={`text-sm ${theme === 'dark' ? "text-gray-400" : "text-gray-600"}`}>Shift to a character who has the element needed to hit the <em>next</em> enemy's weakness.</p>
                     </div>
                   </div>
                </div>

                <div className={`relative aspect-square rounded-full mx-auto w-full max-w-[400px] border-4 border-dashed ${theme === 'dark' ? "border-[#1269cc]/30 bg-[#1269cc]/5" : "border-gray-200 bg-gray-50"}`}>
                   {/* Center: Enemies Group */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative w-48 h-32">
                        {/* Enemy 1 (Left) */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-20 h-20 rounded-full border-4 border-red-500 overflow-hidden bg-black z-10 shadow-lg shadow-red-500/40">
                           <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white font-bold">⚔️</div>
                           <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-black text-white bg-red-600 px-2 py-0.5 text-[10px] uppercase tracking-widest transform -rotate-12">Weak</span>
                           </div>
                        </div>
                        {/* Enemy 2 (Right) */}
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-20 h-20 rounded-full border-4 border-red-500 overflow-hidden bg-black z-10 shadow-lg shadow-red-500/40">
                           <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white font-bold opacity-75 grayscale">⚔️</div>
                           <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-black text-white bg-red-600 px-2 py-0.5 text-[10px] uppercase tracking-widest transform rotate-12">Weak</span>
                           </div>
                        </div>
                      </div>
                   </div>

                   {/* Character Bubbles - Orbiting */}
                   {/* Char 1: Top Left */}
                   <div className="absolute top-[15%] left-[15%] w-16 h-16 rounded-full border-2 border-[#51eefc] overflow-hidden bg-gray-800 shadow-lg shadow-blue-500/30 z-20 transition-transform hover:scale-110">
                      <ImageWithFallback src={image_2b4ffce2d7c1faaaca2d9ef1198340d46e6258aa} alt="Character 1" className="w-full h-full object-cover" />
                   </div>
                   
                   {/* Char 2: Top Right */}
                   <div className="absolute top-[15%] right-[15%] w-16 h-16 rounded-full border-2 border-[#51eefc] overflow-hidden bg-gray-800 shadow-lg shadow-blue-500/30 z-20 transition-transform hover:scale-110">
                      <ImageWithFallback src={image_a7d9cc459eb57d733c0b77ca6609a1e8546920d8} alt="Character 2" className="w-full h-full object-cover" />
                   </div>

                   {/* Char 3: Bottom Right */}
                   <div className="absolute bottom-[15%] right-[15%] w-16 h-16 rounded-full border-2 border-[#51eefc] overflow-hidden bg-gray-800 shadow-lg shadow-blue-500/30 z-20 transition-transform hover:scale-110">
                      <ImageWithFallback src={image_9f58ec1c5dd7788c0dbb715bfb864ad7e4a775ae} alt="Character 3" className="w-full h-full object-cover" />
                   </div>

                   {/* Char 4: Bottom Left */}
                   <div className="absolute bottom-[15%] left-[15%] w-16 h-16 rounded-full border-2 border-[#51eefc] overflow-hidden bg-gray-800 shadow-lg shadow-blue-500/30 z-20 transition-transform hover:scale-110">
                      <ImageWithFallback src={image_21759f992f0d7304d758e12635af8d6d001286fa} alt="Character 4" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {combatTab === "allout" && (
            <motion.div
              key="allout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl group bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">🎯</div>
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
                <div className="absolute inset-0 flex items-end p-8">
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter transform -skew-x-12 origin-bottom-left" 
                      style={{ 
                        color: theme === 'dark' ? "white" : "#0a1929",
                        textShadow: theme === 'dark' ? "4px 4px 0px #ff0000" : "4px 4px 0px #ff0000" 
                      }}>
                    ALL-OUT ATTACK
                  </h2>
                </div>
              </div>

              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                <div className={`break-inside-avoid p-6 rounded-lg ${theme === 'dark' ? "bg-[#0f2438]" : "bg-white border border-gray-200"}`}>
                  <h3 className="text-2xl font-bold text-red-500 mb-4">Trigger Condition</h3>
                  <p className={theme === 'dark' ? "text-gray-300" : "text-gray-700"}>
                    An All-Out Attack can be initiated when <strong>ALL</strong> enemies on the field are "Downed". 
                    Enemies are downed by hitting their weakness or landing a Critical Hit.
                  </p>
                </div>

                <div className={`break-inside-avoid p-6 rounded-lg ${theme === 'dark' ? "bg-[#0f2438]" : "bg-white border border-gray-200"}`}>
                  <h3 className="text-2xl font-bold text-red-500 mb-4">Shuffle Time</h3>
                  <p className={theme === 'dark' ? "text-gray-300" : "text-gray-700"}>
                    Finishing a battle with an All-Out Attack guarantees a <strong>Shuffle Time</strong>. 
                    This is the primary way to obtain new Personas, money cards, experience boosts, and skill cards.
                  </p>
                </div>

                <div className={`break-inside-avoid p-6 rounded-lg border-2 border-red-500/50 ${theme === 'dark' ? "bg-red-900/10" : "bg-red-50"}`}>
                  <h3 className="text-xl font-bold text-red-500 mb-2">Strategy Tip</h3>
                  <p className={`text-sm ${theme === 'dark' ? "text-gray-300" : "text-gray-700"}`}>
                    Don't always use it! Sometimes it's better to cancel the All-Out Attack and use your "1 More" to Baton Pass/Shift or heal up if the All-Out Attack won't kill the enemy.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Party Member Card Component
function PartyMemberCard({ member, theme, index }: { member: any, theme: string, index: number }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.4 }}
      className={`rounded-lg overflow-hidden border transition-all ${
        theme === 'dark'
          ? "bg-[#0f2438] border-[#1269cc]/30 hover:border-[#51eefc]/40"
          : "bg-white border-gray-200 hover:border-[#1269cc]/50 shadow-sm"
      }`}
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className={`text-xl font-bold ${member.color}`}>{member.name}</h4>
            <p className={`text-sm ${theme === 'dark' ? "text-gray-400" : "text-gray-500"}`}>{member.role}</p>
          </div>
          <div className={`text-right`}>
            <span className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>{member.arcana}</span>
          </div>
        </div>

        {/* Persona & Weapon */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded border ${theme === 'dark' ? "border-[#1269cc]/30 text-gray-300 bg-[#1269cc]/10" : "border-gray-200 text-gray-600 bg-gray-50"}`}>
            {member.persona} → {member.evolvedPersona}
          </span>
          <span className={`text-xs px-2 py-1 rounded border ${theme === 'dark' ? "border-[#1269cc]/30 text-gray-300 bg-[#1269cc]/10" : "border-gray-200 text-gray-600 bg-gray-50"}`}>
            {member.weaponType}
          </span>
          <span className={`text-xs px-2 py-1 rounded border ${theme === 'dark' ? "border-[#1269cc]/30 text-gray-300 bg-[#1269cc]/10" : "border-gray-200 text-gray-600 bg-gray-50"}`}>
            {member.primaryElement}
          </span>
        </div>

        {/* Theurgy Trigger */}
        <div className={`p-3 rounded border-l-2 mb-3 ${theme === 'dark' ? "bg-[#0a1929]/50 border-[#51eefc]" : "bg-blue-50/50 border-[#1269cc]"}`}>
          <span className={`text-xs uppercase font-bold tracking-wider block mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Theurgy Trigger</span>
          <p className={`text-sm ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>{member.trigger}</p>
        </div>

        {/* Theurgies List */}
        <div className="space-y-2">
          {member.theurgies.map((t: any) => (
            <div key={t.name} className={`flex items-start gap-3 p-2 rounded ${theme === 'dark' ? "bg-[#0a1929]/30" : "bg-gray-50"}`}>
              <Sparkles size={14} className={`mt-0.5 shrink-0 ${member.color}`} />
              <div>
                <span className={`font-bold text-sm ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{t.name}</span>
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${theme === 'dark' ? "bg-[#1269cc]/20 text-gray-400" : "bg-gray-200 text-gray-500"}`}>{t.element}</span>
                <p className={`text-xs mt-0.5 ${theme === 'dark' ? "text-gray-400" : "text-gray-500"}`}>{t.effect}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-center gap-1 mt-3 pt-3 border-t text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors ${
            theme === 'dark' ? "border-[#1269cc]/20 text-gray-500 hover:text-[#51eefc]" : "border-gray-100 text-gray-400 hover:text-[#1269cc]"
          }`}
        >
          {expanded ? "Hide Details" : "Strengths & Tips"}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                <div>
                  <span className={`text-xs uppercase font-bold tracking-wider block mb-1.5 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Strengths</span>
                  <ul className="space-y-1">
                    {member.strengths.map((s: string, i: number) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                        <span className="text-green-500 mt-0.5">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-3 rounded border ${theme === 'dark' ? "bg-[#0a1929] border-[#1269cc]/20" : "bg-gray-50 border-gray-100"}`}>
                  <span className={`text-xs uppercase font-bold tracking-wider block mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Pro Tip</span>
                  <p className={`text-sm ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>{member.tips}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}