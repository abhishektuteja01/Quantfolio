# Quantfolio

## Project Overview
Quantfolio is a multi-asset portfolio tracker that helps users record transactions, monitor returns, and receive alerts when stocks reach target prices. It simplifies investment management across multiple trading platforms, allowing investors to track stocks efficiently without the need for spreadsheets or manual calculations.

## Features
- Record stock transactions with details such as ticker symbol, quantity, purchase price, target price, and platform
- View portfolio summary including total investment, current value, and percentage return
- Manually update stock prices or fetch data from an external API
- Automatically calculate Profit/Loss (PnL) and percentage return
- Receive alerts when a stock hits its predefined target price
- Track investments across different brokers

## System Design

### Class Structure
- **User** – Represents an investor with a portfolio  
- **Portfolio** – Contains multiple stocks and calculates overall returns  
- **Stock** – Stores stock details such as symbol, price, and platform  
- **Transaction** – Records buy/sell history for each stock  
- **MarketData** – Fetches stock prices manually or from an API  
- **AlertSystem** – Notifies users when a stock reaches its target price  

### Market Data Inheritance
- **MarketData** (Parent Class)  
  - **AlphaVantageData** – Fetches stock prices using an API key  
  - **YahooFinanceData** – Uses custom request headers to retrieve stock prices  
  - **BinanceData** – Handles crypto trading pairs for cryptocurrency tracking  

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/abhishektuteja01/Quantfolio.git
cd quantfolio
```
### Install Dependencies
```sh
npm install
```
### Run the 
```sh
node main.js
```

## UML Class Diagram
Refer to the UML Class Diagram to understand the relationships between classes.

[View UML Diagram](https://lucid.app/lucidchart/16bc7473-af57-46ec-b41c-c10c5486f76a/edit?viewport_loc=-1089%2C-538%2C3536%2C2382%2C0_0&invitationId=inv_cafb7dbb-7689-4847-8fa8-656b5cb863ab)

## License
This project is licensed under the MIT License.
