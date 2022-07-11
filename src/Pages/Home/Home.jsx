import React from "react";
import About from "../About/About";
import Intro from "./Intro/Intro";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import "./ProjectInfo/ProjectInfo.css";
import "./Intro/Intro.css";

const Home = () => {
  return (
    <div id="home">
      <Intro />
      <About />
      <ProjectInfo/>
    </div>
  );
};

export default Home;
