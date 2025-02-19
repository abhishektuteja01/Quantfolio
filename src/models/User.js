/**
 * @file User.js
 * @description Defines the User class that manages a portfolio of stocks.
 */

import Portfolio from "./Portfolio.js";

class User {
  /**
   * Creates a new User instance.
   * @param {string} name - The name of the user.
   * @param {string} email - The email of the user.
   */
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.portfolio = new Portfolio();
  }

  /**
   * Logs a transaction into the portfolio.
   * @param {object} transaction - The transaction object.
   */
  logTransaction(transaction) {
    this.portfolio.addTransaction(transaction);
  }

  /**
   * Displays the portfolio summary.
   * @returns {void}
   */
  viewPortfolio() {
    console.log(this.portfolio.getSummary());
  }

  /**
   * Updates stock prices in the portfolio.
   */
  updateStockPrice() {
    this.portfolio.updatePrices();
  }
}

export default User;