// array with object containing information about your jobs
const exampleArray = [
  {
    company: "name of company you worked for",
    jobs: [
      {
        // you can add as many positions for one company as you like, the function will keep them grouped together for you.
        position: "position title of company you worked for",
        employment: "time employed e.g jun 2006 - jun 2008",
        summary: "brief summary of your job position",
        PAR: [
          "bullet points for job in in PAR format",
          "each bullet point is created by seperate strings",
          "you can place as many as you like",
        ],
      },
    ],
  },
  // if you'd add a new role from a different company you'd need to create another object here
];

// The arrays below are for the demo on the webpage.

const linkArr = [
  {
    company: "Savior of Hyrule",
    jobs: [
      {
        position: "Hero of Twilight",
        employment: "2006 – Present",
        summary:
          "A courageous and resourceful adventurer with a proven track record of rescuing kingdoms, solving complex problems, and facing dark forces.",
        PAR: [
          "Led the successful rescue of Princess Zelda, defeating the evil sorcerer Zant and ultimately restoring peace to Hyrule.",
          "Wielded the Master Sword, an ancient weapon with the power to vanquish evil, to defeat Ganondorf and his minions across multiple dimensions and realms.",
          "Went snowboarding with kind Yetis",
          "Midna's sidekick :')",
        ],
      },
      {
        position: "Hero of Winds",
        employment: "2002 – Present",
        summary:
          "An adaptable and brave adventurer with a proven history of saving the Great Sea from the clutches of evil.",
        PAR: [
          "Sailing & Navigation: Expert in the art of seafaring, capable of navigating vast oceans and navigating through treacherous waters with precision.",
          "Set sail across the Great Sea to locate the lost pieces of the Triforce of Courage and restore peace to the islands.",
          "Formed key alliances with the Pirate Crew, the Sages, and the mysterious King of Red Lions, who guided and supported during perilous missions.",
        ],
      },
    ],
  },
  {
    company: "Hyrules most admired man",
    jobs: [
      {
        position: "Suitor",
        employment: "1998 - PRES",
        summary:
          "For some reason, across all the lands, across all the time lines, I have become the most sought after man in Hyrule",
        PAR: [
          "Malon (Ocarina of Time): Expresses clear affection, gifts Link Epona as a token of love.",
          "Saria (Ocarina of Time): Childhood friend with a strong emotional connection, deep care and admiration.",
          "Midna (Twilight Princess): Strong, emotional attachment that evolves from ally to something deeper, ending in bittersweet farewell.",
        ],
      },
    ],
  },
];

const sonicArr = [
  {
    company: "Defender of Earth and Friends",
    jobs: [
      {
        position: "Adventurer",
        employment: "1998 – Present",
        summary:
          "High-energy, fearless, and super sonic fast hero with a proven track record of saving the world and stopping evil forces.",
        PAR: [
          "LIVE AND LEARN",
          "Watch out! You're gonna crash! Ahhh",
          "Defended earth from Dr. Robotnik’s attempt to harness the power of Chaos, a destructive force capable of wiping out entire cities.",
          "Took on the challenge of defeating Chaos, saving Station Square and the future of earth.",
          "Great music",
        ],
      },
      {
        position: "Adventurer 2",
        employment: "2001 – Present",
        summary:
          "An adaptable and brave adventurer with a proven history of saving the Great Sea from the clutches of evil.",
        PAR: [
          "Rolling around at the speed of sound",
          "Down in pumpkin hill, I gots to find my lost piece",
          "Stopped Dr. Robotnik's evil plot to use the Ultimate Lifeform, Shadow, and the Chaos Emeralds to destroy Earth.",
          "Joined forces with allies and rival characters like Shadow to thwart the Bio-Lizard and stop a global catastrophe.",
          "Great music",
        ],
      },
    ],
  },
  {
    company: "Defender of Earth and Friends... as a Werehog",
    jobs: [
      {
        position: "Sonic The Werehog",
        employment: "2008 – Present",
        summary:
          "In Sonic Unleashed, faced the greatest challenge yet in saving the world from the destructive power of the Dark Gaia and restoring balance to the planet. ",
        PAR: [
          "So sonic are u... like... yanno... Nekkid?",
          "Unlocked fan favorite Werehog mode.",
          "Faced the catastrophic awakening of Dark Gaia, which split the planet into pieces and unleashed destructive forces across the globe..",
          "Defeated Eggman's schemes once again, protecting the planet from both mechanical and mystical forces.",
          "Great music",
        ],
      },
    ],
  },
  {
    company: "Champion of Speed",
    jobs: [
      {
        position: "Extreme Gear Tournament Winner",
        employment: "2006 – Present",
        summary:
          "Fearless hero with unmatched speed and reflexes, skilled in high-speed racing and extreme sports. ",
        PAR: [
          "Alright! Bring it on!",
          "Defeated rivals like Jet the Hawk and the Babylon Rogues, securing victory for himself and his team.",
          "Uncovered the true motivations behind the mysterious Babylon Garden and its secrets, racing against time to stop evil from taking over the skies.",
          "Worked with allies like Tails and Knuckles to prevent the destruction of the floating Babylon Garden.",
          "Great music",
        ],
      },
      {
        position: "Zero Gravity Tournament Winner",
        employment: "2008 – Present",
        summary:
          "Fearless hero with unmatched speed and reflexes, skilled in high-speed racing and extreme sports. ",
        PAR: [
          "Alright! Bring it on!",
          "Competed in new racing circuits with the ability to control Zero Gravity, gaining an advantage in aerial maneuvers and faster speeds.",
          "Great music",
        ],
      },
    ],
  },
];

export { linkArr, sonicArr };
