import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="Contact">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="email@example.com" />
        <button
          className="secondary-button"
          onClick={(e) => {
            window.location.href = "mailto: nandanpai0503@gmail.com";
            e.preventDefault();
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
