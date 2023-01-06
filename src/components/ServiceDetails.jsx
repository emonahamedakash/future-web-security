import React from "react";
import "./ServiceDetails.css";
import headerImg from "../assets/services/service2-800x570.jpg";
import banner from "../assets/services/theme4.jpg";

const ServiceDetails = () => {
  return (
    <div className="service-details-container container">
      <div className="service-details">
        <img
          src={headerImg}
          alt="header image"
          className="mx-auto d-block m-4 rounded"
        />
        <h1>Web Design</h1>
        <p>
          With over a decade of experience, we’ve established ourselves as one
          of the pioneering agencies in the region. Our small, flexible, agile
          and design-led structures and processes allow us to be highly
          responsive and innovative. We’re made of passionate leaders,
          strategists, managers, developers, animators and designers who work
          together under one umbrella. We are a digitally-led, full-service
          creative agency. We combine strategy, marketing, design.
        </p>
        <div className="why">
          <div>
            <h4>Why It soft?</h4>
            <p>We're making room for self care today with plan.</p>
          </div>
          <div>
            <h4>Unlimited support</h4>
            <p>New range coming in on a weekly basis veg section.</p>
          </div>
        </div>
        <div className="tag">
          <img src={banner} alt="banner" />
          <div>
            <h4>We serve the best work</h4>
            <p>
              By initiating your project with Fingent, you get a dedicated and
              skilled team backing you up round-the-clock. All our processes are
              the customer oriented, designed to reduce the cost of business
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
