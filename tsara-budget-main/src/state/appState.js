class AppState {
  constructor() {
    this.currentBudgetDate = null;
    this.currentBudgetId = null;
  }

  setCurrentBudgetDate(date) {
    this.currentBudgetDate = date;
  }

  setCurrentBudgetId(id) {
    this.currentBudgetId = id;
  }

  getCurrentBudgetDate() {
    return this.currentBudgetDate;
  }

  getCurrentBudgetId() {
    return this.currentBudgetId;
  }
}

export default new AppState();
