/**
 * @file Transaction.js
 * @description Defines the Transaction class for logging buy/sell activities.
 */

class Transaction {
  /**
   * Creates a transaction.
   * @param {string} tickerSymbol - The stock symbol.
   * @param {number} quantity - Number of shares traded.
   * @param {number} buySellPrice - Price per share.
   * @param {string} date - Date of the transaction.
   * @param {string} platform - Platform used for trading.
   */
  constructor(tickerSymbol, quantity, buySellPrice, date, platform) {
    this.tickerSymbol = tickerSymbol;
    this.quantity = quantity;
    this.buySellPrice = buySellPrice;
    this.date = date;
    this.platform = platform;
  }

  /**
   * Modifies transaction details.
   * @param {object} newDetails - Object containing new transaction values.
   */
  modifyTransaction(newDetails) {
    Object.assign(this, newDetails);
  }

  /**
   * Deletes the transaction.
   * @returns {string} Confirmation message.
   */
  deleteTransaction() {
    return `Transaction for ${this.tickerSymbol} on ${this.date} deleted.`;
  }
}

export default Transaction;