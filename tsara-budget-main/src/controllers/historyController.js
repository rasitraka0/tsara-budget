import { budgetManager } from '../services/budgetManager.js';
import { renderDetailModal } from '../views/historyModalDetailView.js';
import { renderHistoryList } from '../views/historyViews.js';
import { showModalDetail } from '../views/navigationView.js';
import { goToHistory } from './navigationController.js';

export function filtrerHistory() {
  const budgetHistory = budgetManager.filterBudgetHistory();
  goToHistory();
  renderHistoryList(budgetHistory);
}

export function goToModalHistory(id) {
  const currentBudget = budgetManager.findById(id);
  if (!currentBudget) return;

  showModalDetail('#detail-modal');
  renderDetailModal(currentBudget);
}

export function deleteHistory(id) {
  const deleted = budgetManager.deleteBudgetById(id);

  if (!deleted) return;

  budgetManager.save();

  renderHistoryList(budgetManager.filterBudgetHistory());
}
