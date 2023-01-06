import React from "react";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import titleBackground from "../assets/about/bg-pagetitle.jpg";
import banner1 from "../assets/about/banner1.jpg";
import { useState } from "react";
const About = () => {
  const mission =
    " ITSoft has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.";
  const vision =
    "We have critical compliance designations, including SSAE 18 Type II and PCI, adhering to the strictest industry regulations. We train our staff on HIPAA best practices on behalf of our healthcare clients. We incorporate and maintain advanced monitoring, anti-malware, and authentication tools.";
  const value =
    "Every ITS client has a dedicated Virtual CIO who provides personalized, strategic guidance. Your vCIO understands what drives your business and recommends technology solutions to solve your unique needs. With your best interests in mind, your vCIO assists with budgeting.";
  const [tab, setTab] = useState(mission);
  return (
    <div className="about-container">
      <div
        className="page-title"
        style={{ backgroundImage: `url(${titleBackground})` }}
      >
        <h1>About</h1>
        <div>
          <span>Home</span>
          <FaAngleDoubleRight />
          <span>About</span>
        </div>
      </div>
      <div className="upper-content">
        <div className="upper-text">
          <p className="subHeading">About Us</p>
          <h1>
            Choose <span className="text-primary">The Best</span> IT Service
            Company
          </h1>
          <p></p>
          <div className="about-tabs">
            <span onClick={() => setTab(mission)}>Our Mission</span>
            <span onClick={() => setTab(vision)}>Our Vision</span>
            <span onClick={() => setTab(value)}>Our Value</span>
          </div>
          <p>{tab}</p>
        </div>
        <div className="upper-banner">
          <img src={banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
