import { fitlrerFuturBudget } from '../controllers/futurController.js';
import { filtrerHistory } from '../controllers/historyController.js';
import {
  goToNewBudgetSection,
  goToProgressIfExists,
} from '../controllers/navigationController.js';

export function initBtnNewBudget() {
  document.querySelector('#btn-new-budget').addEventListener('click', () => {
    goToNewBudgetSection();
  });
}

export function initBtnProgress() {
  document.querySelector('#btn-progress').addEventListener('click', () => {
    goToProgressIfExists();
  });
}

export function initBtnHistorique() {
  document.querySelector('#btn-historique').addEventListener('click', () => {
    filtrerHistory();
  });
}
export function initBtnFutur() {
  document.querySelector('#btn-futur').addEventListener('click', () => {
    fitlrerFuturBudget();
  });
}
