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

export const PERSONAS: Persona[] = [
  // --- Fool ---
  {
    id: 1,
    name: "Orpheus",
    arcana: "Fool",
    level: 1,
    stats: { st: 2, ma: 2, en: 1, ag: 2, lu: 1 },
    inherits: "Fire",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "None", ice: "None", elec: "Weak", wind: "None",
      light: "None", dark: "None"
    },
    skills: [{ name: "Bash", level: 1 }, { name: "Agi", level: 1 }, { name: "Tarunda", level: 3 }]
  },
  {
    id: 2,
    name: "Orpheus Telos",
    arcana: "Fool",
    level: 90,
    stats: { st: 70, ma: 70, en: 70, ag: 70, lu: 70 },
    inherits: "Almighty",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "Null", ice: "Null", elec: "Null", wind: "Null",
      light: "Null", dark: "Null"
    },
    skills: [{ name: "Victory Cry", level: 90 }, { name: "God's Hand", level: 90 }, { name: "Salvation", level: 90 }]
  },
  {
    id: 3,
    name: "Slime",
    arcana: "Fool",
    level: 4,
    stats: { st: 4, ma: 2, en: 3, ag: 3, lu: 3 },
    inherits: "Physical",
    resistances: {
      slash: "Resist", strike: "Resist", pierce: "None",
      fire: "Weak", ice: "None", elec: "None", wind: "None",
      light: "None", dark: "None"
    },
    skills: [{ name: "Bash", level: 1 }, { name: "Rebellion", level: 5 }, { name: "Poison Mist", level: 6 }]
  },
  
  // --- Magician ---
  {
    id: 4,
    name: "Jack Frost",
    arcana: "Magician",
    level: 8,
    stats: { st: 5, ma: 7, en: 4, ag: 6, lu: 5 },
    inherits: "Ice",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "Weak", ice: "Absorb", elec: "None", wind: "None",
      light: "None", dark: "None"
    },
    skills: [{ name: "Bufu", level: 1 }, { name: "Ice Break", level: 9 }, { name: "Ice Boost", level: 10 }]
  },
  {
    id: 5,
    name: "Moh Shuvuu",
    arcana: "Magician",
    level: 13,
    stats: { st: 7, ma: 10, en: 6, ag: 9, lu: 8 },
    inherits: "Wind",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "Weak", ice: "None", elec: "None", wind: "Null",
      light: "None", dark: "None"
    },
    skills: [{ name: "Garu", level: 1 }, { name: "Marin Karin", level: 15 }, { name: "Diarama", level: 17 }]
  },

  // --- Priestess ---
  {
    id: 6,
    name: "High Pixie",
    arcana: "Priestess",
    level: 16,
    stats: { st: 8, ma: 13, en: 9, ag: 12, lu: 10 },
    inherits: "Elec",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "None", ice: "None", elec: "Absorb", wind: "Weak",
      light: "None", dark: "None"
    },
    skills: [{ name: "Zionga", level: 1 }, { name: "Media", level: 18 }, { name: "Mazio", level: 19 }]
  },
  {
    id: 7,
    name: "Sarasvati",
    arcana: "Priestess",
    level: 27,
    stats: { st: 12, ma: 20, en: 15, ag: 18, lu: 17 },
    inherits: "Ice",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "None", ice: "Null", elec: "Weak", wind: "None",
      light: "None", dark: "None"
    },
    skills: [{ name: "Bufula", level: 1 }, { name: "Mediarama", level: 29 }, { name: "Dekaja", level: 30 }]
  },
  
  // --- Empress ---
  {
    id: 8,
    name: "Titania",
    arcana: "Empress",
    level: 33,
    stats: { st: 16, ma: 25, en: 18, ag: 22, lu: 20 },
    inherits: "Elec",
    resistances: {
      slash: "None", strike: "None", pierce: "None",
      fire: "None", ice: "None", elec: "Null", wind: "Weak",
      light: "None", dark: "None"
    },
    skills: [{ name: "Zionga", level: 1 }, { name: "Mediarama", level: 35 }, { name: "Dekunda", level: 37 }]
  },
  // Add more Personas here following this structure...
];