import React from "react";
import { Card, Typography } from 'antd';
import Data from "../Data.json";

const { Title } = Typography;

const ProjectInfo = () => {
  
  return (
    <>
    <div id="projectinfo">  
      {Data.map((data) => (
          <div className="site-card-border-less-wrapper">
          <Card title={<Title level={2}>{data.name}</Title>}  style={{ width: 250, height:150 }}>
            <p>{data.desc}</p>
          </Card>
        </div>
        ))}
     
      </div>
    </>
  );
};

export default ProjectInfo;
