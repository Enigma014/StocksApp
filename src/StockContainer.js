import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks = [], onStockClick }) {
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onStockClick} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockList.length > 0 ? stockList : <p>No stocks available</p>}
    </div>
  );
}

export default StockContainer;
