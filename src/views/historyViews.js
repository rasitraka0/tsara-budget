import {
  deleteHistory,
  goToModalHistory,
} from '../controllers/historyController.js';
import { formatDate, formatMontant } from '../utils/formatters.js';

export function renderHistoryList(manager) {
  const allHistoryItem = document.querySelector('.all-history-item');
  allHistoryItem.innerHTML = '';

  manager.forEach((m) => {
    const div = document.createElement('div');
    div.classList.add('history-item');

    div.innerHTML = `
     <div class="history-info">
                <h3>${formatDate(m.date)}</h3>
                <p>Budget Total : ${formatMontant(m.budgetAmount)}</p>
              </div>
              <div>
              <button class="btn-detail" data-id="${m.id}">Détail</button>
              <button class="btn-sup" data-id="${m.id}">Supprimer</button>
              <div>`;

    allHistoryItem.appendChild(div);
  });
}

export function btnDetailHistory() {
  const listHistory = document.querySelector('.all-history-item');

  listHistory.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-detail')) {
      const id = Number(e.target.dataset.id);

      goToModalHistory(id);
    }
  });
}

export function btnDeleteHistory() {
  const listHistory = document.querySelector('.all-history-item');

  listHistory.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-sup')) {
      const id = Number(e.target.dataset.id);
      alert('button sup');

      deleteHistory(id);
    }
  });
}
