import React, { useContext, useEffect, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import FinnHub from "../api/FinnHub";
import { WatchListContext } from "../context/watchListContext";
import { useNavigate } from "react-router-dom";

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const { watchList } = useContext(WatchListContext);
  const navigate = useNavigate();

  const changeColor = (change) => {
    return change > 0 ? "success" : "danger";
  };

  const renderIcon = (change) => {
    return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responses = [];
      try {
        const responses = await Promise.all(
          watchList.map((stocks) => {
            return FinnHub.get("/quote", {
              params: {
                symbol: stocks,
              },
            });
          })
        );
        console.log(responses);
        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol,
          };
        });
        console.log(data);
        if (isMounted) {
          setStocks(data);
        }
      } catch (error) {}
    };
    fetchData();
    return () => (isMounted = false);
  }, [watchList]);

  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`);
  };

  return (
    <>
      <table className="table hover mt-5">
        <thead style={{ color: "rgb(79, 89, 102)" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleStockSelect(stock.symbol)}
                className="table-row"
                key={stock.symbol}
              >
                <th scope="row">{stock.symbol}</th>
                <td>{stock.data.c}</td>
                <td className={`text-${changeColor(stock.data.d)}`}>
                  {stock.data.d} {renderIcon(stock.data.d)}
                </td>
                <td className={`text-${changeColor(stock.data.dp)}`}>
                  {stock.data.dp} {renderIcon(stock.data.dp)}
                </td>
                <td>{stock.data.h}</td>
                <td>{stock.data.l}</td>
                <td>{stock.data.o}</td>
                <td>{stock.data.pc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StockList;
