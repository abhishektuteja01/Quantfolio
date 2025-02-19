// file: YahooFinanceData.js
import MarketData from "../MarketData.js";

class YahooFinanceData extends MarketData {
  /**
   * @param {string} tickerSymbol - The stock ticker symbol.
   */
  constructor(tickerSymbol) {
    super(tickerSymbol);
    this.requestHeaders = { "User-Agent": "Quantfolio" };
  }

  /**
   * Fetches stock price from Yahoo Finance (override the base class method).
   * @returns {number} Fake price data.
   */
  fetchPrice() {
    console.log(`Fetching price for ${this.tickerSymbol} from Yahoo Finance...`);
    // Simulate fetching
    this.currentPrice = (Math.random() * 100 + 100).toFixed(2);
    this.lastUpdated = new Date().toISOString();
    return this.currentPrice;
  }
}

export default YahooFinanceData;