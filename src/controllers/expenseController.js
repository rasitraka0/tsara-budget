import { budgetManager } from '../services/budgetManager.js';
import appState from '../state/appState.js';
import {
  displayRemainingBudget,
  displayTotalExpense,
  renderExpenseList,
} from '../views/progressView.js';

export function addExpense(category, montant) {
  const currentBudget = appState.getCurrentBudgetId();
  const budgetCible = budgetManager.findById(currentBudget);

  if (!budgetCible) return;

  budgetCible.addExpense(category, montant);
  budgetManager.save();

  displayTotalExpense(budgetCible.getTotalExpense());

  displayRemainingBudget(budgetCible.getRemainingBudget());

  renderExpenseList(budgetCible.expenses);
}

export function deleteExpense(index) {
  const currentBudgetId = appState.getCurrentBudgetId();
  const currentBudget = budgetManager.findById(currentBudgetId);

  if (!currentBudget) return;

  currentBudget.deleteExpense(index);
  budgetManager.save();

  displayTotalExpense(currentBudget.getTotalExpense());
  displayRemainingBudget(currentBudget.getRemainingBudget());
  renderExpenseList(currentBudget.expenses);
}
