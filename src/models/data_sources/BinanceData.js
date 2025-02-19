/**
 * @file BinanceData.js
 * @description Fetches cryptocurrency price data from Binance (simulated).
 */

class BinanceData {
  constructor(cryptoPair) {
    this.cryptoPair = cryptoPair;
  }

  /**
   * Fetches cryptocurrency price (simulated response).
   * @returns {number} Fake crypto price data.
   */
  fetchPrice() {
    console.log(`Fetching price for ${this.cryptoPair} from Binance...`);
    return (Math.random() * 50000 + 1000).toFixed(2);
  }
}

export default BinanceData;