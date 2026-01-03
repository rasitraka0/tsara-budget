import {
  addExpenseFromEdit,
  applyEditBudget,
  deleteExpenseFormEdit,
  goBackToListFuturBudget,
} from '../controllers/editBudgetController.js';
import { formatDate, formatMontant } from '../utils/formatters.js';

export function displayDateTitleEdit(budget) {
  document.querySelector('#edit-budget-date-label').textContent = `${formatDate(
    budget.date
  )}`;
}

export function displayTotalBudgetEdit(budget) {
  document.querySelector(
    '#summary-total-budget'
  ).textContent = `${formatMontant(budget.budgetAmount)} `;
}

export function displayTotalExpensesEdit(budget) {
  document.querySelector(
    '#summary-total-expenses'
  ).textContent = `${formatMontant(budget.getTotalExpense())}`;
}

export function displayRemainingEdit(budget) {
  document.querySelector(
    '#summary-remaining-budget'
  ).textContent = `${formatMontant(budget.getRemainingBudget())}`;
}

export function displayDateBudgetEdit(budget) {
  document.querySelector('#edit-budget-date').value = budget.date;
}

export function displayBudgetAmountEdit(budget) {
  document.querySelector('#edit-budget-total').value = budget.budgetAmount;
}

export function initApplyEditBudget() {
  document.querySelector('#edit-budget').addEventListener('click', (e) => {
    e.preventDefault();

    const newDate = document.querySelector('#edit-budget-date');
    const newAmount = document.querySelector('#edit-budget-total');

    applyEditBudget(newDate.value, newAmount.value);
  });
}

export function initBtnAddExpenseEdit() {
  document
    .querySelector('#btn-add-expense-edit')
    .addEventListener('click', (e) => {
      e.preventDefault();
      alert('button ajouter un depenses futur clicquer');

      const category = document.querySelector('#category-edit');
      const montant = document.querySelector('#montant-edit');

      addExpenseFromEdit(category.value, montant.value);
      category.value = '';
      montant.value = '';
    });
}

export function renderExpenseListFromEdit(expenses) {
  const container = document.querySelector('#expense-list-from-edit');
  container.innerHTML = '';

  expenses.forEach((e, index) => {
    const div = document.createElement('div');
    div.classList.add('expense-item');

    div.innerHTML = `
      <div class="expense-details-form-edit">
        <div class="expense-category-form-edit">${e.category}</div>
      </div>
      <div class="expense-amount-form-edit">${formatMontant(e.montant)}</div>
      <button class="btn-delete-form-edit" data-id="${index}">✕</button>
    `;

    container.appendChild(div);
  });
}

export function initDeleteExpenseFromEdit() {
  const list = document.querySelector('#expense-list-from-edit');

  list.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-delete-form-edit')) return;
    const id = Number(e.target.dataset.id);

    deleteExpenseFormEdit(id);
  });
}

export function initBtnBackToListFutur() {
  document.querySelector('#btn-edit-back').addEventListener('click', () => {
    goBackToListFuturBudget();
  });
}
