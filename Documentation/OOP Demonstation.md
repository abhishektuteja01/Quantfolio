# **Object-Oriented Programming Demonstration in Quantfolio**

## **1. OOP Pillars**
### **1.1 Abstraction**
**Definition:** Hiding complex implementation details and exposing only necessary parts.

#### **Example in Quantfolio (MarketData Class)**
```javascript
class MarketData {
  constructor(tickerSymbol) {
    this.tickerSymbol = tickerSymbol;
    this.currentPrice = 0;
  }

  fetchPrice() {
    // Simulated API call
    this.currentPrice = (Math.random() * 100 + 100).toFixed(2);
    return this.currentPrice;
  }
}
```
**Explanation:** The user doesn’t need to know how prices are fetched; they only interact with `fetchPrice()`.

#### **Breaking Abstraction (Bad Example)**
```javascript
class MarketData {
  constructor(tickerSymbol) {
    this.tickerSymbol = tickerSymbol;
  }

  fetchPriceFromAPI() {
    console.log("Connecting to API, sending request headers, parsing JSON...");
  }
}
```
**Issue:** The user is exposed to implementation details.

---

### **1.2 Encapsulation**
**Definition:** Restricting direct access to certain components.

#### **Example in Quantfolio (Stock Class with Private Fields)**
```javascript
class Stock {
  #currentPrice;
  
  constructor(ticker, purchasePrice) {
    this.ticker = ticker;
    this.purchasePrice = purchasePrice;
    this.#currentPrice = purchasePrice;
  }

  updatePrice(newPrice) {
    this.#currentPrice = newPrice;
  }

  getPrice() {
    return this.#currentPrice;
  }
}
```
**Explanation:** `#currentPrice` is a private property and can only be modified via `updatePrice()`.

#### **Breaking Encapsulation (Bad Example)**
```javascript
class Stock {
  constructor(ticker, purchasePrice) {
    this.ticker = ticker;
    this.purchasePrice = purchasePrice;
    this.currentPrice = purchasePrice; // Public field
  }
}

let stock = new Stock("AAPL", 150);
stock.currentPrice = -500; // Direct modification possible (bad practice)
```
**Issue:** The `currentPrice` is publicly accessible and can be set to invalid values.

---

### **1.3 Inheritance**
**Definition:** Creating a new class from an existing class.

#### **Example in Quantfolio (MarketData as a Parent Class)**
```javascript
class MarketData {
  constructor(ticker) {
    this.ticker = ticker;
  }

  fetchPrice() {
    return "Fetching price...";
  }
}

class YahooFinanceData extends MarketData {
  fetchPrice() {
    return `Fetching price for ${this.ticker} from Yahoo Finance...`;
  }
}
```
**Explanation:** `YahooFinanceData` inherits from `MarketData` and overrides `fetchPrice()`.

#### **Breaking Inheritance (Bad Example)**
```javascript
class YahooFinanceData {
  constructor(ticker) {
    this.ticker = ticker;
  }

  fetchPrice() {
    return `Fetching Yahoo Finance data for ${this.ticker}`;
  }
}
```
**Issue:** No reuse of `MarketData`, leading to code duplication.

---

### **1.4 Polymorphism**
**Definition:** Allowing different classes to be treated as the same type.

#### **Example in Quantfolio (Different Market Data Providers)**
```javascript
class MarketData {
  fetchPrice() {
    return "Fetching generic price...";
  }
}

class AlphaVantageData extends MarketData {
  fetchPrice() {
    return "Fetching from Alpha Vantage...";
  }
}

class BinanceData extends MarketData {
  fetchPrice() {
    return "Fetching from Binance...";
  }
}

const sources = [new AlphaVantageData(), new BinanceData()];
sources.forEach(source => console.log(source.fetchPrice()));
```
**Explanation:** Different data sources can be used interchangeably.

#### **Breaking Polymorphism (Bad Example)**
```javascript
function getPrice(source) {
  if (source === "Yahoo") {
    return "Fetching from Yahoo...";
  } else if (source === "AlphaVantage") {
    return "Fetching from Alpha Vantage...";
  }
}
```
**Issue:** Using conditional statements instead of polymorphism makes code inflexible.

---

## **2. SOLID Principles**
### **2.1 Single Responsibility Principle (SRP)**
**Example:** Portfolio Class Handling Only Portfolio Logic
```javascript
class Portfolio {
  addStock(stock) { /* Adds stock */ }
  calculateReturns() { /* Calculates returns */ }
}
```
**Breaking SRP (Bad Example)**
```javascript
class Portfolio {
  sendEmailNotification() { /* Handles notifications (not its responsibility) */ }
}
```

### **2.2 Open-Closed Principle (OCP)**
**Example:** MarketData Can Be Extended Without Modification
```javascript
class MarketData {
  fetchPrice() {
    return "Fetching generic price...";
  }
}
```
**Breaking OCP (Bad Example)**
```javascript
class MarketData {
  fetchPrice(source) {
    if (source === "Yahoo") return "Yahoo price...";
  }
}
```
### **2.3 Liskov Substitution Principle (LSP)**
**Example:** All fetchers like AlphaVantageData, BinanceData, and YahooFinanceData can be used interchangeably where a .fetchPrice() is expected:
```javascript
// Any fetcher with a .fetchPrice() returning a number is valid
function displayPrice(dataFetcher) {
  const price = dataFetcher.fetchPrice();
  console.log("Price:", price);
}

displayPrice(new AlphaVantageData("API_KEY", "AAPL"));
displayPrice(new BinanceData("BTC/USD"));
displayPrice(new YahooFinanceData("GOOGL"));
// The code works for all, substituting them in any place expecting .fetchPrice().
```
**Breaking SRP (Bad Example)**
```javascript
// If BinanceData returned a string or an object instead of a numeric-like value:
class BinanceData {
  fetchPrice() {
    return { price: "some string" }; // breaks the expected numeric return
  }
}
// Now code that expects a number could break or behave incorrectly.
```

### **2.4 Interface Segregation Principle (ISP)**
**Example:** Each data fetcher only implements fetchPrice(). We don’t force them to also implement an alert interface or portfolio logic.
```javascript
// We keep fetchPrice() minimal for data fetchers.
// No single huge interface that includes fetchPrice + alert + portfolio updates.
```
**Breaking SRP (Bad Example)**
```javascript
// BAD: A big interface with many unrelated methods
class IDataService {
  fetchPrice() {}
  sendAlert() {}
  updatePortfolio() {}
  // ...
}

// Then every data fetcher must implement methods it doesn't need, e.g., sendAlert().
```

### **2.5 Dependency Inversion Principle (DIP)**
**Example:** High-level modules should depend on abstractions, not concrete implementations.
```javascript
// file: MarketDataService.js
class MarketDataService {
  constructor(fetcher) {
    this.fetcher = fetcher; // an abstraction: just something with .fetchPrice()
  }

  getPrice() {
    return this.fetcher.fetchPrice();
  }
}

// We can pass in any fetcher instance without changing MarketDataService
```
**Breaking SRP (Bad Example)**
```javascript
// BAD: Directly creating a specific fetcher inside the service
class MarketDataService {
  constructor() {
    this.alphaVantage = new AlphaVantageData("HARDCODED_KEY");
  }
  getPrice(ticker) {
    return this.alphaVantage.fetchPrice(ticker);
  }
}
```
---

## **3. Design Patterns Used in Quantfolio**
### **3.1 Singleton Pattern**
**Example:** Ensuring only one instance of MarketDataManager exists.
```javascript
class MarketDataManager {
  static instance;
  constructor() {
    if (!MarketDataManager.instance) {
      MarketDataManager.instance = this;
    }
    return MarketDataManager.instance;
  }
}
```
**Benefit:** Prevents multiple instances from being created.

---

### **3.2 Factory Pattern**
**Example:** Creating different MarketData objects based on the API provider.
```javascript
class MarketDataFactory {
  static createDataProvider(type) {
    if (type === "Yahoo") return new YahooFinanceData();
    if (type === "AlphaVantage") return new AlphaVantageData();
    throw new Error("Invalid provider type");
  }
}
```
**Benefit:** Encapsulates object creation logic.

---

### **3.3 Observer Pattern**
**Example:** AlertSystem observing stock price changes.
```javascript
class AlertSystem {
  constructor(stock) {
    this.stock = stock;
    this.subscribers = [];
  }
  subscribe(observer) {
    this.subscribers.push(observer);
  }
  notify() {
    this.subscribers.forEach(sub => sub.update(this.stock));
  }
}
```
**Benefit:** Decouples alert logic from stock management.

---

