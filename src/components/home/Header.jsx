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
        <div>
          <FaPhoneAlt className="header__icon" />
          (678) 345-3456
        </div>
        <div>
          <FaMap className="header__icon" />
          380 Albert St, Melbourne, Australia
        </div>
        <div>
          <FaRegEnvelope className="header__icon" />
          envato@mail.com
        </div>
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
          <a href="#">
            <FaLinkedinIn className="social__icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
