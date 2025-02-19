import { describe, test, beforeEach, expect } from "@jest/globals";
import Portfolio from "../src/models/Portfolio.js";

describe("Portfolio Class", () => {
  let portfolio;

  beforeEach(() => {
    portfolio = new Portfolio();
  });

  test("Portfolio should start with empty stocks", () => {
    expect(portfolio.stocks.length).toBe(0);
  });

  test("Adding a transaction should increase stock count", () => {
    portfolio.addTransaction({
      tickerSymbol: "TSLA",
      quantity: 3,
      purchasePrice: 800,
      platform: "E-Trade",
    });

    expect(portfolio.stocks.length).toBe(1);
    expect(portfolio.stocks[0].tickerSymbol).toBe("TSLA");
  });

  test("Portfolio calculations should update correctly", () => {
    portfolio.addTransaction({
      tickerSymbol: "MSFT",
      quantity: 2,
      purchasePrice: 300,
      platform: "Fidelity",
    });

    portfolio.calculateTotalInvested();
    expect(portfolio.totalInvestedAmount).toBe(600);
  });
});