import { budgetManager } from '../services/budgetManager.js';
import appState from '../state/appState.js';
import {
  displayDateTitleEdit,
  displayRemainingEdit,
  displayTotalBudgetEdit,
  displayTotalExpensesEdit,
  renderExpenseListFromEdit,
} from '../views/editBudgetView.js';
import { renderFuturList } from '../views/futurBudgetView.js';
import { goToFuturBudget } from './navigationController.js';

export function applyEditBudget(newDate, newAmount) {
  const id = appState.getCurrentBudgetId();
  const budget = budgetManager.findById(id);

  if (!budget) return;

  budget.changeDate(newDate);
  budget.changeBudgetAmount(Number(newAmount));

  budgetManager.save();

  displayDateTitleEdit(budget);
  displayTotalBudgetEdit(budget);
  displayTotalExpensesEdit(budget);
  displayRemainingEdit(budget);
}

export function addExpenseFromEdit(category, montant) {
  const id = appState.getCurrentBudgetId();
  const currentBudget = budgetManager.findById(id);

  if (!currentBudget) return;

  currentBudget.addExpense(category, montant);
  budgetManager.save();

  displayTotalExpensesEdit(currentBudget);
  displayRemainingEdit(currentBudget);

  renderExpenseListFromEdit(currentBudget.expenses);
}

export function deleteExpenseFormEdit(id) {
  const currentBudgetId = appState.getCurrentBudgetId();
  const currentBudget = budgetManager.findById(currentBudgetId);
  if (!currentBudget) return;

  currentBudget.deleteExpense(id);
  budgetManager.save();
  displayTotalExpensesEdit(currentBudget);
  displayRemainingEdit(currentBudget);

  renderExpenseListFromEdit(currentBudget.expenses);
}

export function goBackToListFuturBudget() {
  goToFuturBudget();
  renderFuturList(budgetManager.filterBudgetFutur());
}
