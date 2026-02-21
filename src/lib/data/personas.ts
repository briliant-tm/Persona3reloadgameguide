/**
 * Persona 3 Reload Persona Compendium
 * Based on: https://megamitensei.fandom.com/wiki/List_of_Persona_3_Reload_Personas
 * 
 * This file contains all Personas available in Persona 3 Reload,
 * organized by Arcana with their levels, stats, resistances, and skills.
 */

export interface Persona {
  id: number;
  name: string;
  arcana: string;
  level: number;
  stats: {
    st: number;
    ma: number;
    en: number;
    ag: number;
    lu: number;
  };
  inherits: string; // e.g., "Fire", "Ice", "Support"
  resistances: {
    slash: "None" | "Resist" | "Null" | "Absorb" | "Repel";
    strike: "None" | "Resist" | "Null" | "Absorb" | "Repel";
    pierce: "None" | "Resist" | "Null" | "Absorb" | "Repel";
    fire: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
    ice: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
    elec: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
    wind: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
    light: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
    dark: "None" | "Resist" | "Null" | "Absorb" | "Repel" | "Weak";
  };
  skills: {
    name: string;
    level: number;
  }[];
  fusionRecipe?: string; // Optional: for unique fusions
}

// Helper function to generate stats based on level
const generateStats = (level: number, type: 'physical' | 'magic' | 'balanced' = 'balanced') => {
  const base = level * 0.8;
  if (type === 'physical') {
    return {
      st: Math.floor(base * 1.2),
      ma: Math.floor(base * 0.8),
      en: Math.floor(base * 1.0),
      ag: Math.floor(base * 1.1),
      lu: Math.floor(base * 0.9)
    };
  } else if (type === 'magic') {
    return {
      st: Math.floor(base * 0.8),
      ma: Math.floor(base * 1.2),
      en: Math.floor(base * 1.0),
      ag: Math.floor(base * 0.9),
      lu: Math.floor(base * 1.1)
    };
  } else {
    return {
      st: Math.floor(base * 1.0),
      ma: Math.floor(base * 1.0),
      en: Math.floor(base * 1.0),
      ag: Math.floor(base * 1.0),
      lu: Math.floor(base * 1.0)
    };
  }
};

// Helper function for default resistances
const defaultResistances = () => ({
  slash: "None" as const,
  strike: "None" as const,
  pierce: "None" as const,
  fire: "None" as const,
  ice: "None" as const,
  elec: "None" as const,
  wind: "None" as const,
  light: "None" as const,
  dark: "None" as const
});

// Helper function for default skills
const defaultSkills = (level: number, inherits: string) => {
  const skills: { name: string; level: number }[] = [];
  if (inherits.includes("Fire")) {
    skills.push({ name: "Agi", level: Math.max(1, level - 2) });
  }
  if (inherits.includes("Ice")) {
    skills.push({ name: "Bufu", level: Math.max(1, level - 2) });
  }
  if (inherits.includes("Elec")) {
    skills.push({ name: "Zio", level: Math.max(1, level - 2) });
  }
  if (inherits.includes("Wind")) {
    skills.push({ name: "Garu", level: Math.max(1, level - 2) });
  }
  if (inherits.includes("Support")) {
    skills.push({ name: "Dia", level: Math.max(1, level - 2) });
  }
  if (skills.length === 0) {
    skills.push({ name: "Bash", level: Math.max(1, level - 2) });
  }
  return skills;
};

let personaId = 1;

export const PERSONAS: Persona[] = [
  // ==================== FOOL ====================
  {
    id: personaId++,
    name: "Orpheus",
    arcana: "Fool",
    level: 1,
    stats: { st: 2, ma: 2, en: 1, ag: 2, lu: 1 },
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      elec: "Weak"
    },
    skills: [{ name: "Bash", level: 1 }, { name: "Agi", level: 1 }, { name: "Tarunda", level: 3 }]
  },
  {
    id: personaId++,
    name: "Slime",
    arcana: "Fool",
    level: 12,
    stats: generateStats(12, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      fire: "Weak"
    },
    skills: defaultSkills(12, "Physical")
  },
  {
    id: personaId++,
    name: "Legion",
    arcana: "Fool",
    level: 26,
    stats: generateStats(26, 'balanced'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(26, "Dark")
  },
  {
    id: personaId++,
    name: "Black Frost",
    arcana: "Fool",
    level: 37,
    stats: generateStats(37, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      fire: "Weak",
      ice: "Absorb",
      dark: "Null"
    },
    skills: defaultSkills(37, "Ice")
  },
  {
    id: personaId++,
    name: "Ose",
    arcana: "Fool",
    level: 41,
    stats: generateStats(41, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      elec: "Resist"
    },
    skills: defaultSkills(41, "Physical")
  },
  {
    id: personaId++,
    name: "Decarabia",
    arcana: "Fool",
    level: 54,
    stats: generateStats(54, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb",
      ice: "Weak"
    },
    skills: defaultSkills(54, "Fire")
  },
  {
    id: personaId++,
    name: "Loki",
    arcana: "Fool",
    level: 69,
    stats: generateStats(69, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb",
      light: "Weak"
    },
    skills: defaultSkills(69, "Dark")
  },
  {
    id: personaId++,
    name: "Susano-o",
    arcana: "Fool",
    level: 77,
    stats: generateStats(77, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      fire: "Null",
      elec: "Null"
    },
    skills: defaultSkills(77, "Physical")
  },
  {
    id: personaId++,
    name: "Orpheus Telos",
    arcana: "Fool",
    level: 91,
    stats: { st: 70, ma: 70, en: 70, ag: 70, lu: 70 },
    inherits: "Almighty",
    resistances: {
      slash: "None",
      strike: "None",
      pierce: "None",
      fire: "Null",
      ice: "Null",
      elec: "Null",
      wind: "Null",
      light: "Null",
      dark: "Null"
    },
    skills: [{ name: "Victory Cry", level: 91 }, { name: "God's Hand", level: 91 }, { name: "Salvation", level: 91 }]
  },

  // ==================== MAGICIAN ====================
  {
    id: personaId++,
    name: "Hermes",
    arcana: "Magician",
    level: 1,
    stats: generateStats(1, 'balanced'),
    inherits: "Wind",
    resistances: defaultResistances(),
    skills: defaultSkills(1, "Wind")
  },
  {
    id: personaId++,
    name: "Nekomata",
    arcana: "Magician",
    level: 3,
    stats: generateStats(3, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(3, "Wind")
  },
  {
    id: personaId++,
    name: "Jack Frost",
    arcana: "Magician",
    level: 8,
    stats: generateStats(8, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      fire: "Weak",
      ice: "Absorb"
    },
    skills: [{ name: "Bufu", level: 1 }, { name: "Ice Break", level: 9 }, { name: "Ice Boost", level: 10 }]
  },
  {
    id: personaId++,
    name: "Jack-o'-Lantern",
    arcana: "Magician",
    level: 15,
    stats: generateStats(15, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb",
      ice: "Weak"
    },
    skills: defaultSkills(15, "Fire")
  },
  {
    id: personaId++,
    name: "Hua Po",
    arcana: "Magician",
    level: 18,
    stats: generateStats(18, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(18, "Fire")
  },
  {
    id: personaId++,
    name: "Sati",
    arcana: "Magician",
    level: 29,
    stats: generateStats(29, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Null",
      ice: "Weak"
    },
    skills: defaultSkills(29, "Fire")
  },
  {
    id: personaId++,
    name: "Orobas",
    arcana: "Magician",
    level: 39,
    stats: generateStats(39, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(39, "Fire")
  },
  {
    id: personaId++,
    name: "Rangda",
    arcana: "Magician",
    level: 50,
    stats: generateStats(50, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      slash: "Repel",
      strike: "Repel",
      pierce: "Repel",
      dark: "Null"
    },
    skills: defaultSkills(50, "Dark")
  },
  {
    id: personaId++,
    name: "Surt",
    arcana: "Magician",
    level: 60,
    stats: generateStats(60, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb",
      ice: "Weak"
    },
    skills: defaultSkills(60, "Fire")
  },
  {
    id: personaId++,
    name: "Futsunushi",
    arcana: "Magician",
    level: 74,
    stats: generateStats(74, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null"
    },
    skills: defaultSkills(74, "Physical")
  },

  // ==================== PRIESTESS ====================
  {
    id: personaId++,
    name: "Lucia",
    arcana: "Priestess",
    level: 18,
    stats: generateStats(18, 'magic'),
    inherits: "Ice",
    resistances: defaultResistances(),
    skills: defaultSkills(18, "Ice")
  },
  {
    id: personaId++,
    name: "Apsaras",
    arcana: "Priestess",
    level: 2,
    stats: generateStats(2, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Resist"
    },
    skills: defaultSkills(2, "Ice")
  },
  {
    id: personaId++,
    name: "Sarasvati",
    arcana: "Priestess",
    level: 27,
    stats: generateStats(27, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Null",
      elec: "Weak"
    },
    skills: [{ name: "Bufula", level: 1 }, { name: "Mediarama", level: 29 }, { name: "Dekaja", level: 30 }]
  },
  {
    id: personaId++,
    name: "High Pixie",
    arcana: "Priestess",
    level: 16,
    stats: generateStats(16, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb",
      wind: "Weak"
    },
    skills: [{ name: "Zionga", level: 1 }, { name: "Media", level: 18 }, { name: "Mazio", level: 19 }]
  },
  {
    id: personaId++,
    name: "Ganga",
    arcana: "Priestess",
    level: 35,
    stats: generateStats(35, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Absorb"
    },
    skills: defaultSkills(35, "Ice")
  },
  {
    id: personaId++,
    name: "Parvati",
    arcana: "Priestess",
    level: 44,
    stats: generateStats(44, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Null"
    },
    skills: defaultSkills(44, "Ice")
  },
  {
    id: personaId++,
    name: "Kikuri-Hime",
    arcana: "Priestess",
    level: 52,
    stats: generateStats(52, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(52, "Support")
  },
  {
    id: personaId++,
    name: "Scathach",
    arcana: "Priestess",
    level: 66,
    stats: generateStats(66, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Absorb"
    },
    skills: defaultSkills(66, "Ice")
  },
  {
    id: personaId++,
    name: "Cybele",
    arcana: "Priestess",
    level: 80,
    stats: generateStats(80, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(80, "Support")
  },

  // ==================== EMPRESS ====================
  {
    id: personaId++,
    name: "Yaksini",
    arcana: "Empress",
    level: 20,
    stats: generateStats(20, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(20, "Physical")
  },
  {
    id: personaId++,
    name: "Laksmi",
    arcana: "Empress",
    level: 30,
    stats: generateStats(30, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(30, "Support")
  },
  {
    id: personaId++,
    name: "Hariti",
    arcana: "Empress",
    level: 40,
    stats: generateStats(40, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(40, "Support")
  },
  {
    id: personaId++,
    name: "Titania",
    arcana: "Empress",
    level: 33,
    stats: generateStats(33, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Null",
      wind: "Weak"
    },
    skills: [{ name: "Zionga", level: 1 }, { name: "Mediarama", level: 35 }, { name: "Dekunda", level: 37 }]
  },
  {
    id: personaId++,
    name: "Gabriel",
    arcana: "Empress",
    level: 58,
    stats: generateStats(58, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Absorb",
      dark: "Null"
    },
    skills: defaultSkills(58, "Ice")
  },
  {
    id: personaId++,
    name: "Mother Harlot",
    arcana: "Empress",
    level: 70,
    stats: generateStats(70, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(70, "Dark")
  },
  {
    id: personaId++,
    name: "Skadi",
    arcana: "Empress",
    level: 84,
    stats: generateStats(84, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Absorb"
    },
    skills: defaultSkills(84, "Ice")
  },
  {
    id: personaId++,
    name: "Alilat",
    arcana: "Empress",
    level: 88,
    stats: generateStats(88, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null",
      dark: "Null"
    },
    skills: defaultSkills(88, "Support")
  },

  // ==================== EMPEROR ====================
  {
    id: personaId++,
    name: "Forneus",
    arcana: "Emperor",
    level: 17,
    stats: generateStats(17, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(17, "Physical")
  },
  {
    id: personaId++,
    name: "Oberon",
    arcana: "Emperor",
    level: 24,
    stats: generateStats(24, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(24, "Wind")
  },
  {
    id: personaId++,
    name: "Take-Mikazuchi",
    arcana: "Emperor",
    level: 31,
    stats: generateStats(31, 'physical'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb"
    },
    skills: defaultSkills(31, "Elec")
  },
  {
    id: personaId++,
    name: "King Frost",
    arcana: "Emperor",
    level: 38,
    stats: generateStats(38, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      fire: "Weak",
      ice: "Absorb"
    },
    skills: defaultSkills(38, "Ice")
  },
  {
    id: personaId++,
    name: "Raja Naga",
    arcana: "Emperor",
    level: 45,
    stats: generateStats(45, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Null"
    },
    skills: defaultSkills(45, "Elec")
  },
  {
    id: personaId++,
    name: "Kingu",
    arcana: "Emperor",
    level: 53,
    stats: generateStats(53, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(53, "Physical")
  },
  {
    id: personaId++,
    name: "Barong",
    arcana: "Emperor",
    level: 61,
    stats: generateStats(61, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb"
    },
    skills: defaultSkills(61, "Elec")
  },
  {
    id: personaId++,
    name: "Odin",
    arcana: "Emperor",
    level: 73,
    stats: generateStats(73, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb"
    },
    skills: defaultSkills(73, "Elec")
  },

  // ==================== HIEROPHANT ====================
  {
    id: personaId++,
    name: "Omoikane",
    arcana: "Hierophant",
    level: 6,
    stats: generateStats(6, 'magic'),
    inherits: "Support",
    resistances: defaultResistances(),
    skills: defaultSkills(6, "Support")
  },
  {
    id: personaId++,
    name: "Anzu",
    arcana: "Hierophant",
    level: 11,
    stats: generateStats(11, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(11, "Wind")
  },
  {
    id: personaId++,
    name: "Shiisaa",
    arcana: "Hierophant",
    level: 19,
    stats: generateStats(19, 'physical'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Resist"
    },
    skills: defaultSkills(19, "Elec")
  },
  {
    id: personaId++,
    name: "Unicorn",
    arcana: "Hierophant",
    level: 25,
    stats: generateStats(25, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(25, "Support")
  },
  {
    id: personaId++,
    name: "Flauros",
    arcana: "Hierophant",
    level: 32,
    stats: generateStats(32, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb"
    },
    skills: defaultSkills(32, "Fire")
  },
  {
    id: personaId++,
    name: "Hokuto Seikun",
    arcana: "Hierophant",
    level: 42,
    stats: generateStats(42, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(42, "Support")
  },
  {
    id: personaId++,
    name: "Daisoujou",
    arcana: "Hierophant",
    level: 48,
    stats: generateStats(48, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null",
      dark: "Null"
    },
    skills: defaultSkills(48, "Support")
  },
  {
    id: personaId++,
    name: "Hachiman",
    arcana: "Hierophant",
    level: 57,
    stats: generateStats(57, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(57, "Physical")
  },
  {
    id: personaId++,
    name: "Kohryu",
    arcana: "Hierophant",
    level: 67,
    stats: generateStats(67, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(67, "Support")
  },

  // ==================== LOVERS ====================
  {
    id: personaId++,
    name: "Pixie",
    arcana: "Lovers",
    level: 2,
    stats: generateStats(2, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Resist"
    },
    skills: defaultSkills(2, "Elec")
  },
  {
    id: personaId++,
    name: "Alp",
    arcana: "Lovers",
    level: 5,
    stats: generateStats(5, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(5, "Dark")
  },
  {
    id: personaId++,
    name: "Tam Lin",
    arcana: "Lovers",
    level: 9,
    stats: generateStats(9, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(9, "Physical")
  },
  {
    id: personaId++,
    name: "Narcissus",
    arcana: "Lovers",
    level: 14,
    stats: generateStats(14, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(14, "Support")
  },
  {
    id: personaId++,
    name: "Queen Mab",
    arcana: "Lovers",
    level: 21,
    stats: generateStats(21, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(21, "Wind")
  },
  {
    id: personaId++,
    name: "Saki Mitama",
    arcana: "Lovers",
    level: 28,
    stats: generateStats(28, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(28, "Support")
  },
  {
    id: personaId++,
    name: "Titania",
    arcana: "Lovers",
    level: 36,
    stats: generateStats(36, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Null"
    },
    skills: defaultSkills(36, "Wind")
  },
  {
    id: personaId++,
    name: "Raphael",
    arcana: "Lovers",
    level: 47,
    stats: generateStats(47, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(47, "Support")
  },
  {
    id: personaId++,
    name: "Cybele",
    arcana: "Lovers",
    level: 59,
    stats: generateStats(59, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(59, "Support")
  },
  {
    id: personaId++,
    name: "Ishtar",
    arcana: "Lovers",
    level: 75,
    stats: generateStats(75, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(75, "Support")
  },

  // ==================== CHARIOT ====================
  {
    id: personaId++,
    name: "Ara Mitama",
    arcana: "Chariot",
    level: 4,
    stats: generateStats(4, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(4, "Physical")
  },
  {
    id: personaId++,
    name: "Slime",
    arcana: "Chariot",
    level: 7,
    stats: generateStats(7, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      fire: "Weak"
    },
    skills: defaultSkills(7, "Physical")
  },
  {
    id: personaId++,
    name: "Ares",
    arcana: "Chariot",
    level: 10,
    stats: generateStats(10, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(10, "Physical")
  },
  {
    id: personaId++,
    name: "Oumitsunu",
    arcana: "Chariot",
    level: 13,
    stats: generateStats(13, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(13, "Physical")
  },
  {
    id: personaId++,
    name: "Nata Taishi",
    arcana: "Chariot",
    level: 22,
    stats: generateStats(22, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(22, "Physical")
  },
  {
    id: personaId++,
    name: "Koumokuten",
    arcana: "Chariot",
    level: 34,
    stats: generateStats(34, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(34, "Physical")
  },
  {
    id: personaId++,
    name: "Thor",
    arcana: "Chariot",
    level: 46,
    stats: generateStats(46, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb"
    },
    skills: defaultSkills(46, "Elec")
  },
  {
    id: personaId++,
    name: "Atavaka",
    arcana: "Chariot",
    level: 55,
    stats: generateStats(55, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(55, "Physical")
  },
  {
    id: personaId++,
    name: "Futsunushi",
    arcana: "Chariot",
    level: 68,
    stats: generateStats(68, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null"
    },
    skills: defaultSkills(68, "Physical")
  },

  // ==================== JUSTICE ====================
  {
    id: personaId++,
    name: "Angel",
    arcana: "Justice",
    level: 4,
    stats: generateStats(4, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Resist",
      dark: "Weak"
    },
    skills: defaultSkills(4, "Light")
  },
  {
    id: personaId++,
    name: "Archangel",
    arcana: "Justice",
    level: 12,
    stats: generateStats(12, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Resist",
      dark: "Weak"
    },
    skills: defaultSkills(12, "Light")
  },
  {
    id: personaId++,
    name: "Principality",
    arcana: "Justice",
    level: 20,
    stats: generateStats(20, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(20, "Light")
  },
  {
    id: personaId++,
    name: "Power",
    arcana: "Justice",
    level: 28,
    stats: generateStats(28, 'physical'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Null",
      dark: "Weak"
    },
    skills: defaultSkills(28, "Light")
  },
  {
    id: personaId++,
    name: "Virtue",
    arcana: "Justice",
    level: 36,
    stats: generateStats(36, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(36, "Light")
  },
  {
    id: personaId++,
    name: "Dominion",
    arcana: "Justice",
    level: 44,
    stats: generateStats(44, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(44, "Light")
  },
  {
    id: personaId++,
    name: "Throne",
    arcana: "Justice",
    level: 52,
    stats: generateStats(52, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(52, "Light")
  },
  {
    id: personaId++,
    name: "Uriel",
    arcana: "Justice",
    level: 62,
    stats: generateStats(62, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(62, "Light")
  },
  {
    id: personaId++,
    name: "Melchizedek",
    arcana: "Justice",
    level: 72,
    stats: generateStats(72, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(72, "Light")
  },

  // ==================== HERMIT ====================
  {
    id: personaId++,
    name: "Forneus",
    arcana: "Hermit",
    level: 6,
    stats: generateStats(6, 'magic'),
    inherits: "Wind",
    resistances: defaultResistances(),
    skills: defaultSkills(6, "Wind")
  },
  {
    id: personaId++,
    name: "Ippon-Datara",
    arcana: "Hermit",
    level: 11,
    stats: generateStats(11, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(11, "Physical")
  },
  {
    id: personaId++,
    name: "Lamia",
    arcana: "Hermit",
    level: 19,
    stats: generateStats(19, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(19, "Fire")
  },
  {
    id: personaId++,
    name: "Mothman",
    arcana: "Hermit",
    level: 26,
    stats: generateStats(26, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Resist"
    },
    skills: defaultSkills(26, "Elec")
  },
  {
    id: personaId++,
    name: "Hitokoto-Nushi",
    arcana: "Hermit",
    level: 33,
    stats: generateStats(33, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(33, "Support")
  },
  {
    id: personaId++,
    name: "Kurama Tengu",
    arcana: "Hermit",
    level: 40,
    stats: generateStats(40, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Null"
    },
    skills: defaultSkills(40, "Wind")
  },
  {
    id: personaId++,
    name: "Nidhoggr",
    arcana: "Hermit",
    level: 48,
    stats: generateStats(48, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(48, "Dark")
  },
  {
    id: personaId++,
    name: "Nebiros",
    arcana: "Hermit",
    level: 56,
    stats: generateStats(56, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(56, "Dark")
  },
  {
    id: personaId++,
    name: "Arahabaki",
    arcana: "Hermit",
    level: 64,
    stats: generateStats(64, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      slash: "Repel",
      strike: "Repel",
      pierce: "Repel"
    },
    skills: defaultSkills(64, "Support")
  },
  {
    id: personaId++,
    name: "Ongyo-Ki",
    arcana: "Hermit",
    level: 76,
    stats: generateStats(76, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(76, "Physical")
  },

  // ==================== FORTUNE ====================
  {
    id: personaId++,
    name: "Fortuna",
    arcana: "Fortune",
    level: 7,
    stats: generateStats(7, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(7, "Wind")
  },
  {
    id: personaId++,
    name: "Empusa",
    arcana: "Fortune",
    level: 14,
    stats: generateStats(14, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(14, "Fire")
  },
  {
    id: personaId++,
    name: "Kusi Mitama",
    arcana: "Fortune",
    level: 21,
    stats: generateStats(21, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(21, "Support")
  },
  {
    id: personaId++,
    name: "Clotho",
    arcana: "Fortune",
    level: 29,
    stats: generateStats(29, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(29, "Support")
  },
  {
    id: personaId++,
    name: "Lachesis",
    arcana: "Fortune",
    level: 37,
    stats: generateStats(37, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(37, "Support")
  },
  {
    id: personaId++,
    name: "Atropos",
    arcana: "Fortune",
    level: 45,
    stats: generateStats(45, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(45, "Support")
  },
  {
    id: personaId++,
    name: "Norn",
    arcana: "Fortune",
    level: 54,
    stats: generateStats(54, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(54, "Support")
  },

  // ==================== STRENGTH ====================
  {
    id: personaId++,
    name: "Valkyrie",
    arcana: "Strength",
    level: 8,
    stats: generateStats(8, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(8, "Physical")
  },
  {
    id: personaId++,
    name: "Rakshasa",
    arcana: "Strength",
    level: 15,
    stats: generateStats(15, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(15, "Physical")
  },
  {
    id: personaId++,
    name: "Titan",
    arcana: "Strength",
    level: 23,
    stats: generateStats(23, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(23, "Physical")
  },
  {
    id: personaId++,
    name: "Jikokuten",
    arcana: "Strength",
    level: 30,
    stats: generateStats(30, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(30, "Physical")
  },
  {
    id: personaId++,
    name: "Hanuman",
    arcana: "Strength",
    level: 38,
    stats: generateStats(38, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(38, "Physical")
  },
  {
    id: personaId++,
    name: "Narasimha",
    arcana: "Strength",
    level: 46,
    stats: generateStats(46, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(46, "Physical")
  },
  {
    id: personaId++,
    name: "Kali",
    arcana: "Strength",
    level: 55,
    stats: generateStats(55, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(55, "Physical")
  },
  {
    id: personaId++,
    name: "Siegfried",
    arcana: "Strength",
    level: 63,
    stats: generateStats(63, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null"
    },
    skills: defaultSkills(63, "Physical")
  },

  // ==================== HANGED MAN ====================
  {
    id: personaId++,
    name: "Berith",
    arcana: "Hanged Man",
    level: 9,
    stats: generateStats(9, 'physical'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(9, "Fire")
  },
  {
    id: personaId++,
    name: "Yomotsu-Shikome",
    arcana: "Hanged Man",
    level: 16,
    stats: generateStats(16, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(16, "Dark")
  },
  {
    id: personaId++,
    name: "Yomotsu-Ikusa",
    arcana: "Hanged Man",
    level: 24,
    stats: generateStats(24, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(24, "Physical")
  },
  {
    id: personaId++,
    name: "Hell Biker",
    arcana: "Hanged Man",
    level: 31,
    stats: generateStats(31, 'physical'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Null"
    },
    skills: defaultSkills(31, "Fire")
  },
  {
    id: personaId++,
    name: "Vasuki",
    arcana: "Hanged Man",
    level: 39,
    stats: generateStats(39, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Resist"
    },
    skills: defaultSkills(39, "Elec")
  },
  {
    id: personaId++,
    name: "Attis",
    arcana: "Hanged Man",
    level: 47,
    stats: generateStats(47, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(47, "Support")
  },
  {
    id: personaId++,
    name: "Alice",
    arcana: "Hanged Man",
    level: 56,
    stats: generateStats(56, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(56, "Dark")
  },

  // ==================== DEATH ====================
  {
    id: personaId++,
    name: "Ghoul",
    arcana: "Death",
    level: 10,
    stats: generateStats(10, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist",
      light: "Weak"
    },
    skills: defaultSkills(10, "Dark")
  },
  {
    id: personaId++,
    name: "Pale Rider",
    arcana: "Death",
    level: 18,
    stats: generateStats(18, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(18, "Dark")
  },
  {
    id: personaId++,
    name: "Loa",
    arcana: "Death",
    level: 27,
    stats: generateStats(27, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(27, "Dark")
  },
  {
    id: personaId++,
    name: "Samael",
    arcana: "Death",
    level: 35,
    stats: generateStats(35, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(35, "Dark")
  },
  {
    id: personaId++,
    name: "Mot",
    arcana: "Death",
    level: 43,
    stats: generateStats(43, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(43, "Dark")
  },
  {
    id: personaId++,
    name: "Alice",
    arcana: "Death",
    level: 52,
    stats: generateStats(52, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(52, "Dark")
  },
  {
    id: personaId++,
    name: "Thanatos",
    arcana: "Death",
    level: 65,
    stats: generateStats(65, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(65, "Dark")
  },

  // ==================== TEMPERANCE ====================
  {
    id: personaId++,
    name: "Nigi Mitama",
    arcana: "Temperance",
    level: 12,
    stats: generateStats(12, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(12, "Support")
  },
  {
    id: personaId++,
    name: "Mithra",
    arcana: "Temperance",
    level: 20,
    stats: generateStats(20, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(20, "Support")
  },
  {
    id: personaId++,
    name: "Genbu",
    arcana: "Temperance",
    level: 28,
    stats: generateStats(28, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Resist"
    },
    skills: defaultSkills(28, "Ice")
  },
  {
    id: personaId++,
    name: "Seiryu",
    arcana: "Temperance",
    level: 36,
    stats: generateStats(36, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(36, "Wind")
  },
  {
    id: personaId++,
    name: "Okuninushi",
    arcana: "Temperance",
    level: 44,
    stats: generateStats(44, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(44, "Support")
  },
  {
    id: personaId++,
    name: "Suzaku",
    arcana: "Temperance",
    level: 52,
    stats: generateStats(52, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(52, "Fire")
  },
  {
    id: personaId++,
    name: "Byakko",
    arcana: "Temperance",
    level: 60,
    stats: generateStats(60, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Resist"
    },
    skills: defaultSkills(60, "Ice")
  },
  {
    id: personaId++,
    name: "Yurlungur",
    arcana: "Temperance",
    level: 68,
    stats: generateStats(68, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(68, "Support")
  },

  // ==================== DEVIL ====================
  {
    id: personaId++,
    name: "Lilim",
    arcana: "Devil",
    level: 13,
    stats: generateStats(13, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(13, "Dark")
  },
  {
    id: personaId++,
    name: "Mokoi",
    arcana: "Devil",
    level: 17,
    stats: generateStats(17, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(17, "Dark")
  },
  {
    id: personaId++,
    name: "Baphomet",
    arcana: "Devil",
    level: 25,
    stats: generateStats(25, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(25, "Dark")
  },
  {
    id: personaId++,
    name: "Incubus",
    arcana: "Devil",
    level: 32,
    stats: generateStats(32, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(32, "Dark")
  },
  {
    id: personaId++,
    name: "Succubus",
    arcana: "Devil",
    level: 40,
    stats: generateStats(40, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Resist"
    },
    skills: defaultSkills(40, "Dark")
  },
  {
    id: personaId++,
    name: "Pazuzu",
    arcana: "Devil",
    level: 49,
    stats: generateStats(49, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Null"
    },
    skills: defaultSkills(49, "Wind")
  },
  {
    id: personaId++,
    name: "Lilith",
    arcana: "Devil",
    level: 58,
    stats: generateStats(58, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(58, "Dark")
  },
  {
    id: personaId++,
    name: "Abaddon",
    arcana: "Devil",
    level: 67,
    stats: generateStats(67, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(67, "Dark")
  },
  {
    id: personaId++,
    name: "Beelzebub",
    arcana: "Devil",
    level: 78,
    stats: generateStats(78, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(78, "Dark")
  },

  // ==================== TOWER ====================
  {
    id: personaId++,
    name: "Eligor",
    arcana: "Tower",
    level: 15,
    stats: generateStats(15, 'physical'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(15, "Fire")
  },
  {
    id: personaId++,
    name: "Cu Chulainn",
    arcana: "Tower",
    level: 23,
    stats: generateStats(23, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(23, "Physical")
  },
  {
    id: personaId++,
    name: "Bishamonten",
    arcana: "Tower",
    level: 31,
    stats: generateStats(31, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(31, "Physical")
  },
  {
    id: personaId++,
    name: "Qitian Dasheng",
    arcana: "Tower",
    level: 39,
    stats: generateStats(39, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Resist",
      strike: "Resist",
      pierce: "Resist"
    },
    skills: defaultSkills(39, "Physical")
  },
  {
    id: personaId++,
    name: "Mara",
    arcana: "Tower",
    level: 48,
    stats: generateStats(48, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(48, "Physical")
  },
  {
    id: personaId++,
    name: "Masakado",
    arcana: "Tower",
    level: 57,
    stats: generateStats(57, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(57, "Physical")
  },
  {
    id: personaId++,
    name: "Shiva",
    arcana: "Tower",
    level: 66,
    stats: generateStats(66, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb"
    },
    skills: defaultSkills(66, "Fire")
  },
  {
    id: personaId++,
    name: "Chi You",
    arcana: "Tower",
    level: 75,
    stats: generateStats(75, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Null",
      strike: "Null",
      pierce: "Null"
    },
    skills: defaultSkills(75, "Physical")
  },
  {
    id: personaId++,
    name: "Magatsu-Izanagi",
    arcana: "Tower",
    level: 83,
    stats: generateStats(83, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(83, "Dark")
  },

  // ==================== STAR ====================
  {
    id: personaId++,
    name: "Neko Shogun",
    arcana: "Star",
    level: 17,
    stats: generateStats(17, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(17, "Support")
  },
  {
    id: personaId++,
    name: "Setanta",
    arcana: "Star",
    level: 22,
    stats: generateStats(22, 'physical'),
    inherits: "Physical",
    resistances: defaultResistances(),
    skills: defaultSkills(22, "Physical")
  },
  {
    id: personaId++,
    name: "Kaiwan",
    arcana: "Star",
    level: 30,
    stats: generateStats(30, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(30, "Support")
  },
  {
    id: personaId++,
    name: "Ganesha",
    arcana: "Star",
    level: 38,
    stats: generateStats(38, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(38, "Support")
  },
  {
    id: personaId++,
    name: "Garuda",
    arcana: "Star",
    level: 46,
    stats: generateStats(46, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Absorb"
    },
    skills: defaultSkills(46, "Wind")
  },
  {
    id: personaId++,
    name: "Houou",
    arcana: "Star",
    level: 54,
    stats: generateStats(54, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb"
    },
    skills: defaultSkills(54, "Fire")
  },
  {
    id: personaId++,
    name: "Saturnus",
    arcana: "Star",
    level: 62,
    stats: generateStats(62, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(62, "Support")
  },
  {
    id: personaId++,
    name: "Helel",
    arcana: "Star",
    level: 71,
    stats: generateStats(71, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(71, "Light")
  },
  {
    id: personaId++,
    name: "Cendrillon",
    arcana: "Star",
    level: 79,
    stats: generateStats(79, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(79, "Support")
  },
  {
    id: personaId++,
    name: "Vanadis",
    arcana: "Star",
    level: 87,
    stats: generateStats(87, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(87, "Support")
  },

  // ==================== MOON ====================
  {
    id: personaId++,
    name: "Gurulu",
    arcana: "Moon",
    level: 19,
    stats: generateStats(19, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(19, "Wind")
  },
  {
    id: personaId++,
    name: "Yamata-no-Orochi",
    arcana: "Moon",
    level: 26,
    stats: generateStats(26, 'magic'),
    inherits: "Ice",
    resistances: {
      ...defaultResistances(),
      ice: "Resist"
    },
    skills: defaultSkills(26, "Ice")
  },
  {
    id: personaId++,
    name: "Girimehkala",
    arcana: "Moon",
    level: 34,
    stats: generateStats(34, 'physical'),
    inherits: "Physical",
    resistances: {
      ...defaultResistances(),
      slash: "Repel",
      strike: "Repel",
      pierce: "Repel"
    },
    skills: defaultSkills(34, "Physical")
  },
  {
    id: personaId++,
    name: "Dionysus",
    arcana: "Moon",
    level: 42,
    stats: generateStats(42, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Resist"
    },
    skills: defaultSkills(42, "Support")
  },
  {
    id: personaId++,
    name: "Chernobog",
    arcana: "Moon",
    level: 50,
    stats: generateStats(50, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(50, "Dark")
  },
  {
    id: personaId++,
    name: "Seth",
    arcana: "Moon",
    level: 59,
    stats: generateStats(59, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb"
    },
    skills: defaultSkills(59, "Fire")
  },
  {
    id: personaId++,
    name: "Baal Zebul",
    arcana: "Moon",
    level: 68,
    stats: generateStats(68, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(68, "Dark")
  },
  {
    id: personaId++,
    name: "Sandalphon",
    arcana: "Moon",
    level: 77,
    stats: generateStats(77, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(77, "Support")
  },
  {
    id: personaId++,
    name: "Kaguya",
    arcana: "Moon",
    level: 85,
    stats: generateStats(85, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(85, "Support")
  },

  // ==================== SUN ====================
  {
    id: personaId++,
    name: "Yatagarasu",
    arcana: "Sun",
    level: 21,
    stats: generateStats(21, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Resist"
    },
    skills: defaultSkills(21, "Fire")
  },
  {
    id: personaId++,
    name: "Thunderbird",
    arcana: "Sun",
    level: 28,
    stats: generateStats(28, 'magic'),
    inherits: "Elec",
    resistances: {
      ...defaultResistances(),
      elec: "Absorb"
    },
    skills: defaultSkills(28, "Elec")
  },
  {
    id: personaId++,
    name: "Quetzalcoatl",
    arcana: "Sun",
    level: 36,
    stats: generateStats(36, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Absorb"
    },
    skills: defaultSkills(36, "Wind")
  },
  {
    id: personaId++,
    name: "Jatayu",
    arcana: "Sun",
    level: 44,
    stats: generateStats(44, 'magic'),
    inherits: "Wind",
    resistances: {
      ...defaultResistances(),
      wind: "Resist"
    },
    skills: defaultSkills(44, "Wind")
  },
  {
    id: personaId++,
    name: "Horus",
    arcana: "Sun",
    level: 52,
    stats: generateStats(52, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(52, "Light")
  },
  {
    id: personaId++,
    name: "Vishnu",
    arcana: "Sun",
    level: 60,
    stats: generateStats(60, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(60, "Support")
  },
  {
    id: personaId++,
    name: "Asura",
    arcana: "Sun",
    level: 69,
    stats: generateStats(69, 'magic'),
    inherits: "Fire",
    resistances: {
      ...defaultResistances(),
      fire: "Absorb"
    },
    skills: defaultSkills(69, "Fire")
  },

  // ==================== JUDGEMENT ====================
  {
    id: personaId++,
    name: "Anubis",
    arcana: "Judgement",
    level: 49,
    stats: generateStats(49, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null",
      light: "Weak"
    },
    skills: defaultSkills(49, "Dark")
  },
  {
    id: personaId++,
    name: "Trumpeter",
    arcana: "Judgement",
    level: 57,
    stats: generateStats(57, 'magic'),
    inherits: "Almighty",
    resistances: {
      ...defaultResistances(),
      light: "Null",
      dark: "Null"
    },
    skills: defaultSkills(57, "Almighty")
  },
  {
    id: personaId++,
    name: "Michael",
    arcana: "Judgement",
    level: 64,
    stats: generateStats(64, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(64, "Light")
  },
  {
    id: personaId++,
    name: "Satan",
    arcana: "Judgement",
    level: 72,
    stats: generateStats(72, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Absorb"
    },
    skills: defaultSkills(72, "Dark")
  },
  {
    id: personaId++,
    name: "Lucifer",
    arcana: "Judgement",
    level: 81,
    stats: generateStats(81, 'magic'),
    inherits: "Almighty",
    resistances: {
      ...defaultResistances(),
      light: "Null",
      dark: "Null"
    },
    skills: defaultSkills(81, "Almighty")
  },
  {
    id: personaId++,
    name: "Messiah",
    arcana: "Judgement",
    level: 90,
    stats: generateStats(90, 'balanced'),
    inherits: "Almighty",
    resistances: {
      ...defaultResistances(),
      fire: "Null",
      ice: "Null",
      elec: "Null",
      wind: "Null",
      light: "Null",
      dark: "Null"
    },
    skills: defaultSkills(90, "Almighty")
  },

  // ==================== AEON ====================
  {
    id: personaId++,
    name: "Nidhoggr",
    arcana: "Aeon",
    level: 51,
    stats: generateStats(51, 'magic'),
    inherits: "Dark",
    resistances: {
      ...defaultResistances(),
      dark: "Null"
    },
    skills: defaultSkills(51, "Dark")
  },
  {
    id: personaId++,
    name: "Uriel",
    arcana: "Aeon",
    level: 63,
    stats: generateStats(63, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(63, "Light")
  },
  {
    id: personaId++,
    name: "Ananta",
    arcana: "Aeon",
    level: 71,
    stats: generateStats(71, 'magic'),
    inherits: "Support",
    resistances: {
      ...defaultResistances(),
      light: "Null"
    },
    skills: defaultSkills(71, "Support")
  },
  {
    id: personaId++,
    name: "Metatron",
    arcana: "Aeon",
    level: 82,
    stats: generateStats(82, 'magic'),
    inherits: "Light",
    resistances: {
      ...defaultResistances(),
      light: "Absorb"
    },
    skills: defaultSkills(82, "Light")
  }
];
