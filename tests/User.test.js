import { describe, test, beforeEach, expect } from "@jest/globals";
import User from "../src/models/User.js";
import Portfolio from "../src/models/Portfolio.js";

describe("User Class", () => {
  let user;

  beforeEach(() => {
    user = new User("John Doe", "john@example.com");
  });

  test("User should have a name and email", () => {
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john@example.com");
  });

  test("User should have an empty portfolio initially", () => {
    expect(user.portfolio).toBeInstanceOf(Portfolio);
    expect(user.portfolio.stocks.length).toBe(0);
  });

  test("User should log transactions correctly", () => {
    user.logTransaction({
      tickerSymbol: "AAPL",
      quantity: 5,
      purchasePrice: 150,
      platform: "Robinhood",
    });

    expect(user.portfolio.stocks.length).toBe(1);
    expect(user.portfolio.stocks[0].tickerSymbol).toBe("AAPL");
  });
});