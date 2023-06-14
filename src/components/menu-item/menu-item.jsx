import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import "./menu-item.scss";

export const MenuItem = ({ id, title, size, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  const match = useMatch("");
  //   console.log(match);

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div
        className="content"
        onClick={() => navigate(`${match.pathname}${linkUrl}`)}
      >
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
