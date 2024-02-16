import React, { useContext, useEffect, useState } from "react";
import FinnHub from "../api/FinnHub";
import { WatchListContext } from "../context/watchListContext";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { addStock } = useContext(WatchListContext);

  const renderDropdown = () => {
    const dropDownClass = search ? "show" : null;
    return (
      <ul
        style={{
          height: "500px",
          overflowY: "scrool",
          overflowX: "hidden",
          cursor: "pointer",
        }}
        className={`dropdown-menu ${dropDownClass}`}
      >
        {results.map((result) => {
          return (
            <li
              onClick={() => {
                addStock(result.symbol);
                setSearch("");
              }}
              key={result.symbol}
              className="dropdown-item"
            >
              {result.description}({result.symbol})
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await FinnHub.get("/search", {
          params: {
            q: search,
          },
        });
        if (isMounted) {
          setResults(response.data.result);
        }
      } catch (error) {}
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
    return () => (isMounted = false);
  }, [search]);
  return (
    <>
      <div className="w-50 p-5 rounded mx-auto">
        <div className="form-floating dropdown">
          <input
            style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
            id="search"
            className="form-control"
            placeholder="Search"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="search">Search</label>
          {renderDropdown()}
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
