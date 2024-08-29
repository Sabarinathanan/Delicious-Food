import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.main_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            in officia quisquam ut deleniti dolore quos incidunt quae voluptatum
            consectetur? Qui accusantium alias dolorum laborum suscipit at quis
            necessitatibus quibusdam!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>
                    +1-233-2323-3434
                </li>
                <li>
                    contact@tomoto.com
                </li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomoto.com - All rights reserved </p>
    </div>
  );
};

export default Footer;
