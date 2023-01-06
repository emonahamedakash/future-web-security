import React from "react";
import "./Contact.css";
import Maintenance from "./Maintenance";
import { FaAngleDoubleRight } from "react-icons/fa";

import bgTitle from "../assets/contact/bg-pagetitle.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div
        className="page-title"
        style={{ backgroundImage: `url(${bgTitle})` }}
      >
        <h1>Contact</h1>
        <div>
          <span>Home</span>
          <FaAngleDoubleRight />
          <span>Contact</span>
        </div>
      </div>
      <div className="d-flex justify-content-center container mt-5 mb-5">
        <h2>
          Grow Your Business With
          <span className="text-primary">Our Expertise</span>
        </h2>
        <p>
          We understand the importance of approaching each work integrally and
          believe in the power of simple.
        </p>
      </div>
      <div className="form-part d-flex justify-content-evenly mt-5">
        <div className="left-text">
          <div>
            <h4>Office address</h4>
            <p>
              4th floor, Ayatonnesa Vila, 1/12/3, North Jatrabari, Dhaka-1208
            </p>
          </div>
          <div>
            <h4>Phone number</h4>
            <p>+8801618253629</p>
          </div>
          <div>
            <h4>Email address</h4>
            <p>futurewebs279@gmail.com</p>
          </div>
        </div>
        <form action="post">
          <div>
            <div>
              <label htmlFor="name">Name(required)</label>

              <br />
              <input type="text" placeholder="Your name*" required />
              <br />

              <label>Phone(Optional)</label>
              <br />

              <input type="text" placeholder="Your phone" />
            </div>
            <div>
              <label htmlFor="name">Email(required)</label>

              <br />
              <input type="email" placeholder="Your email*" required />
              <br />

              <label>Services(required)</label>
              <br />

              <input type="text" required placeholder="Type Service" />
            </div>
          </div>
          <br />
          <label>Your message</label>
          <br />
          <textarea
            className="w-100"
            placeholder="Type message*"
            rows="4"
            cols="50"
          />
          <br />
          <br />
          <button type="submit" className="btn btn-primary w-100">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
