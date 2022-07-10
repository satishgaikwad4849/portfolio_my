import React from "react";
import Dev from "../../../images/dev.gif";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="intro">
      <div id="info">
        <h3 id="hi">Hello! I'm</h3>
        <h1 id="name">Satish Gaikwad</h1>
        <h4 id="designation">I'm a Frontend Developer</h4>
        <h5 id="designation_desc">Focused on building products that will make people's lives better. I love to learn new things and I am always open to learn new technologies.</h5>


        <div className="underline"></div>
        <ul id="introlist">
          <li id="lst">
            <a
              href="https://www.linkedin.com/in/satish-gaikwad-7b4665122/"
              target="#"
            >
              <AiFillLinkedin
                style={{ borderRadius: "2rem", fontSize: "3rem" }}
              />
            </a>
          </li>
          <li id="lst">
            <a href="https://github.com/satishgaikwad4849" target="#">
              <FaGithubSquare
                style={{
                  borderRadius: "2rem",
                  fontSize: "2.8rem",
                  marginTop: "2px",
                }}
              />
            </a>
          </li>
        </ul>
      </div>
      <img style={{ marginBottom: "3rem" }} src={Dev} alt="" />
    </div>
  );
};

export default Intro;
