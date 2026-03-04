import {
  goToEditBudgetFutur,
  goToFuturBudget,
} from '../controllers/navigationController.js';
import { budgetManager } from '../services/budgetManager.js';
import appState from '../state/appState.js';
import {
  displayBudgetAmountEdit,
  displayDateBudgetEdit,
  displayDateTitleEdit,
  displayRemainingEdit,
  displayTotalBudgetEdit,
  displayTotalExpensesEdit,
  renderExpenseListFromEdit,
} from '../views/editBudgetView.js';
import { renderFuturList } from '../views/futurBudgetView.js';

export function fitlrerFuturBudget() {
  const budgetFutur = budgetManager.filterBudgetFutur();
  goToFuturBudget();

  renderFuturList(budgetFutur);
}

export function startEditFuturBudget(id) {
  const currentBudget = budgetManager.findById(id);
  if (!currentBudget) return;

  appState.setCurrentBudgetId(currentBudget.id);

  goToEditBudgetFutur();
  displayDateTitleEdit(currentBudget);
  displayDateBudgetEdit(currentBudget);
  displayBudgetAmountEdit(currentBudget);
  displayTotalBudgetEdit(currentBudget);
  displayTotalExpensesEdit(currentBudget);
  displayRemainingEdit(currentBudget);
  renderExpenseListFromEdit(currentBudget.expenses);
}

export function deleteFutur(id) {
  const deleted = budgetManager.deleteBudgetById(id);

  if (!deleted) return;

  budgetManager.save();

  renderFuturList(budgetManager.filterBudgetFutur());
}
