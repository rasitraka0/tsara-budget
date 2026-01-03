import { createBudget } from '../controllers/budgetController.js';

export function initCreateBudget() {
  document.querySelector('#create-budget').addEventListener('click', (e) => {
    e.preventDefault();

    const dateInput = document.querySelector('#date-reference');
    const budgetInput = document.querySelector('#budget-total');

    if (dateInput.value.trim() === '') {
      alert('La date ne doit pas être vide');
      return;
    }

    if (budgetInput.value.trim() === '') {
      alert('Le budget ne doit pas être vide');
      return;
    }

    if (Number(budgetInput.value) <= 0) {
      alert('Le budget doit être supérieur à 0');
      return;
    }

    createBudget(dateInput.value, budgetInput.value);

    dateInput.value = '';
    budgetInput.value = '';
  });
}
