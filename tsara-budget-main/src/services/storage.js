export function saveBudgets(budgets) {
  localStorage.setItem('allBudgets', JSON.stringify(budgets));
}

export function loadBudgets() {
  const data = localStorage.getItem('allBudgets');
  return data ? JSON.parse(data) : [];
}

export function generateBudgetId() {
  let lastId = localStorage.getItem('lastBudgetId') || '0';
  const newId = parseInt(lastId) + 1;
  localStorage.setItem('lastBudgetId', newId);
  return newId;
}
