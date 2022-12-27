import React from "react";
import "./Home.css";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="navigation-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="search">
        <input type="search" placeholder="search here..." name="search" id="" />
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
