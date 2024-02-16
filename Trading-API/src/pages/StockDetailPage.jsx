import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FinnHub from "../api/FinnHub";

const StockDetailPage = () => {
  const { symbol } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const date = new Date();
  //     const currentTime = Math.floor(date.getTime() / 1000);
  //     const oneDay = currentTime - 24 * 60 * 60;
  //     const response = await FinnHub.get("/stock/candle", {
  //       params: {
  //         symbol,
  //         from: oneDay,
  //         to: currentTime,
  //         resolution: 30,
  //       },
  //     });
  //     console.log(response);
  //   };
  //   fetchData();
  // }, []);

  return <>Stock Detail Page - {symbol}</>;
};

export default StockDetailPage;
