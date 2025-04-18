import tasks from './tasks.json' assert { type: 'json' };
import energies from './energies.json' assert { type: 'json' };

const app = document.getElementById('app');
app.innerHTML = '<h1>TaskSafe</h1>';

tasks.forEach(task => {
  const card = document.createElement('div');
  card.className = 'task-card';

  card.innerHTML = `
    <h2>${task.name}</h2>
    <p><strong>Hazards:</strong> ${task.shortHazards.join(', ')}</p>
    <p><strong>Prevention:</strong> ${task.shortMitigation.join(', ')}</p>
    <div>${task.energy.map(e => `<span class="energy-tag" title="${energies[e]}">${e}</span>`).join(' ')}</div>
    <button class="expand-btn">More Info</button>
    <div class="full-details" style="display:none;">
      <p><strong>Detailed Hazards:</strong> ${task.fullHazards}</p>
      <p><strong>Detailed Mitigation:</strong> ${task.fullMitigation}</p>
    </div>
  `;

  card.querySelector('.expand-btn').onclick = () => {
    const details = card.querySelector('.full-details');
    const expanded = details.style.display === 'block';
    details.style.display = expanded ? 'none' : 'block';
    card.querySelector('.expand-btn').textContent = expanded ? 'More Info' : 'Hide Details';
  };

  app.appendChild(card);
});