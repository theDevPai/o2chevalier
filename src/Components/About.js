import React from "react";
import AboutBackground from "../Assets/about-backgroundpng.png";
import AboutBackgroundImage from "../Assets/about.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="About">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Turning resources into pollution-fighting power
        </h1>
        <p className="primary-text">
          Empowering individuals with the means to strategically counteract
          impact of human-induced pollution.
        </p>
        <p className="primary-text">
          Helping in making a tangible difference against pollution.
        </p>
        <div className="about-buttons-container">
          <a
            href="https://news.climate.columbia.edu/2022/04/22/what-is-decarbonization-and-how-do-we-make-it-happen/"
            target={"_blank"}
          >
            <button className="secondary-button">Learn More</button>
          </a>
          <a href="https://youtu.be/bGzCFNUtkdU" target={"_blank"}>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
