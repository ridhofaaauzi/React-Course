import React, { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  const addStock = (stocks) => {
    if (watchList.indexOf(stocks) === -1) {
      setWatchList([...watchList, stocks]);
    }
  };

  const deleteStock = (stocks) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== stocks;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
