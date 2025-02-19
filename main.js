import User from "./src/models/User.js";
import MarketData from "./src/models/MarketData.js";
import AlertSystem from "./src/models/AlertSystem.js";

console.log("🚀 Welcome to Quantfolio!");

// Create a new user
const user = new User("John Doe", "john@example.com");

// Log a stock transaction
user.logTransaction({
  tickerSymbol: "AAPL",
  quantity: 10,
  purchasePrice: 150,
  platform: "Robinhood",
});

// Display portfolio summary
console.log("📊 Initial Portfolio Summary:");
console.log(user.viewPortfolio());

// Simulate fetching a stock price update
const marketData = new MarketData("AAPL");
const newPrice = marketData.fetchPrice();
user.portfolio.stocks[0].updatePrice(newPrice);

// Check if a target alert should be triggered
const alert = new AlertSystem(user.portfolio.stocks[0], 180);
alert.checkAlert();

// Display updated Portfolio Summary
console.log("📊 Updated Portfolio Summary:");
console.log(user.viewPortfolio());

console.log("✅ Quantfolio execution completed.");