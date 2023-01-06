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
          +8801618253629
        </p>
        <p>
          <FaMap className="header__icon" />
          North Jatrabari, Dhaka-1208
        </p>
        <p>
          <FaRegEnvelope className="header__icon" />
          futurewebs279@gmail.com
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
