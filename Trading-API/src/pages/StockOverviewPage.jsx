import React from "react";
import StockList from "../components/StockList";
import AutoComplete from "../components/AutoComplete";

const StockOverviewPage = () => {
  return (
    <>
      <AutoComplete />
      <StockList />
    </>
  );
};

export default StockOverviewPage;
