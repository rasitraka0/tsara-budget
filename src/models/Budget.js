class Budget {
  constructor(id, date, budgetAmount, expenses = []) {
    this.id = id;
    this.date = date;
    this.budgetAmount = budgetAmount;
    this.expenses = expenses ?? [];
  }

  addExpense(category, montant) {
    this.expenses.push({ category, montant: Number(montant) });
  }
  changeDate(date) {
    this.date = date;
  }
  changeBudgetAmount(budget) {
    this.budgetAmount = budget;
  }
  deleteExpense(index) {
    this.expenses.splice(index, 1);
  }
  getTotalExpense() {
    return this.expenses.reduce((acc, m) => {
      return acc + m.montant;
    }, 0);
  }
  getRemainingBudget() {
    return this.budgetAmount - this.getTotalExpense();
  }
}

export default Budget;
