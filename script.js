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
      energyList.appendChild(li);
    });
  }
});
