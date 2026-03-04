import { addExpense, deleteExpense } from '../controllers/expenseController.js';
import { formatDate, formatMontant } from '../utils/formatters.js';

export function displayTotalBudget(amount) {
  document.querySelector('#total-budget').textContent = `${formatMontant(
    amount,
  )}`;
}
export function displayTotalExpense(amount) {
  document.querySelector('#total-expenses').textContent = `${formatMontant(
    amount,
  )}`;
}
export function displayRemainingBudget(amount) {
  document.querySelector('#remaining-budget').textContent = `${formatMontant(
    amount,
  )}`;
}

export function displayDateBudget(date) {
  document.querySelector('#date-ref').textContent = `${formatDate(date)}`;
}

export function initAddExpense() {
  document.querySelector('#btn-add-expense').addEventListener('click', (e) => {
    e.preventDefault();
    const category = document.querySelector('#category');
    const montant = document.querySelector('#montant');

    addExpense(category.value, montant.value);

    category.value = '';
    montant.value = '';
  });
}

export function renderExpenseList(expenses) {
  const container = document.querySelector('#expense-list');
  container.innerHTML = '';

  expenses.forEach((e, index) => {
    const div = document.createElement('div');
    div.classList.add('expense-item');

    div.innerHTML = `
      <div class="expense-details">
        <div class="expense-category">${e.category}</div>
      </div>
      <div class="expense-amount">${formatMontant(e.montant)}</div>
      <button class="btn-delete" data-id="${index}">✕</button>
    `;

    container.appendChild(div);
  });
}

export function initDeleteExpense() {
  const list = document.querySelector('#expense-list');

  list.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-delete')) return;

    const index = Number(e.target.dataset.id);
    deleteExpense(index);
  });
}
