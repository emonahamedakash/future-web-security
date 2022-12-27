import React from "react";
import "./Home.css";
import ScrollToTop from "react-scroll-to-top";

import Bg from "../../assets/bg-footer.jpg";
import Logo from "../../assets/logo.png";
import g1 from "../../assets/gallery1.jpg";
import g2 from "../../assets/gallery2.jpg";
import g3 from "../../assets/gallery3.jpg";
import g4 from "../../assets/gallery4.jpg";
import g5 from "../../assets/gallery5.jpg";
import g6 from "../../assets/gallery6.jpg";
import { FaRegPaperPlane, FaLocationArrow, FaPhone } from "react-icons/fa";

const Footer = () => {
  const galleryPictures = [g1, g2, g3, g4, g5, g6];

  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "repeat" }}
    >
      <div className="footer-row">
        <div className="footer-about">
          <img src={Logo} alt="logo" style={{ width: "150px" }} />
          <br />
          <br />
          <p>
            We work with a passion of taking challenges and creating new ones in
            advertising sector.
          </p>
          <button>About Us</button>
        </div>
        <div className="news-letter">
          <h3>News letter</h3>
          <p>Subscribe our newsletter to get our latest update & news.</p>
          <div className="news-letter-input">
            <input type="email" name="newsletter" />
            <div>
              <button>
                <FaRegPaperPlane />
              </button>
            </div>
          </div>
        </div>
        <div className="official-info">
          <h3>Official Info</h3>
          <p>
            <FaLocationArrow />
            <>&nbsp;</> 30 Commercial Road Fratton, Australia
          </p>
          <p>
            <FaPhone />
            <>&nbsp;</>
            1-888-452-1505
          </p>
        </div>
        <div className="gallery">
          <h3>Gallery</h3>
          <div className="pictures">
            {galleryPictures.length === 0 ? (
              <p>No image found in Gallery</p>
            ) : (
              galleryPictures.map((gallery, i) => {
                return <img src={gallery} key={i} alt="Gallery Pic" />;
              })
            )}
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2022 All rights reserved By FutureWebSecurity.
      </p>
      <ScrollToTop
        height="15"
        width="15"
        color="white"
        style={{
          backgroundColor: "#6224F0",
          borderRadius: "0",
        }}
      />
    </div>
  );
};

export default Footer;
