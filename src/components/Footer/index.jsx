import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

import { IoIosPhonePortrait } from "react-icons/io";

import "./footer.css";

const Footer = (props) => {
  return (
    <div className="footer" ref={props.refProp}>
      <div className="footer-box">
        <div className="footer-text">
          <p>
            Whether you need assistance with booking, have questions about our
            services, or require support during your reservation, we're here to
            help. You can contact us anytime via phone or email.
          </p>
        </div>
        <div className="footer-socials">
          <div className="social-item">
            <a href="tel:+310 745 9111" className="social-button">
              <IoIosPhonePortrait size={50} style={{ color: "#cecece" }} />
            </a>
            <p className="item-text">+310 745 9111</p>
          </div>
          <div className="social-item">
            <a href="mailto: limo@la.com" className="social-button">
              <HiOutlineMail size={40} style={{ color: "#cecece" }} />
            </a>
            <p className="item-text">limo@la.com</p>
          </div>
          <div className="social-item">
            <a
              href="https://www.instagram.com/vipstarslimo?igsh=MXEwdXU2eW9kZGIwYw=="
              className="social-button"
            >
              <FaInstagram size={40} style={{ color: "#cecece" }} />
            </a>
            <p className="item-text">@vipstarslimo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
