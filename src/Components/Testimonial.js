import React from "react";
import ProfilePic from "../Assets/prof.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="Testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          See some of the feedback from the first users of this website to
          calculate their decarbonization volume.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          It's the beginning of a more sustainable world and this is a project
          in the right direction. This helps people take the first step in
          making the world a more sustainable place
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Pranav Nair</h2>
        <p>User</p>
      </div>
    </div>
  );
};

export default Testimonial;
