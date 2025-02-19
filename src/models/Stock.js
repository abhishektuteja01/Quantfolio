/**
 * @file Stock.js
 * @description Defines the Stock class with tracking and price updates.
 */

class Stock {
  /**
   * Creates a stock instance.
   * @param {string} tickerSymbol - The stock symbol (e.g., AAPL, TSLA).
   * @param {number} quantity - Number of shares owned.
   * @param {number} purchasePrice - The purchase price of the stock.
   * @param {string} platform - The platform where the stock was bought.
   */
  constructor(tickerSymbol, quantity, purchasePrice, platform) {
    this.tickerSymbol = tickerSymbol;
    this.quantity = quantity;
    this.purchasePrice = purchasePrice;
    this.currentPrice = purchasePrice; // Initial price = purchase price
    this.platform = platform;
  }

  /**
   * Updates the stock's current price.
   * @param {number} newPrice - The new stock price.
   */
  updatePrice(newPrice) {
    this.currentPrice = newPrice;
  }

  /**
   * Calculates profit/loss.
   * @returns {number} Profit or loss amount.
   */
  calculatePnL() {
    return (this.currentPrice - this.purchasePrice) * this.quantity;
  }

  /**
   * Checks if the stock has reached its target price.
   * @param {number} targetPrice - The predefined target price.
   * @returns {boolean} True if the target price is met.
   */
  checkTargetPrice(targetPrice) {
    return this.currentPrice >= targetPrice;
  }
}

export default Stock;