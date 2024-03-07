import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="#Home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Find the volume of Oxygen you're about to produce fresh.
          </h1>
          <p className="primary-text">
            You're one simple calculation away from finding how many trees
            you need to plant to make this planet more sustainable.
          </p>
          <a href="#Try-now">
            <button className="secondary-button">
              Try Now <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
