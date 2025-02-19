import User from "./models/User.js";
import MarketData from "./models/MarketData.js";
import AlertSystem from "./models/AlertSystem.js";
import AlphaVantageData from "./models/data_sources/AlphaVantageData.js";
import BinanceData from "./models/data_sources/BinanceData.js";
import YahooFinanceData from "./models/data_sources/YahooFinanceData.js";

// Create a new user
const user = new User("John Doe", "john@example.com");

// Log a stock transaction
user.logTransaction({
  tickerSymbol: "AAPL",
  quantity: 10,
  purchasePrice: 150,
  platform: "Robinhood",
});

// View Portfolio Summary
user.viewPortfolio();

// Simulate fetching a stock price update
const stockMarketData = new MarketData("AAPL");
const newPrice = stockMarketData.fetchPrice();
user.portfolio.stocks[0].updatePrice(newPrice);

// Check if a target alert should be triggered
const alert = new AlertSystem(user.portfolio.stocks[0], 180);
alert.checkAlert();

// View updated Portfolio Summary
user.viewPortfolio();

// Fetch stock data from different sources
const alphaData = new AlphaVantageData("MY_API_KEY", "AAPL");
alphaData.fetchPrice(); // logs "Fetching price for AAPL from Alpha Vantage..."

const binanceData = new BinanceData("BTC/USD");
binanceData.fetchPrice(); // logs "Fetching price for BTC/USD from Binance..."

const yahooData = new YahooFinanceData("GOOGL");
yahooData.fetchPrice(); // logs "Fetching price for GOOGL from Yahoo Finance..."
