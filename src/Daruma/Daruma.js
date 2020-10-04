import React from "react";
import "./Daruma.css";

import Plx from "react-plx";
import {
  circleLeft,
  circleRight,
  daruma,
  nepal,
  cloud0,
  cloud1,
  cloud2,
  buddha,
} from "../Animations/Parrallax";

function Daruma() {
  return (
    <Plx
      id="container-darumaa"
      className="container-daruma"
      parallaxData={daruma}
    >
      <div className="container-circle">
        <Plx className="circle-left" parallaxData={circleLeft}></Plx>
        <Plx className="circle-right" parallaxData={circleRight}></Plx>
        <Plx className="plx-buddha" parallaxData={buddha}></Plx>
        <Plx className="nepal-picture-left" parallaxData={nepal}></Plx>
        <Plx className="cloud-0" parallaxData={cloud0}></Plx>
        <Plx className="cloud-1" parallaxData={cloud1}></Plx>
        <Plx className="cloud-2" parallaxData={cloud2}></Plx>
  
        {/*<ul>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          <li>Opening</li>
          
        </ul>*/}
      </div>
    </Plx>
  );
}

export default Daruma;
