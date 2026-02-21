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

const EXTRA_BLOCKS = [
  {
    id: "tziah",
    name: "TZIAH",
    floors: "Floors 119-163",
    atmosphere: "Golden Desert",
    image: "https://images.unsplash.com/photo-1700837586652-2a827b0aa7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBkZXNlcnQlMjB0ZW1wbGUlMjBydWluc3xlbnwxfHx8fDE3NzE2NDY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    image: "https://images.unsplash.com/photo-1769527819266-3eef8d75ffe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29ycmlkb3IlMjBpbmR1c3RyaWFsJTIwcGlwZXN8ZW58MXx8fHwxNzcxNjQ2NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    image: "https://images.unsplash.com/photo-1761232007928-258c9bd98d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjB2b2lkJTIwZGFyayUyMHNwYWNlfGVufDF8fHx8MTc3MTY0NjU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

        {/* Extra Blocks */}
        {EXTRA_BLOCKS.map(block => (
          <div key={block.id} id={block.id} className="scroll-mt-24">
            <Card className="p-0 overflow-hidden border-0 shadow-xl">
              <div className="relative h-64 md:h-80 w-full group">
                 <ImageWithFallback 
                  src={block.image}
                  alt={`${block.name} Block`}
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
                         {block.name}
                       </motion.h3>
                       <p className={`text-xl font-bold tracking-widest uppercase flex items-center gap-3 ${theme === 'dark' ? "text-[#51eefc]" : "text-[#1269cc]"}`}>
                         <span className="w-8 h-1 bg-current block" /> {block.floors}
                       </p>
                     </div>
                     <div className={`px-4 py-2 rounded border backdrop-blur-md ${theme === 'dark' ? "bg-black/30 border-[#51eefc]/30 text-[#51eefc]" : "bg-white/60 border-[#1269cc]/30 text-[#1269cc]"}`}>
                       <span className="text-xs uppercase font-bold block opacity-70">Atmosphere</span>
                       <span className="font-bold text-lg">{block.atmosphere}</span>
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
                        <span className={`text-xl font-medium ${theme === 'dark' ? "text-white" : "text-gray-900"}`}>{block.guardian}</span>
                      </div>
                      <div>
                        <span className={`block text-xs uppercase mb-1 ${theme === 'dark' ? "text-gray-500" : "text-gray-400"}`}>Key Strategy</span>
                        <p className={`text-sm leading-relaxed ${theme === 'dark' ? "text-gray-300" : "text-gray-600"}`}>
                          {block.strategy}
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
                      {block.threats.map(threat => (
                        <li key={threat.name} className="flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                              <Sword size={16} />
                            </div>
                            <span className={`font-bold ${theme === 'dark' ? "text-gray-200" : "text-gray-800"}`}>{threat.name}</span>
                          </div>
                          <span className={`text-xs font-mono ${threat.color} text-white px-2 py-0.5 rounded`}>{threat.weakness}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Personas */}
                 <div className="space-y-6">
                    <h4 className={`font-black uppercase tracking-widest text-sm border-b pb-2 ${theme === 'dark' ? "text-gray-400 border-gray-700" : "text-gray-500 border-gray-200"}`}>
                      Recruitable Personas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                       {block.personas.map(p => (
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
        ))}
      </div>
    </div>
  );
};