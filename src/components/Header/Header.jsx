import { Affix } from "antd";
import React from "react";
import "./Header.css";
import Satish_logo from '../../images/satish_logo.jpg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Affix offsetTop={0}>
      <div id="header">
        <div id="myName_logo">
          <img className="logo" src={Satish_logo} alt="" />
        </div>
        <div id="about_myName">
          <ul id="lists_head">
            <li className="list_head">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="list_head">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="list_head">
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Affix>
  );
};

export default Header;
