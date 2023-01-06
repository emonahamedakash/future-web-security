import React from "react";
import "./Services.css";
import { FaAngleDoubleRight, FaCode } from "react-icons/fa";
import bgServices from "../assets/services/bg-pagetitle.jpg";
import service1 from "../assets/services/service1-600x678.jpg";

const Services = () => {
  const services = [
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
    {
      image: service1,
      icon: <FaCode />,
      title: "Web Development",
    },
  ];
  return (
    <div className="services-container">
      <div
        className="page-title"
        style={{ backgroundImage: `url(${bgServices})` }}
      >
        <h1>Services</h1>
        <div>
          <span>Home</span>
          <FaAngleDoubleRight />
          <span>Services</span>
        </div>
      </div>
      <div className="heading">
        <p className="sub-heading mx-auto">Our Services</p>
        <h2>
          We provide <span className="text-primary">the necessary</span>{" "}
          services to you
        </h2>
      </div>
      <div id="service-card-list">
        {services.map((s, i) => {
          return (
            <div className="service-card" key={i}>
              <img src={s.image} alt="Service card" />
              <div className="service-card-text">
                <p>{s.icon}</p>
                <h5>{s.title}</h5>
                <button className="btn btn-warning">See Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
