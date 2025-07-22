export function fetch5eToolsData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching 5eTools data:', error);
      throw error;
    });
}

export const Endpoints = Object.freeze({
  ROOT: "https://api.open5e.com/v2/",
  SPELLS: "https://api.open5e.com/v2/spells/",
  SPELLSCHOOLS: "https://api.open5e.com/v2/spellschools/",
  ITEMS: "https://api.open5e.com/v2/items/",
  ITEMSETS: "https://api.open5e.com/v2/itemsets/",
  ITEMCATEGORIES: "https://api.open5e.com/v2/itemcategories/",
  WEAPONS: "https://api.open5e.com/v2/weapons/",
  ARMOR: "https://api.open5e.com/v2/armor/",
  BACKGROUNDS: "https://api.open5e.com/v2/backgrounds/",
  CLASSES: "https://api.open5e.com/v1/classes/",
  CLASSINFORMATION: "https://api.open5e.com/v2/classes/",
  FEATS: "https://api.open5e.com/v2/feats/",
  RACES: "https://api.open5e.com/v2/races/",
  LANGUAGES: "https://api.open5e.com/v2/languages/",
  ALIGNMENTS: "https://api.open5e.com/v2/alignments/",
  CREATURES: "https://api.open5e.com/v2/creatures/",
  CREATURETYPES: "https://api.open5e.com/v2/creaturetypes/",
  CREATURESETS: "https://api.open5e.com/v2/creaturesets/",
  DAMAFGETYPES: "https://api.open5e.com/v2/damagetypes/",
  CONDITIONS: "https://api.open5e.com/v2/conditions/",
  SIZES: "https://api.open5e.com/v2/sizes/",
  ITEMRARITIES: "https://api.open5e.com/v2/itemrarities/",
  ENVIRONMENTS: "https://api.open5e.com/v2/environments/",
  ABILITIES: "https://api.open5e.com/v2/abilities/",
  SKILLS: "https://api.open5e.com/v2/skills/",
  RULES: "https://api.open5e.com/v2/rules/",
  RULESETS: "https://api.open5e.com/v2/rulesets/",
  CREATURETRAITS: "https://api.open5e.com/v2/creaturetraits/",
  GAMESYSTEMS: "https://api.open5e.com/v2/gamesystems/",
  DOCUMENTS: "https://api.open5e.com/v2/documents/",
  LICENSES: "https://api.open5e.com/v2/licenses/",
  PUBLISHERS: "https://api.open5e.com/v2/publishers/",
});