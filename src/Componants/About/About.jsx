import React from "react";
import './About.css'
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ullam
          eveniet consectetur dolorum tempora velit facere voluptate eum veniam
          laboriosam odio, iste sapiente ipsam illum earum? Totam quam
          voluptatibus eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ullam
          eveniet consectetur dolorum tempora velit facere voluptate eum veniam
          laboriosam odio, iste sapiente ipsam illum earum? Totam quam
          voluptatibus eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ullam
          eveniet consectetur dolorum tempora velit facere voluptate eum veniam
          laboriosam odio, iste sapiente ipsam illum earum? Totam quam
          voluptatibus eaque?
        </p>
      </div>
    </div>
  );
};

export default About;
