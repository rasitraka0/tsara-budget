import { budgetManager } from '../services/budgetManager.js';
import appState from '../state/appState.js';
import { dateToday } from '../utils/dateHelpers.js';
import { showMenu, showSection } from '../views/navigationView.js';
import {
  displayDateBudget,
  displayRemainingBudget,
  displayTotalBudget,
  displayTotalExpense,
  renderExpenseList,
} from '../views/progressView.js';

export function goToProgress() {
  showSection('#section-progress');
  showMenu('#btn-progress');
}

export function goToProgressIfExists() {
  const today = dateToday();
  const budgetToday = budgetManager.findByDate(today);

  if (!budgetToday) {
    alert(`Aucun budget en cours pour le date ${today}`);
    return;
  }
  appState.setCurrentBudgetId(budgetToday.id);

  goToProgress();

  displayDateBudget(budgetToday.date);
  displayTotalBudget(budgetToday.budgetAmount);
  displayTotalExpense(budgetToday.getTotalExpense());
  displayRemainingBudget(budgetToday.getRemainingBudget());
  renderExpenseList(budgetToday.expenses);
}

export function goToNewBudgetSection() {
  showSection('#section-new-budget');
  showMenu('#btn-new-budget');
}

export function goToHistory() {
  showSection('#section-historique');
  showMenu('#btn-historique');
}

export function goToFuturBudget() {
  showSection('#section-budget-futurs');
  showMenu('#btn-futur');
}

export function goToEditBudgetFutur() {
  showSection('#section-edit-budget');
  showMenu('#btn-futur');
}
