import React from "react";
import Determine from "../Assets/determine.jpg";
import Deduce from "../Assets/choose-image.jpg";
import Decarbonnize from "../Assets/decarbonize.jpeg";

const Work = () => {
  const workInfoData = [
    {
      image: Deduce,
      title: "Deduce",
      text: "Deduce the volume of CO2 produced, that gives you the volume of O2 to be reintroduced",
    },
    {
      image: Determine,
      title: "Determine",
      text: "Determine the type of trees to plant, amount of land available, density of trees in the land, etc",
    },
    {
      image: Decarbonnize,
      title: "Decarbonize",
      text: "Effectuate the process of decarbonization by finding the most efficient strategy to cleanse the planet",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The basic steps involve identifying the volume of oxygen required to
          neutralize and finding the density, type and number of trees per acre
          of land to be planted before actually executing a decarbonization
          process.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
