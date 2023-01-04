import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
  let activeStyle = {
    borderBottom: "3px solid #7114EF",
  };

  let activeClassName = "underline";

  return (
    <div className="navigation-container">
      <div className="logo">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
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
