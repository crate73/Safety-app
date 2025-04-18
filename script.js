fetch('tasks.json').then(res => res.json()).then(tasks => {
  fetch('energies.json').then(res => res.json()).then(energies => {
    const taskSelect = document.getElementById('taskSelect');
    const taskInfo = document.getElementById('taskInfo');
    const energyList = document.getElementById('energyList');

    tasks.forEach((task, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = task.name;
      taskSelect.appendChild(opt);
    });

    taskSelect.onchange = () => {
      const task = tasks[taskSelect.value];
      taskInfo.innerHTML = `
        <h2>Associated Hazards</h2>
        <ul>${task.shortHazards.map(h => `<li>${h}</li>`).join('')}</ul>

        <h2>Mitigation Strategies</h2>
        <ul>${task.shortMitigation.map(m => `<li>${m}</li>`).join('')}</ul>

        <h2>Energy Sources</h2>
        ${task.energy.map(e => `<span class="energy-badge" title="${energies[e]}">${e}</span>`).join('')}
        
        <div>
          <button id="expandBtn">More Info</button>
          <div id="fullInfo" style="display:none; margin-top: 10px;">
            <h3>Detailed Hazards</h3>
            <p>${task.fullHazards}</p>
            <h3>Detailed Mitigation</h3>
            <p>${task.fullMitigation}</p>
          </div>
        </div>
      `;

      document.getElementById('expandBtn').onclick = () => {
        const full = document.getElementById('fullInfo');
        const isOpen = full.style.display === 'block';
        full.style.display = isOpen ? 'none' : 'block';
        document.getElementById('expandBtn').textContent = isOpen ? 'More Info' : 'Hide Details';
      };
    };

    taskSelect.dispatchEvent(new Event('change'));

    for (const [key, val] of Object.entries(energies)) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${key}:</strong> ${val}`;
      energyList.appendChild(li);
    }
  });
});