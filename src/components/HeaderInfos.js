import axios from "axios";
import React, { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TablesFilters from "./TablesFilters";

const HeaderInfos = () => {
  const [HeaderData, setHeaderData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/global`).then((res) => {
      setHeaderData(res.data.data);
      console.log(HeaderData);
    });
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1>
            <img id="toto" src="./assets/logo.png" alt="logo" /> Watch tower
          </h1>
        </li>
        <li>
          crypto-monnaies :{" "}
          {HeaderData.active_cryptocurrencies &&
            HeaderData.active_cryptocurrencies.toLocaleString()}
        </li>
        <li>Marchés : {HeaderData.markets && HeaderData.markets}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Global Market Cap :
          <PercentChange
            percent={HeaderData.market_cap_change_percentage_24h_usd}
          />
        </li>
        <li>
          BTC dominance :{" "}
          {HeaderData.market_cap_percentage &&
            HeaderData.market_cap_percentage.btc.toFixed(2) + "%"}
        </li>
        <li>
          ETH dominance :{" "}
          {HeaderData.market_cap_percentage &&
            HeaderData.market_cap_percentage.eth.toFixed(2) + "%"}
        </li>
      </ul>
      <TablesFilters />
    </div>
  );
};

export default HeaderInfos;
