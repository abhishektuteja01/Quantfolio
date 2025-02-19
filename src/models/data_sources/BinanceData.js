// file: BinanceData.js
import MarketData from "../MarketData.js";

class BinanceData extends MarketData {
  /**
   * @param {string} cryptoPair - The cryptocurrency pair (e.g., "BTC/USD").
   */
  constructor(cryptoPair) {
    // We'll treat cryptoPair as the "tickerSymbol" in the parent
    super(cryptoPair);
    this.cryptoPair = cryptoPair;
  }

  /**
   * Fetch crypto price (override the base class method).
   * @returns {number} Fake crypto price data.
   */
  fetchPrice() {
    console.log(`Fetching price for ${this.cryptoPair} from Binance...`);
    // Simulate fetching
    this.currentPrice = (Math.random() * 50000 + 1000).toFixed(2);
    this.lastUpdated = new Date().toISOString();
    return this.currentPrice;
  }
}

export default BinanceData;