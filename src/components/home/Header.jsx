import React from "react";
import "./Home.css";
import {
  FaPhoneAlt,
  FaMap,
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <p>
          <FaPhoneAlt className="header__icon" />
          (678) 345-3456
        </p>
        <p>
          <FaMap className="header__icon" />
          380 Albert St, Melbourne, Australia
        </p>
        <p>
          <FaRegEnvelope className="header__icon" />
          envato@gmail.com
        </p>
        <div className="social">
          <a href="#">
            <FaFacebookF className="social__icons" />
          </a>
          <a href="#">
            <FaTwitter className="social__icons" />
          </a>
          <a href="#">
            <FaWhatsapp className="social__icons" />
          </a>
          <a href="http://">
            <FaLinkedinIn className="social__icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
