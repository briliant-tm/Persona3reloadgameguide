import React from "react";
import { motion } from "motion/react";
import { Sword } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useTheme } from "../../components/ThemeProvider";

import image_761e4bc41e4797f2b059530040412c971cf21459 from 'figma:asset/761e4bc41e4797f2b059530040412c971cf21459.png';
import image_14eda866ffb7e5990bcfba528d31bd88361f1865 from 'figma:asset/14eda866ffb7e5990bcfba528d31bd88361f1865.png';
import image_2d883cecdcc329911bfbfd3c7d859a7b23353581 from 'figma:asset/2d883cecdcc329911bfbfd3c7d859a7b23353581.png';

export default function FloorsPage() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${theme === 'dark' ? "bg-[#0a1929]" : "bg-gray-50"}`}>
      <SectionTitle title="Tartarus Blocks" subtitle="Explore the dark hour tower." />
      
      <div className="space-y-16">
        {/* Thebel Block */}
        <div id="thebel" className="scroll-mt-24">
          <Card className="p-0 overflow-hidden border-0 shadow-xl">
            <div className="relative h-64 md:h-80 w-full group">
               <ImageWithFallback 
                src={image_761e4bc41e4797f2b059530040412c971cf21459}
                alt="Thebel Block"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
               <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                   <div>
                     <motion.h3 
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       className={`text-6xl md:text-8xl font-black italic tracking-tighter ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}
                       style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                     >
                       THEBEL
                     </motion.h3>
                     <p className={`text-xl font-bold tracking-widest uppercase flex items-center gap-3 ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
                       <span className="w-8 h-1 bg-current block" /> Floors 2-22
                     </p>
                   </div>
                   <div className={`px-4 py-2 rounded border backdrop-blur-md ${theme === 'dark' ? "bg-black/30 border-[#51eefc]/30 text-[#51eefc]" : "bg-white/60 border-[#1269cc]/30 text-[#1269cc]"}`}>
                     <span className="text-xs uppercase font-bold block opacity-70">Atmosphere</span>
                     <span className="font-bold text-lg">Glitchy Green</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className={`p-6 md:p-10 grid md:grid-cols-3 gap-8 md:gap-12 border-t ${theme === 'dark' ? "border-[#1269cc]/20" : "border-gray-100"}`}>
               {/* Overview */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Block Overview
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Guardian</span>
                      <span className={`text-xl font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>Various Shadows</span>
                    </div>
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Key Strategy</span>
                      <p className={`text-sm leading-relaxed ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                        The first block teaches basic elemental weaknesses. Focus on covering standard element types (Fire, Ice, Elec, Wind).
                      </p>
                    </div>
                  </div>
               </div>

               {/* Enemies */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Key Threats
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Cowardly Maya</span>
                      </div>
                      <span className="text-xs font-mono bg-red-500 text-white px-2 py-0.5 rounded">FIRE WEAK</span>
                    </li>
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Magic Hand</span>
                      </div>
                      <span className="text-xs font-mono bg-blue-400 text-white px-2 py-0.5 rounded">ICE WEAK</span>
                    </li>
                  </ul>
               </div>

               {/* Personas */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Recruitable Personas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                     {["Pixie", "Apsaras", "Angel", "Ara Mitama"].map(p => (
                       <span key={p} className={`px-3 py-1.5 rounded text-sm font-bold border transition-colors ${
                         theme === 'dark' 
                           ? "bg-[#1269cc]/10 border-[#1269cc]/30 text-[#51eefc] hover:bg-[#1269cc]/20" 
                           : "bg-blue-50 border-blue-200 text-[#1269cc] hover:bg-blue-100"
                       }`}>
                         {p}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
          </Card>
        </div>

        {/* Arqa Block */}
        <div id="arqa" className="scroll-mt-24">
          <Card className="p-0 overflow-hidden border-0 shadow-xl">
            <div className="relative h-64 md:h-80 w-full group">
               <ImageWithFallback 
                src={image_14eda866ffb7e5990bcfba528d31bd88361f1865}
                alt="Arqa Block"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
               <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                   <div>
                     <motion.h3 
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       className={`text-6xl md:text-8xl font-black italic tracking-tighter ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}
                       style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                     >
                       ARQA
                     </motion.h3>
                     <p className={`text-xl font-bold tracking-widest uppercase flex items-center gap-3 ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
                       <span className="w-8 h-1 bg-current block" /> Floors 23-69
                     </p>
                   </div>
                   <div className={`px-4 py-2 rounded border backdrop-blur-md ${theme === 'dark' ? "bg-black/30 border-[#51eefc]/30 text-[#51eefc]" : "bg-white/60 border-[#1269cc]/30 text-[#1269cc]"}`}>
                     <span className="text-xs uppercase font-bold block opacity-70">Atmosphere</span>
                     <span className="font-bold text-lg">Gothic Purple</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className={`p-6 md:p-10 grid md:grid-cols-3 gap-8 md:gap-12 border-t ${theme === 'dark' ? "border-[#1269cc]/20" : "border-gray-100"}`}>
               {/* Overview */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Block Overview
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Guardian</span>
                      <span className={`text-xl font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>Empress & Emperor</span>
                    </div>
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Key Strategy</span>
                      <p className={`text-sm leading-relaxed ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                        Enemies begin to use status ailments. Bring Amrita Sodas or a Persona with Patra.
                      </p>
                    </div>
                  </div>
               </div>

               {/* Enemies */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Key Threats
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Venus Eagle</span>
                      </div>
                      <span className="text-xs font-mono bg-yellow-500 text-white px-2 py-0.5 rounded">ELEC WEAK</span>
                    </li>
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Dancing Hand</span>
                      </div>
                      <span className="text-xs font-mono bg-gray-500 text-white px-2 py-0.5 rounded">STRIKE WEAK</span>
                    </li>
                  </ul>
               </div>

               {/* Personas */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Recruitable Personas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                     {["Jack Frost", "Archangel", "Valkyrie", "Oberon"].map(p => (
                       <span key={p} className={`px-3 py-1.5 rounded text-sm font-bold border transition-colors ${
                         theme === 'dark' 
                           ? "bg-[#1269cc]/10 border-[#1269cc]/30 text-[#51eefc] hover:bg-[#1269cc]/20" 
                           : "bg-blue-50 border-blue-200 text-[#1269cc] hover:bg-blue-100"
                       }`}>
                         {p}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
          </Card>
        </div>

        {/* Yabbashah Block */}
        <div id="yabbashah" className="scroll-mt-24">
          <Card className="p-0 overflow-hidden border-0 shadow-xl">
            <div className="relative h-64 md:h-80 w-full group">
               <ImageWithFallback 
                src={image_2d883cecdcc329911bfbfd3c7d859a7b23353581}
                alt="Yabbashah Block"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? "from-[#0a1929] via-[#0a1929]/60" : "from-white via-white/60"} to-transparent`} />
               <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                   <div>
                     <motion.h3 
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       className={`text-6xl md:text-8xl font-black italic tracking-tighter ${theme === 'dark' ? "text-white" : "text-[#0a1929]"}`}
                       style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
                     >
                       YABBASHAH
                     </motion.h3>
                     <p className={`text-xl font-bold tracking-widest uppercase flex items-center gap-3 ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
                       <span className="w-8 h-1 bg-current block" /> Floors 70-118
                     </p>
                   </div>
                   <div className={`px-4 py-2 rounded border backdrop-blur-md ${theme === 'dark' ? "bg-black/30 border-[#51eefc]/30 text-[#51eefc]" : "bg-white/60 border-[#1269cc]/30 text-[#1269cc]"}`}>
                     <span className="text-xs uppercase font-bold block opacity-70">Atmosphere</span>
                     <span className="font-bold text-lg">Mechanical Red</span>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className={`p-6 md:p-10 grid md:grid-cols-3 gap-8 md:gap-12 border-t ${theme === 'dark' ? "border-[#1269cc]/20" : "border-gray-100"}`}>
               {/* Overview */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Block Overview
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Guardian</span>
                      <span className={`text-xl font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>Hierophant</span>
                    </div>
                    <div>
                      <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Key Strategy</span>
                      <p className={`text-sm leading-relaxed ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                        Physical attacks become less effective against some enemies. Ensure you have high-magic Personas.
                      </p>
                    </div>
                  </div>
               </div>

               {/* Enemies */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Key Threats
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Avenger Knight</span>
                      </div>
                      <span className="text-xs font-mono bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">LIGHT WEAK</span>
                    </li>
                    <li className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                          <Sword size={16} />
                        </div>
                        <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>Hakurou Musha</span>
                      </div>
                      <span className="text-xs font-mono bg-purple-600 text-white px-2 py-0.5 rounded">DARK WEAK</span>
                    </li>
                  </ul>
               </div>

               {/* Personas */}
               <div className="space-y-6">
                  <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                    Recruitable Personas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                     {["Principality", "Titan", "Oberon", "Power"].map(p => (
                       <span key={p} className={`px-3 py-1.5 rounded text-sm font-bold border transition-colors ${
                         theme === 'dark' 
                           ? "bg-[#1269cc]/10 border-[#1269cc]/30 text-[#51eefc] hover:bg-[#1269cc]/20" 
                           : "bg-blue-50 border-blue-200 text-[#1269cc] hover:bg-blue-100"
                       }`}>
                         {p}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
