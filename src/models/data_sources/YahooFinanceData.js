/**
 * @file YahooFinanceData.js
 * @description Fetches stock data from Yahoo Finance (simulated).
 */

class YahooFinanceData {
  constructor() {
    this.requestHeaders = { "User-Agent": "Quantfolio" };
  }

  /**
   * Fetches stock price (simulated response).
   * @param {string} ticker - The stock ticker symbol.
   * @returns {number} Fake price data.
   */
  fetchPrice(ticker) {
    console.log(`Fetching price for ${ticker} from Yahoo Finance...`);
    return (Math.random() * 100 + 100).toFixed(2);
  }
}

export default YahooFinanceData;