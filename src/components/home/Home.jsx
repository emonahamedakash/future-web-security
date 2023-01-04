import React from "react";
import "./Home.css";
import "../Utility.css";
import Banner1 from "../../assets/banner1.jpg";
import bgServices from "../../assets/h2-bg-section-02.jpg";
import whyChoose from "../../assets/why-choose-banner.jpg";
import showcase from "../../assets/h2-bg-section-05.jpg";
import pricing from "../../assets/h2-bg-section-06.jpg";

import {
  FaPencilRuler,
  FaRegThumbsUp,
  FaInternetExplorer,
  FaCheck,
} from "react-icons/fa";
import About from "../../assets/home-about.jpg";
const Home = () => {
  const services = [
    {
      icon: <FaInternetExplorer />,
      title: "UI/UX Design",
      summery:
        "We’re wildly passionate about our purpose, and it has us transforming everything.",
    },
    {
      icon: <FaInternetExplorer />,
      title: "Business Planning",
      summery:
        "Our customers get solutions and business opportunities instead of just projects.",
    },
    {
      icon: <FaInternetExplorer />,
      title: "Cyber Security",
      summery:
        "We know our people are our greatest asset, and we are putting our money.",
    },
    {
      icon: <FaInternetExplorer />,
      title: "Cyber Security",
      summery:
        "We know our people are our greatest asset, and we are putting our money.",
    },
    {
      icon: <FaInternetExplorer />,
      title: "Cyber Security",
      summery:
        "We know our people are our greatest asset, and we are putting our money.",
    },
  ];
  const pricing = [
    {
      title: "Basic Plan",
      description:
        "Our purpose is to build solutions that remove barriers preventing people.",
      price: "$29 / monthly",
      support: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
    },
    {
      title: "Standard Plan",
      description:
        "We encourage every team member to be a whole person. We have a flexible.",
      price: "$49/ monthly",
      support: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
    },
    {
      title: "Extended Plan",
      description:
        "What separates theme from all other web design agencies is the ability to offer.",
      price: "$59 / monthly",
      support: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
      ],
    },
  ];
  return (
    <div className="home-container">
      <div className="banner">
        <img src={Banner1} alt="banner1" />
      </div>
      <div className="home-service-card">
        <div>
          <FaPencilRuler />
          <p>UI/UX DESIGN SERVICES</p>
        </div>
        <div>
          <FaPencilRuler />
          <p>UI/UX DESIGN SERVICES</p>
        </div>
        <div>
          <FaPencilRuler />
          <p>UI/UX DESIGN SERVICES</p>
        </div>
        <div>
          <FaPencilRuler />
          <p>UI/UX DESIGN SERVICES</p>
        </div>
        <div>
          <FaPencilRuler />
          <p>UI/UX DESIGN SERVICES</p>
        </div>
      </div>
      <div className="home-about">
        <div className="home-about-image">
          <img src={About} alt="about-banner" />
        </div>
        <div className="home-about-text">
          <p className="sub-heading">About Our Company</p>
          <p className="section-heading mt-3 text-start">
            Choose <span className="text-primary">The Best</span> IT Service
            Company
          </p>
          <p>
            An IT firm or MSP who keeps your IT running smoothly at all times is
            like a plumber who fixes your pipes; that’s what they are supposed
            to do. Many IT firms struggle.
          </p>
          <div className="d-flex justify-content-evenly text-primary border-top border-bottom p-3 mt-5">
            <p>
              <FaRegThumbsUp />
              <>&nbsp;</>
              Moneyback Gurentee
            </p>
            <p>
              <FaRegThumbsUp />
              <>&nbsp;</>
              Technical Support
            </p>
          </div>
        </div>
      </div>
      <div
        className="home-services"
        style={{
          backgroundImage: `url(${bgServices})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="pt-5 pb-3">
          <p
            className="sub-heading"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Our Awesome Services
          </p>
        </div>
        <p className="section-heading pb-3">
          We Are <span className="text-primary">Dedicated</span> To Serve You
          All Time.
        </p>
        <div className="services-card-list">
          {services.map((service, i) => {
            const { icon, title, summery } = service;
            return (
              <div className="services-card">
                <div className="icon rounded-circle d-flex justify-content-center align-items-center">
                  {icon}
                </div>
                <p className="title">{title}</p>
                <p className="text-middle p-2">{summery}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="why-choose-us">
        <div className="pt-5 pb-3">
          <p
            className="sub-heading"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Why Choose Us
          </p>
        </div>
        <p className="section-heading">
          We Serve A Wide <span className="text-primary">Variety</span> Of
          Industries
        </p>
        <div className="d-flex justify-content-between">
          <div style={{ width: "40%" }}>
            <img src={whyChoose} alt="banner" />
          </div>
          <div style={{ width: "40%" }}>
            <p style={{ fontSize: "38px", fontWeight: "bolder" }}>
              Fingent’s Four Pillars Of Influence
            </p>
            <p style={{ fontSize: "16px" }}>
              We believe in four pillars of influence that drive our growth.
              This is ingrained in everything we do We use technology to create
              a better and smarter environment.
            </p>
          </div>
        </div>
      </div>
      <div
        className="showcase mx-auto"
        style={{
          backgroundImage: `url(${showcase})`,
        }}
      >
        <h3>We develops strategic software solutions for businesses.</h3>
        <div className="counters">
          <div>
            <h1>2003</h1>
            <p>Year of establishment</p>
          </div>
          <div>
            <h1>2,5k+</h1>
            <p>Of customers worldwide</p>
          </div>
          <div>
            <h1>14k</h1>
            <p>Countries with active client base</p>
          </div>
          <div>
            <h1>4 .9/5</h1>
            <p>Customer Rating</p>
          </div>
        </div>
        <p>
          You have better things to do than worry about IT for your small
          business. Let’s Discuss about Project.
        </p>
      </div>
      <div
        className="pricing-plan"
        style={{
          backgroundImage: `url(${pricing})`,
          backgroundRepeat: "repeat",
        }}
      >
        <p
          className="sub-heading"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          Pricing Plan
        </p>
        <p className="section-heading mt-3 mb-3">
          Our <span className="text-primary">Awesome</span> Pricing Plans
        </p>
        <div className="pricing-card-list">
          {pricing.map((e, i) => {
            const { title, description, price, support } = e;
            return (
              <div className="pricing-card" key={i}>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                <h3>{price}</h3>
                <div className="pricing-card-bottom">
                  <ul>
                    {support.map((s, index) => {
                      return (
                        <li key={index}>
                          <FaCheck />
                          <>&nbsp;</>
                          <>&nbsp;</>
                          {s}
                        </li>
                      );
                    })}
                  </ul>
                  <button className="button-1 w-100">Get Free Trial</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
