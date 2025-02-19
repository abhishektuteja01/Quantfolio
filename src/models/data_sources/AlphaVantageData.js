/**
 * @file AlphaVantageData.js
 * @description Fetches stock data from Alpha Vantage (simulated).
 */

class AlphaVantageData {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Fetches stock price (simulated response).
   * @param {string} ticker - The stock ticker symbol.
   * @returns {number} Fake price data.
   */
  fetchPrice(ticker) {
    console.log(`Fetching price for ${ticker} from Alpha Vantage...`);
    return (Math.random() * 100 + 100).toFixed(2);
  }
}

export default AlphaVantageData;