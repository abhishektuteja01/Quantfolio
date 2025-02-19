// file: AlphaVantageData.js
import MarketData from "../MarketData.js";

class AlphaVantageData extends MarketData {
  /**
   * @param {string} apiKey - The Alpha Vantage API key.
   * @param {string} tickerSymbol - The stock ticker symbol.
   */
  constructor(apiKey, tickerSymbol) {
    // Pass the ticker symbol up to the parent constructor
    super(tickerSymbol);
    this.apiKey = apiKey;
  }

  /**
   * Fetch stock price (override the base class method).
   * @returns {number} Fake price data.
   */
  fetchPrice() {
    console.log(`Fetching price for ${this.tickerSymbol} from Alpha Vantage with API key: ${this.apiKey}`);
    // Simulate fetching
    this.currentPrice = (Math.random() * 100 + 100).toFixed(2);
    this.lastUpdated = new Date().toISOString();
    return this.currentPrice;
  }
}

export default AlphaVantageData;