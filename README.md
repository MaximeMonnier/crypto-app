# Crypto Watch Tower

The cryptographic watchtower is a web application where you can follow the cryptographic market every day and see the different market variations day by day.

![Alt text](<Capture d’écran (249).png>)

## Live Demo

A live demo is available here https://build-app-movie.vercel.app/

## How to use

Clone the repo https://github.com/MaximeMonnier/crypto-app.git

In you file with bash made npm install to install all the packages,

To watch the project npm start,

Market data : `https://api.coingecko.com/api/v3/global`

All coins data : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`

Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`
