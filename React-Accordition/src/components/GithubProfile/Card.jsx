import React from "react";
import "./GithubProfile.css";

const Card = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;

  const createdData = new Date(created_at);

  return (
    <>
      <div className="user">
        <div className="user-avatar">
          <img src={avatar_url} alt="User Avatar" className="avatar" />
        </div>
        <div className="name-container">
          <a href={`https://github.com/${login}`} target="_blank">
            {name || login}
          </a>
          <p>
            User Join on {""}{" "}
            {`${createdData.getDate()} ${createdData.toLocaleString("en-us", {
              month: "short",
            })} ${createdData.getFullYear()}`}
          </p>
        </div>
        <div className="social">
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
