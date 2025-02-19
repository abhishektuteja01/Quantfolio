/**
 * @file AlertSystem.js
 * @description Monitors stock prices and sends alerts when target price is reached.
 */

class AlertSystem {
  /**
   * Creates an alert for a stock.
   * @param {object} stock - The stock being monitored.
   * @param {number} targetPrice - The target price for alert.
   */
  constructor(stock, targetPrice) {
    this.stock = stock;
    this.targetPrice = targetPrice;
    this.alertTriggered = false;
  }

  /**
   * Checks if the stock has reached the target price.
   * @returns {boolean} True if target price is met.
   */
  checkAlert() {
    if (this.stock.currentPrice >= this.targetPrice) {
      this.alertTriggered = true;
      this.sendNotification();
      return true;
    }
    return false;
  }

  /**
   * Sends a simple notification.
   */
  sendNotification() {
    console.log(
      `ALERT: ${this.stock.tickerSymbol} has reached the target price of ${this.targetPrice}`
    );
  }
}

export default AlertSystem;