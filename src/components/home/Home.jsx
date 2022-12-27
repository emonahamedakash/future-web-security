import React from "react";
import "./Home.css";
import Banner1 from "../../assets/banner1.jpg";
import { FaPencilRuler, FaRegThumbsUp } from "react-icons/fa";
import About from "../../assets/home-about.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={Banner1} alt="banner1" />
      </div>
      <div className="home-service">
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
          <h2>Choose the best IT service company</h2>
          <p>
            An IT firm or MSP who keeps your IT running smoothly at all times is
            like a plumber who fixes your pipes; that’s what they are supposed
            to do. Many IT firms struggle.
          </p>
          <hr />
          <p>
            <FaRegThumbsUp />
            Moneyback Gurentee
          </p>
          <p>
            <FaRegThumbsUp />
            Technical Support
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
