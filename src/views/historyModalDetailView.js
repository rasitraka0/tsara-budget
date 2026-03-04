import { formatDate, formatMontant } from '../utils/formatters.js';

export function renderDetailModal(budget) {
  const modalBody = document.querySelector('#modal-body');
  modalBody.innerHTML = '';

  // Infos budget
  const modalBudgetInfo = document.createElement('div');
  modalBudgetInfo.classList.add('modal-budget-info');

  modalBudgetInfo.innerHTML = `  
    <div class="modal-info-item">
      <span class="modal-label">Date</span>
      <span class="modal-value">${formatDate(budget.date)}</span>
    </div>

    <div class="modal-info-item">
      <span class="modal-label">Budget total</span>
      <span class="modal-value">${formatMontant(budget.budgetAmount)}</span>
    </div>
  `;

  // Dépenses
  const modalExpenses = document.createElement('div');
  modalExpenses.classList.add('modal-expenses');

  const title = document.createElement('h3');
  title.textContent = 'Liste des dépenses';
  modalExpenses.appendChild(title);

  budget.expenses.forEach((e) => {
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('modal-expense-item');

    expenseItem.innerHTML = `
      <div class="modal-expense-category">${e.category}</div>
      <div class="modal-expense-amount">${formatMontant(e.montant)}</div>
    `;

    modalExpenses.appendChild(expenseItem);
  });

  modalBody.appendChild(modalBudgetInfo);
  modalBody.appendChild(modalExpenses);
}
export function initDetailModalClose() {
  const modal = document.querySelector('#detail-modal');
  const btnClose = modal.querySelector('.btn-close');

  btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}
