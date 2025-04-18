fetch('tasks.json')
  .then(response => response.json())
  .then(data => {
    const taskSelect = document.getElementById('taskSelect');
    const hazardsList = document.getElementById('hazards');
    const mitigationList = document.getElementById('mitigation');
    const energyList = document.getElementById('energy');
    const fullHazards = document.getElementById('fullHazards');
    const fullMitigation = document.getElementById('fullMitigation');
    const fullVersion = document.getElementById('fullVersion');
    const expandBtn = document.getElementById('expandBtn');

    data.forEach((task, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = task.name;
      taskSelect.appendChild(option);
    });

    taskSelect.addEventListener('change', () => {
      const task = data[taskSelect.value];
      hazardsList.innerHTML = task.hazards.map(h => `<li>${h}</li>`).join('');
      mitigationList.innerHTML = task.mitigation.map(m => `<li>${m}</li>`).join('');
      energyList.innerHTML = task.energy.map(e => `<li>${e}</li>`).join('');
      fullHazards.textContent = task.fullHazards || '';
      fullMitigation.textContent = task.fullMitigation || '';
      fullVersion.style.display = 'none';
      expandBtn.textContent = 'More Info';
    });

    expandBtn.addEventListener('click', () => {
      fullVersion.style.display = fullVersion.style.display === 'block' ? 'none' : 'block';
      expandBtn.textContent = fullVersion.style.display === 'block' ? 'Hide Details' : 'More Info';
    });

    taskSelect.dispatchEvent(new Event('change'));
  });