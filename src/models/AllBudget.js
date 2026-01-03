import { loadBudgets, saveBudgets } from '../services/storage.js';
import Budget from './Budget.js';
class AllBudget {
  constructor() {
    this.budgets = [];
  }

  findByDate(date) {
    const budget = this.budgets.find((b) => b.date === date);
    return budget;
  }
  findById(id) {
    return this.budgets.find((b) => b.id === id) || null;
  }
  deleteBudgetById(id) {
    const index = this.budgets.findIndex((b) => b.id === id);
    if (index !== -1) {
      this.budgets.splice(index, 1);

      return true;
    }
    return false;
  }
  addBudget(budget) {
    this.budgets.push(budget);
  }

  filterBudgetFutur() {
    const todayStr = new Date().toISOString().split('T')[0];
    return this.budgets.filter((b) => b.date > todayStr);
  }

  filterBudgetHistory() {
    const todayStr = new Date().toISOString().split('T')[0];
    return this.budgets.filter((b) => b.date < todayStr);
  }

  charger() {
    const data = loadBudgets();
    this.budgets = data.map(
      (d) => new Budget(d.id, d.date, d.budgetAmount, d.expenses)
    );
  }
  save() {
    saveBudgets(this.budgets);
  }
}

export default AllBudget;
