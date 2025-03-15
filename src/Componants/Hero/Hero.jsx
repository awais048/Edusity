import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For Better World</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          possimus, eaque odio natus quas delectus incidunt doloremque voluptate
          deleniti nostrum, beatae provident sequi alias quaerat voluptatem
          necessitatibus ut laudantium sed.
        </p>
        <button className="btn ">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};
