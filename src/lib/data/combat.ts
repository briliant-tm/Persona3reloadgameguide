import { Flame, Snowflake, Zap, Wind, Sun, Moon, Swords, Target, Crosshair } from "lucide-react";

export const ELEMENTS = [
  {
    name: "Slash",
    color: "bg-gray-500",
    icon: Swords,
    desc: "Physical attacks using bladed weapons. Uses HP instead of SP.",
    weak: "None"
  },
  {
    name: "Strike",
    color: "bg-amber-600",
    icon: Target,
    desc: "Physical attacks using blunt force. Fists, hammers, and clubs.",
    weak: "None"
  },
  {
    name: "Pierce",
    color: "bg-emerald-700",
    icon: Crosshair,
    desc: "Physical attacks using projectiles. Bows, guns, and spears.",
    weak: "None"
  },
  {
    name: "Fire",
    color: "bg-red-500",
    icon: Flame,
    desc: "Agi skills. Can inflict Burn, dealing damage each turn.",
    weak: "Ice"
  },
  {
    name: "Ice",
    color: "bg-blue-400",
    icon: Snowflake,
    desc: "Bufu skills. Can inflict Freeze, immobilizing enemies.",
    weak: "Fire"
  },
  {
    name: "Elec",
    color: "bg-yellow-400",
    icon: Zap,
    desc: "Zio skills. Can inflict Shock, making enemies vulnerable.",
    weak: "Wind"
  },
  {
    name: "Wind",
    color: "bg-green-500",
    icon: Wind,
    desc: "Garu skills. Can inflict Dizzy, reducing accuracy.",
    weak: "Elec"
  },
  {
    name: "Light",
    color: "bg-yellow-100 text-yellow-600",
    icon: Sun,
    desc: "Hama skills. Chance to instantly kill targets weak to Light.",
    weak: "Dark"
  },
  {
    name: "Dark",
    color: "bg-purple-900",
    icon: Moon,
    desc: "Mudo skills. Chance to instantly kill targets weak to Dark.",
    weak: "Light"
  }
];
