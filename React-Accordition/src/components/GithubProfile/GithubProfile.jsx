import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./GithubProfile.css";

const GithubProfile = () => {
  const [username, setUsername] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading Data ! Please Wait</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="github-profile-container">
          <div className="input-wrapper">
            <input
              type="text"
              name="search-by-username"
              placeholder="Search Github Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={handleSubmit}>Search</button>
          </div>
          {userData !== null ? <Card user={userData} /> : null}
        </div>
      </div>
    </>
  );
};

export default GithubProfile;
