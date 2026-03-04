import { initCreateBudget } from './views/budgetFormView.js';
import {
  initApplyEditBudget,
  initBtnAddExpenseEdit,
  initBtnBackToListFutur,
  initDeleteExpenseFromEdit,
} from './views/editBudgetView.js';
import { btnDeleteFutur, btnModification } from './views/futurBudgetView.js';
import { initDetailModalClose } from './views/historyModalDetailView.js';
import { btnDeleteHistory, btnDetailHistory } from './views/historyViews.js';
import {
  initBtnFutur,
  initBtnHistorique,
  initBtnNewBudget,
  initBtnProgress,
} from './views/menuView.js';
import { initAddExpense, initDeleteExpense } from './views/progressView.js';

document.addEventListener('DOMContentLoaded', () => {
  initCreateBudget();
  initAddExpense();
  initDeleteExpense();

  initBtnNewBudget();
  initBtnProgress();
  initBtnHistorique();
  initBtnFutur();

  btnDetailHistory();
  btnDeleteHistory();
  initDetailModalClose();

  btnModification();
  initApplyEditBudget();
  initBtnAddExpenseEdit();
  initDeleteExpenseFromEdit();
  initBtnBackToListFutur();

  btnDeleteFutur();
});
