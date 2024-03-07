import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  const InstagramshareUrl = "https://www.instagram.com/__.nandan._/";
  const WhatsappshareUrl = "https://www.wa.me/message/ZVF42H52WELOI1";
  const TwittershareUrl = "https://twitter.com/nandan0503";
  const LinkedinshareUrl = "https://www.linkedin.com/in";

  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container primary-heading">o2chevalier</div>
        <div className="footer-icons">
          <FacebookShareButton
            url={InstagramshareUrl}
            title="Share on Facebook"
            hashtag={"#o2chevalier #sustainability #carboncredits"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={WhatsappshareUrl}
            title="Share through Whatsapp"
            hashtag={"#o2chevalier #sustainability #carboncredits"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton
            url={TwittershareUrl}
            title="Share on Twitter"
            hashtag={"#o2chevalier #sustainability #carboncredits"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={LinkedinshareUrl}
            title="Share on Linkedin"
            hashtag={"#o2chevalier #sustainability #carboncredits"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>
            <a
              href="https://osgogpsgtn0.typeform.com/to/u8as9Bio"
              target={"_blank"}
              rel = {"noreferrer"}
            >
              Help
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in">Share</a>
          </span>
          <span>
            <a
              href="https://osgogpsgtn0.typeform.com/to/u8as9Bio"
              target={"_blank"}
              rel = {"noreferrer"}
            >
              Submit a Testimonial
            </a>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>+44 7553875147</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
