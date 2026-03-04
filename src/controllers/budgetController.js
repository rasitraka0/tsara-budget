import Budget from '../models/Budget.js';
import { budgetManager } from '../services/budgetManager.js';
import { generateBudgetId } from '../services/storage.js';
import appState from '../state/appState.js';
import { dateToday } from '../utils/dateHelpers.js';
import {
  displayDateBudget,
  displayRemainingBudget,
  displayTotalBudget,
  displayTotalExpense,
  renderExpenseList,
} from '../views/progressView.js';
import { goToProgress } from './navigationController.js';

export function createBudget(date, amount) {
  const id = generateBudgetId();
  if (budgetManager.findByDate(date)) {
    alert('budget efa misy');
    return;
  }
  if (date < dateToday()) {
    alert('Impossible de créer un budget pour une date passée');
    return;
  }
  if (date > dateToday()) {
    alert('budget pour futur');
  }
  let newBudget = new Budget(id, date, Number(amount));

  budgetManager.addBudget(newBudget);
  budgetManager.save();

  appState.setCurrentBudgetId(id);

  console.log(appState.getCurrentBudgetId());

  goToProgress();

  displayDateBudget(newBudget.date);
  displayTotalBudget(newBudget.budgetAmount);
  displayRemainingBudget(newBudget.getRemainingBudget());
  displayTotalExpense(newBudget.getTotalExpense());
  renderExpenseList(newBudget.expenses);
}
