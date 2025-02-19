/**
 * @file Portfolio.js
 * @description Defines the Portfolio class, which tracks stocks and calculates performance.
 */

import Stock from "./Stock.js";

class Portfolio {
  constructor() {
    this.stocks = [];
    this.totalInvestedAmount = 0;
    this.currentPortfolioValue = 0;
    this.overallPercentageReturn = 0;
  }

  /**
   * Adds a new transaction (stock purchase).
   * @param {object} transaction - The transaction details.
   */
  addTransaction(transaction) {
    const stock = new Stock(
      transaction.tickerSymbol,
      transaction.quantity,
      transaction.purchasePrice,
      transaction.platform
    );
    this.stocks.push(stock);
    this.calculatePortfolioMetrics();
  }

  /**
   * Calculates total invested amount.
   */
  calculateTotalInvested() {
    this.totalInvestedAmount = this.stocks.reduce(
      (acc, stock) => acc + stock.purchasePrice * stock.quantity,
      0
    );
  }

  /**
   * Updates current portfolio value.
   */
  calculatePortfolioValue() {
    this.currentPortfolioValue = this.stocks.reduce(
      (acc, stock) => acc + stock.currentPrice * stock.quantity,
      0
    );
  }

  /**
   * Calculates overall return percentage.
   */
  calculateOverallReturn() {
    if (this.totalInvestedAmount === 0) return;
    this.overallPercentageReturn =
      ((this.currentPortfolioValue - this.totalInvestedAmount) /
        this.totalInvestedAmount) *
      100;
  }

  /**
   * Updates stock prices for all stocks in the portfolio.
   */
  updatePrices() {
    this.stocks.forEach((stock) => stock.updatePrice());
    this.calculatePortfolioMetrics();
  }

  /**
   * Returns the summary of the portfolio.
   * @returns {object} Portfolio summary.
   */
  getSummary() {
    return {
      totalInvested: this.totalInvestedAmount,
      currentValue: this.currentPortfolioValue,
      overallReturn: this.overallPercentageReturn.toFixed(2) + "%",
    };
  }

  /**
   * Recalculates portfolio metrics.
   */
  calculatePortfolioMetrics() {
    this.calculateTotalInvested();
    this.calculatePortfolioValue();
    this.calculateOverallReturn();
  }
}

export default Portfolio;