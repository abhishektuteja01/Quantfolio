/**
 * @file MarketData.js
 * @description Handles stock price fetching and updates.
 */

class MarketData {
  /**
   * Creates a MarketData instance.
   * @param {string} tickerSymbol - Stock ticker symbol.
   */
  constructor(tickerSymbol) {
    this.tickerSymbol = tickerSymbol;
    this.currentPrice = 0;
    this.lastUpdated = new Date().toISOString();
  }

  /**
   * Fetches the latest stock price from an API (simulated here).
   * @returns {number} Updated price.
   */
  fetchPrice() {
    // Simulating a fetched price with a random value
    this.currentPrice = (Math.random() * 100 + 100).toFixed(2);
    this.lastUpdated = new Date().toISOString();
    return this.currentPrice;
  }

  /**
   * Updates stock price manually.
   * @param {number} newPrice - Manually updated price.
   */
  updatePrice(newPrice) {
    this.currentPrice = newPrice;
    this.lastUpdated = new Date().toISOString();
  }
}

export default MarketData;