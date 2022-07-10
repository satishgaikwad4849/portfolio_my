import React from "react";
import { Card } from 'antd';
import Data from "../Data.json";

const ProjectInfo = () => {
  return (
    <>
    <div id="projectinfo">  
      {Data.map((data) => (
          <div className="site-card-border-less-wrapper">
          <Card title={data.name}  style={{ width: 250, height:150 }}>
            <p>{data.desc}</p>
          </Card>
        </div>
        ))}
     
      </div>
    </>
  );
};

export default ProjectInfo;
