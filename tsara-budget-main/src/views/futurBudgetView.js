import {
  deleteFutur,
  startEditFuturBudget,
} from '../controllers/futurController.js';
import { formatDate, formatMontant } from '../utils/formatters.js';

export function renderFuturList(manager) {
  const allFuturItem = document.querySelector('.all-futur-item');
  allFuturItem.innerHTML = '';

  manager.forEach((m) => {
    const div = document.createElement('div');
    div.classList.add('futur-item');

    div.innerHTML = `
     <div class="futur-info">
                <h3>${formatDate(m.date)}</h3>
                <p>Budget Total : ${formatMontant(m.budgetAmount)}</p>
              </div>

               <div class="container-btn-futur">
                <button class="btn-change-futur" data-id="${
                  m.id
                }">Modifier</button>
                <button class="btn-delete-futur" data-id="${
                  m.id
                }">Supprimer</button>
              </div>`;

    allFuturItem.appendChild(div);
  });
}

export function btnModification() {
  const listFutur = document.querySelector('.all-futur-item');

  listFutur.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-change-futur')) {
      const id = Number(e.target.dataset.id);

      startEditFuturBudget(id);
    }
  });
}

export function btnDeleteFutur() {
  const listFutur = document.querySelector('.all-futur-item');

  listFutur.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete-futur')) {
      const id = Number(e.target.dataset.id);

      deleteFutur(id);
    }
  });
}
