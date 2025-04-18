const energyDescriptions = {
  "Gravity": "Risks involving falls from heights or dropped objects.",
  "Motion": "Hazards caused by moving tools, equipment, or materials.",
  "Mechanical": "Contact with gears, belts, or rotating equipment.",
  "Electrical": "Exposure to live wires, faulty cords, or electric shock.",
  "Pressure": "Release of high-pressure gases, fluids, or systems.",
  "Sound": "Hearing damage from loud machinery or ongoing noise.",
  "Radiation": "Exposure to UV light, lasers, or other radiation sources.",
  "Biological": "Contact with mold, bacteria, or unsanitary materials.",
  "Chemical": "Interaction with harmful substances like solvents or cement.",
  "Temperature": "Working in hot environments or near cold surfaces or tools."
};

const taskData = {
  materialHandling: {
    hazards: [
      "Strains and sprains from lifting",
      "Dropped materials causing injuries",
      "Trips and falls due to obstructed pathways"
    ],
    mitigation: [
      "Use proper lifting techniques",
      "Wear appropriate PPE (gloves, steel-toe boots)",
      "Keep walkways clear and organized"
    ],
    energy: ["Motion", "Gravity"]
  },
  powerTools: {
    hazards: [
      "Cuts and lacerations",
      "Eye injuries from flying debris",
      "Electric shock"
    ],
    mitigation: [
      "Inspect tools before use",
      "Use safety guards and PPE (goggles, gloves)",
      "Ensure proper grounding and avoid wet conditions"
    ],
    energy: ["Mechanical", "Electrical", "Sound", "Gravity"]
  },
  workingAtHeights: {
    hazards: [
      "Falls from ladders or scaffolding",
      "Dropped tools causing injuries below"
    ],
    mitigation: [
      "Use fall protection equipment",
      "Secure tools to prevent dropping",
      "Inspect ladders and scaffolds before use"
    ],
    energy: ["Gravity", "Motion"]
  },
  concretePouring: {
    hazards: [
      "Skin irritation from cement",
      "Slips on wet surfaces",
      "Strains from handling heavy materials"
    ],
    mitigation: [
      "Wear long sleeves and gloves",
      "Clean spills promptly",
      "Use mechanical aids for heavy lifting"
    ],
    energy: ["Motion", "Gravity", "Chemical", "Temperature"]
  },
  demolition: {
    hazards: [
      "Exposure to dust and debris",
      "Structural collapses",
      "Hidden utilities (electrical, gas)"
    ],
    mitigation: [
      "Wear respiratory protection",
      "Conduct structural assessments",
      "Identify and shut off utilities before work"
    ],
    energy: ["Gravity", "Motion", "Mechanical", "Chemical", "Temperature"]
  },
  jackhammering: {
    hazards: [
      "Vibration injuries",
      "Flying debris",
      "High noise levels"
    ],
    mitigation: [
      "Wear hearing protection, gloves, goggles",
      "Keep others at safe distance"
    ],
    energy: ["Motion", "Mechanical", "Sound"]
  },
  wheelbarrowUse: {
    hazards: [
      "Back and shoulder strain",
      "Tripping or tipping over",
      "Uneven surfaces"
    ],
    mitigation: [
      "Use proper posture",
      "Balance the load",
      "Watch terrain"
    ],
    energy: ["Motion", "Gravity"]
  },
  shovelingTrenching: {
    hazards: [
      "Strains and sprains",
      "Contact with underground services"
    ],
    mitigation: [
      "Use ergonomic shovels",
      "Locate all utilities before digging"
    ],
    energy: ["Motion", "Gravity"]
  },
  loadingTrucks: {
    hazards: [
      "Falling from height",
      "Crushing from shifting load"
    ],
    mitigation: [
      "Use ramps",
      "Have a spotter",
      "Follow safe loading procedures"
    ],
    energy: ["Gravity", "Mechanical"]
  },
  mixingMortar: {
    hazards: [
      "Inhalation of dust",
      "Skin irritation"
    ],
    mitigation: [
      "Use masks and gloves",
      "Mix slowly to control dust"
    ],
    energy: ["Chemical", "Motion"]
  },
  rebarHandling: {
    hazards: [
      "Cuts from sharp edges",
      "Heavy lifting injuries",
      "Tripping hazards"
    ],
    mitigation: [
      "Wear gloves",
      "Use team lifts",
      "Keep workspace clear"
    ],
    energy: ["Mechanical", "Gravity"]
  },
  ladderWork: {
    hazards: [
      "Falls from ladder",
      "Slips or missteps",
      "Incorrect ladder setup or use"
    ],
    mitigation: [
      "Use a podium (platform) ladder whenever possible",
      "If using an A-frame ladder and going higher than 6 feet, fall protection is required",
      "Ensure ladder is stable and secured before climbing",
      "Maintain 3-point contact at all times",
      "Inspect ladder before each use"
    ],
    energy: ["Gravity"]
  },
  siteCleanup: {
    hazards: [
      "Sharp objects and debris on the ground",
      "Trip hazards from scattered materials",
      "Exposure to biological waste or unsanitary materials",
      "Inhalation of silica dust during sweeping or movement",
      "Contact with chemical compounds used for dust suppression"
    ],
    mitigation: [
      "Wear A5-rated cut-resistant gloves and safety footwear",
      "Keep walkways clear and organized",
      "Use proper disposal methods for biological waste",
      "Wear a respirator or N95 mask when dealing with dust",
      "Handle dust suppression compounds with care and follow safety instructions"
    ],
    energy: ["Motion", "Biological", "Chemical"]
  },
  generatorOperation: {
    hazards: [
      "Carbon monoxide poisoning",
      "Electrical shock",
      "Overheating"
    ],
    mitigation: [
      "Run outdoors in ventilated areas",
      "Inspect cables",
      "Keep flammable materials away"
    ],
    energy: ["Electrical", "Temperature"]
  },
  compactingGravel: {
    hazards: [
      "Excessive vibration",
      "Flying rocks",
      "Noise exposure"
    ],
    mitigation: [
      "Wear gloves and ear protection",
      "Check machine condition",
      "Keep bystanders clear"
    ],
    energy: ["Motion", "Mechanical", "Sound"]
  }
};

const taskSelect = document.getElementById("task-select");
const hazardsList = document.getElementById("hazards-list");
const mitigationList = document.getElementById("mitigation-list");
const energyList = document.getElementById("energy-list");

taskSelect.addEventListener("change", () => {
  const selectedTask = taskSelect.value;
  hazardsList.innerHTML = "";
  mitigationList.innerHTML = "";
  energyList.innerHTML = "";

  if (taskData[selectedTask]) {
    taskData[selectedTask].hazards.forEach(hazard => {
      const li = document.createElement("li");
      li.textContent = hazard;
      hazardsList.appendChild(li);
    });

    taskData[selectedTask].mitigation.forEach(strategy => {
      const li = document.createElement("li");
      li.textContent = strategy;
      mitigationList.appendChild(li);
    });

    taskData[selectedTask].energy.forEach(source => {
      const li = document.createElement("li");
      li.textContent = source;
      li.title = energyDescriptions[source] || "";
      energyList.appendChild(li);
    });
  }
});
