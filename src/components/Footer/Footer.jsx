import React from "react";
import "./Footer.css";
import { HeartFilled } from "@ant-design/icons";
import github from "../../images/github.gif";
import linkedin from "../../images/linkedin.gif";
import Satish_logo from '../../images/satish_logo.jpg';

import Mail from "../../images/mail.gif";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div id="myName">
            <img
          className="logo"
            src={Satish_logo}
            alt=""
          />
        </div>
        <ul className="lists">
          <a
            href="https://www.linkedin.com/in/satish-gaikwad-7b4665122/"
            target="#"
          >
            <li>
              <img className="list" src={linkedin} alt="" />
            </li>
          </a>
          <a href="https://github.com/satishgaikwad4849" target="#">
            <li>
              <img className="list" src={github} alt="" />
            </li>
          </a>
          <a href="mailto:satishgaikwad4849@gmail.com" target="#">
            <li>
              <img
                style={{ background: "white" }}
                className="list"
                src={Mail}
                alt=""
              />
            </li>
          </a>
        </ul>
        {/* <p className="intro">
          <a href="https://github.com/satishgaikwad4849/portfolio_my" target="#">
            Coded&nbsp;
          </a>{" "}
          With &nbsp;
          <HeartFilled style={{ color: "red" }} />
          &nbsp; By SATISH
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
