import React from "react";
import "./Banner.css";

const Banner = ({ image, text}) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />
      <div className="banner__overlay"></div>
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  );
};

export default Banner;
