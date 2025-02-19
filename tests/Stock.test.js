import { describe, test, beforeEach, expect } from "@jest/globals";
import Stock from "../src/models/Stock.js";

describe("Stock Class", () => {
  let stock;

  beforeEach(() => {
    stock = new Stock("AAPL", 10, 150, "Robinhood");
  });

  test("Stock should initialize with correct values", () => {
    expect(stock.tickerSymbol).toBe("AAPL");
    expect(stock.quantity).toBe(10);
    expect(stock.purchasePrice).toBe(150);
    expect(stock.currentPrice).toBe(150);
  });

  test("Updating stock price should modify currentPrice", () => {
    stock.updatePrice(180);
    expect(stock.currentPrice).toBe(180);
  });

  test("Calculating PnL should return correct profit/loss", () => {
    stock.updatePrice(180);
    expect(stock.calculatePnL()).toBe(300); // (180 - 150) * 10
  });

  test("Check target price alert", () => {
    stock.updatePrice(200);
    expect(stock.checkTargetPrice(180)).toBe(true);
  });
});