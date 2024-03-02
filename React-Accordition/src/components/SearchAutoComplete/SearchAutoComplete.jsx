import React, { useEffect, useState } from "react";
import Suggesstions from "./Suggesstions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e) => {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilterUsers([]);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filterUsers);

  return (
    <>
      <div className="search-autocomplete-container">
        {loading ? (
          <h1>Loading Data! Please Wait</h1>
        ) : (
          <input
            value={searchParam}
            type="text"
            name="search-users"
            placeholder="Search User Here..."
            onChange={handleChange}
          />
        )}
        {showDropdown && (
          <Suggesstions handleClick={handleClick} data={filterUsers} />
        )}
      </div>
    </>
  );
};

export default SearchAutoComplete;
